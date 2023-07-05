
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import React, { useEffect, useState } from "react";

export default function CheckoutMethod() {

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

    const handleCreateNewMethod = (id) => {
        console.log(id);
        SetNewCartInfo({
            methodtypeid: id,
            description: ""
        });
        SetOpenListTypeMethod(false);
    };

    const addNewMethod = () => {

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
            }
            else {
                SetFailToAddMethod({state: true, msg:"This account have this card!"});
            }

        }) ;

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
    }, [])

    return (
        <div>

            <div>
                <button onClick={e => {
                    SetOpenListTypeMethod(true);
                    SetNewCartInfo({
                        methodtypeid: 0,
                        description: ""
                    });
                    }}><p><FontAwesomeIcon icon={fa.faAdd}/>Add new Method</p></button>
                {
                    openListTypeMethod 
                    && (
                        <div>

                            {
                                listTypeMethod.map(e => (
                                    <div key={e.id} onClick={ ev => handleCreateNewMethod(e.id)}>
                                        <p><FontAwesomeIcon icon={iconDict[e.type]}/>{e.type}</p>
                                    </div>
                                ))
                            }

                        </div>                        
                    )
                }
                {
                    newCardInfo.methodtypeid !==0 
                    && (
                        <div>

                            <div>
                                <label for="cardnumber">Card number</label>
                                <input 
                                id="cardnumber" 
                                type="text" 
                                placeholder="Card number"
                                value={newCardInfo.description}
                                onChange={e => SetNewCartInfo(form => ({...form, description: e.target.value}))}/> 
                                {failToAddMethod.state && <p>{failToAddMethod.msg}</p>}                               
                            </div>

                            <div>
                                <button onClick={addNewMethod}>Add new method</button>
                            </div>

                        </div>                        
                    )
                }


            </div>

            <div>

                {
                    listMethodUser.map(e => (
                        <div>
                            <p><FontAwesomeIcon icon={iconDict[e.type]}/>{e.type}</p>
                            <p>{e.description}</p>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}