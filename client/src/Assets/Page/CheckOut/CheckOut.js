
import React, { useEffect, useState, useRef} from "react";
import {useNavigate} from "react-router-dom"
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import { 
    AddMethod,
    AddMethodBtn,
    AddMethodContent,
    AddMethodHeader,
    AddMethodMain,
    BillContent,
    BillHeader,
    BillingDetailsWrap,
    CheckOutButton,
    CheckoutWrap, 
    EachProduct, 
    InputTextArea,
    ListMethod,
    ListProduct,
    ProductContent,
    ProductWrap,
    SelectMethod,
    SelectMethodWrap,
    TotalCart
} from "./CheckOut_Styled";
import {
    InputText
} from "../Profile/Account/Account_Styled"


export default function Checkout() {

    const navigate = useNavigate();
    const listSelectRef = useRef();
    const [listItem, SetListitem] = useState([]);
    const [listMethod, SetListMethod] = useState([]);
    const [listSelectMethod, SetListSelectMethod] = useState([]);
    const [userInfo, SetUserInfo] = useState({
        fullname: "",
        address: "",
        phone: "",
        email: "",
        note: "",
        methodid: 0,
    });
    const [openSelectMethod, SetOpenSelectMethod] = useState(false);
    const [openAddMethod, SetOpenAddMethod] = useState(false);
    const [userMethodForm, SetUserMethodForm] = useState({
        methodtypeid: "", 
        description: ""
    });
    const [failToAddMethod, SetFailToAddMethod] = useState({state: false, msg: ""});
    const [failToCheckOut, SetFailToCheckOut] = useState([]);
    const iconDict = {
        "visa": faBrand.faCcVisa,
        "master card": faBrand.faCcMastercard,
        "paypal" : faBrand.faPaypal,
        "cash": fa.faMoneyBill
    };
    const RegExpInput = {
        fullname: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{10,30}$/,
        address: /^[a-zA-Z0-9ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s\,/-]{10,150}$/,
        phone: /^[0-9]{10,11}$/,
        email: new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"),
        methodid: /^[1-9]{1,}$/
    };
    const regExpAllNum = /^[0-9]{10}$/;

    const handleChangeData = (type, data) => {
        SetUserInfo(info => ({...info, [type]: data}))
    };

    const handleSelectMethod = () => {
        SetOpenSelectMethod(true);
    };

    const handleAddNewMethod = () => {
        SetOpenAddMethod(true);
    };

    const fetchCartItems = () => {
        fetch(`/navigation/cart?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListitem(data.field);
            }
            else {
                SetListitem([]);
            }
        })
    };

    const fetchMethod = () => {
        fetch(`/profile/method/${JSON.parse(localStorage.getItem("auth")).id}`, {method: "GET"})
        .then(res => res.json())
        .then(data=> {
            if(data.status === "accepted") {
                SetListMethod(data.field)
            }
        })
    };

    const fetchListSelectMethod = () => {
        fetch("/method/view", {method: "GET"})
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListSelectMethod(data.field);
            }
            else {
                SetListSelectMethod([]);
            }
        })
    };

    const removeCart = (id) => {
        fetch(`/cart/remove-all?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res=> res.json())
        .then(data => {
            if(data.status === " accepted") {
                navigate(`/shop-order-tracking/${id}`);
            }
        })
    }

    const addNewMethod = () => {
        if(userMethodForm.methodtypeid!== 0 && regExpAllNum.test(userMethodForm.description)){
            fetch(`/profile/${JSON.parse(localStorage.getItem("auth")).id}/add-method`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(userMethodForm),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    SetOpenAddMethod(false);
                    fetchMethod();
                }
                else {
                    SetFailToAddMethod({state: false, msg:"This account have this card!"});
                }

            }) ;            
        }


    };

    const filterConditionToSubmit = () => {
        console.log(Object.keys(RegExpInput).map(e => RegExpInput[e].test(userInfo[e])).findIndex(e => e !== true))
        return Object.keys(RegExpInput).map(e => RegExpInput[e].test(userInfo[e])).findIndex(e => e !== true)
    };

    const checkout = () => {
        if( !(filterConditionToSubmit() !== -1)){
            fetch(`/cart/check-out`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    methodid: userInfo.methodid,
                    userinfo: {
                        userid: JSON.parse(localStorage.getItem("auth")).id,
                        fullname: userInfo.fullname,
                        orderaddress: userInfo.address,
                        orderdate: new Date().toISOString(),
                        email: userInfo.email,
                        phonenum: userInfo.phone,
                        description: userInfo.note
                    }

                }),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    removeCart(data.field.id);
                }
                else {
                    SetFailToCheckOut(data.field);
                }

            }) ;            
        }

    };

    useEffect(() => {
        fetchCartItems();
        fetchMethod();    
        fetchListSelectMethod();    
        document.title = "Vegetable - Checkout";

        const handleClickOutside = (event) => {
            if(listSelectRef.current && !listSelectRef.current.contains(event.target)) {
                SetOpenSelectMethod(false);
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    if(listItem.length ===0) {
        return (
            <div style={{height: "280px", display: "grid", placeItems: "center"}}>
                <p>There's no item in your cart</p>
            </div>
        )
    }
    else {
        return (

            <CheckoutWrap>

                <BillingDetailsWrap>

                    <BillHeader>
                        <h1>Billing Details</h1>
                    </BillHeader>

                    <BillContent>

                        <InputText>
                            <label for="fullname">Fullname</label>
                            <input 
                            id="fullname" 
                            placeholder="Fullname"
                            type="text" 
                            min={10} 
                            value={userInfo.fullname}
                            onChange= {e => handleChangeData("fullname", e.target.value)}
                            />
                            <ul>
                                {<li className={userInfo.fullname.length >= 10 ?"ok": "not"}>At least 10 characters</li>}
                                {<li className={userInfo.fullname.length <=30 ?"ok": "not"}>Maximum 30 characters</li>}
                                {<li className={!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(userInfo.fullname) ?"ok": "not"}>Do not contain special characters or number</li>}
                            </ul>
                        </InputText>
                        
                        <InputText>
                            <label for="order-address">Order Address</label>
                            <input 
                            id="order-address" 
                            placeholder="Order address"
                            type="text" 
                            min={10} 
                            value={userInfo.address}
                            onChange= {e => handleChangeData("address", e.target.value)}
                            />
                            <ul>
                                {<li className={userInfo.address.length >=10 ?"ok": "not"}>At least 10 characters</li>}
                                {<li className={userInfo.address.length <=150 ?"ok": "not"}>Maximum 150 characters</li>}
                                {<li className={!new RegExp("[!@#\$%\^\&*\)\(=_+.]", "g").test(userInfo.address) ? "ok" : 'not'}>Do not contain special characters except: "-"</li>}
                            </ul>
                        </InputText>

                        <InputText>
                            <label for="phone-num">Phone number</label>
                            <input 
                            id="phone-num" 
                            placeholder="0000000000"
                            type="text" 
                            min={10} 
                            value={userInfo.phone}
                            onChange= {e => handleChangeData("phone", e.target.value)}
                            />
                            <ul>
                                {<li className={userInfo.phone.length>=10 ?"ok": "not"}>At least 10 characters</li>}
                                {<li className={userInfo.phone.length<=11 ?"ok": "not"}>Maximum 11 characters</li>}
                                {<li className={new RegExp("^[0-9]+$").test(userInfo.phone) ?"ok": "not"}>Contain numbers only</li>}
                            </ul>
                        </InputText>

                        <InputText>
                            <label for="order-address">Email</label>
                            <input 
                            id="order-address" 
                            type="text" 
                            placeholder="abc@gmail.com"
                            min={10} 
                            value={userInfo.email}
                            onChange= {e => handleChangeData("email", e.target.value)}
                            />
                            <ul>
                                {<li className={userInfo.email.length >=10 ?"ok": "not"}>At least 10 characters</li>}
                                {<li className={userInfo.email.length <=50 ?"ok": "not"}>Maximum 50 characters</li>}
                                {<li className={new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(userInfo.email) ?"ok": "not"}>Match format: abc@example.com</li>}
                            </ul>
                        </InputText>

                        <InputTextArea>
                            <label for="description">Notes</label>
                            <textarea 
                            id="description"
                            placeholder="Note something about your order"
                            min={0} 
                            value={userInfo.note}
                            onChange= {e => handleChangeData("note", e.target.value)}
                            />
                            <ul>
                                {<li className={userInfo.note.length <=150 ?"ok": "not"}>Maximum 150 characters</li>}
                            </ul>
                        </InputTextArea>

                    </BillContent>

                </BillingDetailsWrap>

                <ProductWrap>

                    <BillHeader>
                        <h1>Product</h1>
                    </BillHeader>
                    
                    <ProductContent>

                        <ListProduct>
                            {
                                listItem.map(e => (

                                    <EachProduct key={e.id} className={failToCheckOut.filter(ev => ev.productid === e.id).length !== 0 ? "not" : "ok"}>

                                        <div>

                                            <img src={ConvertToIamge(e.image)} alt="item cart"/>

                                        </div>

                                        <div>

                                            <div>
                                                <p>{e.PdName}</p>
                                                <p>{e.price} / {e.unit}</p>
                                            </div>
                                            
                                            <div>
                                                <p>QTY: {e.quantity}</p>
                                                {failToCheckOut.filter(ev => ev.productid === e.id).length !== 0 && (
                                                    <p style={{color: "var(--Primary_Red)", fontWeight: "bold", fontSize: "15px"}}>Out of stock</p>
                                                )}
                                            </div>

                                        </div>

                                    </EachProduct>

                                ))
                            }

                        </ListProduct>

                        <TotalCart>
                            <p>Total</p>
                            <p>{listItem.reduce((acc, curr) =>{
                                return acc += curr.price * curr.quantity
                            }, 0)}$</p>
                        </TotalCart>

                        <SelectMethodWrap>

                            <SelectMethod>
                                <button onClick={handleSelectMethod}> 
                                {
                                listMethod.findIndex(e=> e.id === userInfo.methodid) === -1 
                                ?   <p>Click to select</p>
                                :  (
                                    <>
                                        <p>
                                            <FontAwesomeIcon icon={iconDict[listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].type]}/>{listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].type} {listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].description}
                                        </p>
                                    </>
                                )}</button>
                            </SelectMethod>

                            {
                                openSelectMethod 
                                && (
                                <ListMethod ref={listSelectRef}>

                                    {
                                        listMethod.map(e => (
                                            <button onClick={ev => {
                                                handleChangeData("methodid", e.id); 
                                                SetOpenSelectMethod(false);
                                            }}>
                                                <p><FontAwesomeIcon icon={iconDict[e.type]}/>{e.type}</p>
                                                <p>{e.description}</p>
                                            </button>
                                        ))
                                    }     

                                    <button onClick={handleAddNewMethod}><p><FontAwesomeIcon icon={fa.faAdd}/>Add new method</p></button>
                        
                                </ListMethod>                                    
                                )
                            }

                            {
                                openAddMethod 
                                && (
                                <AddMethod>

                                    <AddMethodMain>

                                        <AddMethodHeader>

                                            <p>Add new method</p>
                                            <button onClick={e => {
                                                SetOpenAddMethod(false)
                                                SetUserMethodForm({
                                                    methodtypeid: 0, 
                                                    description: ""
                                                })
                                            }}><FontAwesomeIcon icon={fa.faClose}/></button>
                                            

                                        </AddMethodHeader>

                                        <AddMethodContent>

                                            <div>

                                                {
                                                    listSelectMethod.length !==0 
                                                    ? listSelectMethod.map(e => (
                                                        <button 
                                                        key={e.id} 
                                                        className={e.id === userMethodForm.methodtypeid ? "ok" : "not"}
                                                        onClick={ev => SetUserMethodForm({methodtypeid: e.id, description: ""})}>
                                                            <FontAwesomeIcon icon={iconDict[e.type]}/> {e.type}
                                                        </button>
                                                    ))
                                                    : <p>Nothing to select</p>
                                                }

                                            </div> 

                                            <div>

                                                <label for="cardnumber">Card number</label>
                                                <input 
                                                id="cardnumber" 
                                                type="text" 
                                                placeholder="0000000000"
                                                value={userMethodForm.description}
                                                onChange={e => {
                                                    SetUserMethodForm(form => ({...form, description: e.target.value}));
                                                    }}/>
                                                {!failToAddMethod.state && <p>{failToAddMethod.msg}</p>}
                                            </div>                                              
                                
                                        </AddMethodContent>

                                        <AddMethodBtn>
                                            <button 
                                            onClick={addNewMethod}
                                            disabled={!(userMethodForm.methodtypeid !== 0 && regExpAllNum.test(userMethodForm.description))}
                                            ><FontAwesomeIcon icon={fa.faAdd} /> Add new method</button>
                                        </AddMethodBtn>
                                    </AddMethodMain>

                                </AddMethod>                                    
                                )

                            }

                        </SelectMethodWrap>  

                        <CheckOutButton>
                            <button onClick={checkout} disabled={filterConditionToSubmit() !== -1}>Place order</button>
                        </CheckOutButton>

                    </ProductContent>

                </ProductWrap>

            </CheckoutWrap>      
                          
        )
    }


}