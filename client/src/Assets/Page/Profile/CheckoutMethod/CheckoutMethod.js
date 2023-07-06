
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import { 
    PartWrap, 
    SectionContent, 
    SectionHeader, 
    SectionPart 
} from "../Account/Account_Styled";
import { AddNewMethodWrap, ListMethodUserWrap, ListTypeWarp, MainNewMethod, NewMethodWrap } from "./CheckoutMethod_Styled";

export default function CheckoutMethod() {

    const addRef = useRef();
    const newMedRef = useRef();
    const [listTypeMethod, SetListTypeMethod] = useState([]);
    const [newCardInfo, SetNewCartInfo] = useState({methodtypeid: 0, description: ""});
    const [openListTypeMethod, SetOpenListTypeMethod]= useState(false);
    const [failToAddMethod, SetFailToAddMethod] = useState({state: false, msg: ""});
    const [listMethodUser, SetListMethodUser] = useState([]);
    const iconDict = {
        "visa": faBrand.faCcVisa,
        "master card": faBrand.faCcMastercard,
        "paypal" : faBrand.faPaypal,
        "cash": fa.faMoneyBill
    };
    
    const regExpAllNum = /^[0-9]{10}$/;

    const handleCreateNewMethod = (id) => {
        SetNewCartInfo({
            methodtypeid: id,
            description: ""
        });
        SetOpenListTypeMethod(false);
        SetFailToAddMethod({});
    };

    const addNewMethod = () => {
        if(regExpAllNum.test(newCardInfo.description)) {
            fetch(`/profile/${JSON.parse(localStorage.getItem("auth")).id}/add-method`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newCardInfo),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    SetOpenListTypeMethod(false);
                    fetchListMethodUser();
                    window.location.reload();
                }
                else {
                    SetFailToAddMethod({state: true, msg:"This account have this card!"});
                }

            }) ;            
        }


    };

    const fetchListTypeMethod = () => {
        fetch("/method/view")
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListTypeMethod(data.field);
            }
        })
    };

    const fetchListMethodUser = () => {
        fetch(`/profile/method/${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListMethodUser(data.field);
            }else {
                SetListMethodUser([]);
            }
        })
    };

    useEffect(()=> {
        fetchListTypeMethod();
        fetchListMethodUser();

        const handleClickOutside = (event) => {
            if (addRef.current && !addRef.current.contains(event.target)) {
                SetOpenListTypeMethod(false);
            }
            if(newMedRef.current && !newMedRef.current.contains(event.target)) {
                SetNewCartInfo({
                    methodtypeid: 0,
                    description: ""
                });
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        document.title = "Vegetable - Account Methods";
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [])

    return (
        <PartWrap>

            <SectionPart>

                <SectionHeader>
                    <h1>Method</h1>
                </SectionHeader>

                <SectionContent>

                    <AddNewMethodWrap>
                        <button onClick={e => {
                            SetOpenListTypeMethod(true);
                            SetNewCartInfo({
                                methodtypeid: 0,
                                description: ""
                            });
                            }}><FontAwesomeIcon icon={fa.faAdd}/> Add new Method</button>
                        {
                            openListTypeMethod 
                            && (
                                <ListTypeWarp ref={addRef}>

                                    {
                                        listTypeMethod.map(e => (
                                            <div key={e.id} onClick={ ev => handleCreateNewMethod(e.id)}>
                                                <FontAwesomeIcon icon={iconDict[e.type]}/><p>{e.type}</p>
                                            </div>
                                        ))
                                    }

                                </ListTypeWarp>                        
                            )
                        }
                        {
                            newCardInfo.methodtypeid !==0 
                            && (
                                <NewMethodWrap>

                                    <MainNewMethod ref={newMedRef}>
                                        <div>
                                            <FontAwesomeIcon icon={iconDict[listTypeMethod.filter(e => e.id === newCardInfo.methodtypeid)[0].type]}/>
                                            <p>{listTypeMethod.filter(e => e.id === newCardInfo.methodtypeid)[0].type}</p>
                                            
                                        </div>

                                        <div>
                                            <label for="cardnumber">Card number</label>
                                            <input 
                                            id="cardnumber" 
                                            type="text" 
                                            value={newCardInfo.description}
                                            placeholder="0000000000"
                                            onChange={e => SetNewCartInfo(form => ({...form, description: e.target.value}))}/> 
                                            {failToAddMethod.state && <p>{failToAddMethod.msg}</p>}                               
                                        </div>

                                        <div>
                                            <button onClick={addNewMethod} disabled={!regExpAllNum.test(newCardInfo.description)}>Add new method</button>
                                        </div>
                                    </MainNewMethod>

                                </NewMethodWrap>                        
                            )
                        }


                    </AddNewMethodWrap>

                    <ListMethodUserWrap>

                        {
                            listMethodUser.map(e => (
                                <div>
                                    <p><FontAwesomeIcon icon={iconDict[e.type]}/> {e.type}</p>
                                    <p>{e.description}</p>
                                </div>
                            ))
                        }

                    </ListMethodUserWrap>

                </SectionContent>

            </SectionPart>


        </PartWrap>
    )
}