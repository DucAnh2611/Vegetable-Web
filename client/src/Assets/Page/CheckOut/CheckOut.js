
import React, { useEffect, useState} from "react";

import {useNavigate} from "react-router-dom"
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";

export default function Checkout() {

    const navigate = useNavigate();
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

    const iconDict = {
        "visa": faBrand.faCcVisa,
        "master card": faBrand.faCcMastercard,
        "paypal" : faBrand.faPaypal,
        "cash": fa.faMoneyBill
    };
    
    const RegExpInput = {
        "fullname": /[a-zA-Z]\w/i,
        "address": /[a-zA-Z]\w/i,
        "phone": /[0-9]{10, 11}/,
        "note": /[a-zA-Z]\w/i
    }

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

    const removeCart = () => {
        fetch(`/cart/remove-all?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res=> res.json())
        .then(data => {
            if(data.status === " accepted") {
                navigate("/shop-order-tracking");
            }
        })
    }

    const addNewMethod = () => {

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

    };

    const checkout = () => {
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
                removeCart();
            }
            else {
                alert(JSON.stringify(data));
            }

        }) ;
    }

    useEffect(() => {
        fetchCartItems();
        fetchMethod();    
        fetchListSelectMethod();    
        document.title = "Vegetable - Checkout";
    }, []);


    return (
        <div>

            <div>
                <a href="/shop-cart">Cart</a>
                <a href="/shop-checkout">Checkout</a>
                <a href="/shop-order-tracking">Order tracking</a>
            </div>

            {
                listItem.length ===0 
                ?(
                    <div>
                        <p>There's no item in your cart</p>
                    </div>
                )
                : (
                <div>

                    <div>

                        <div>
                            <h1>Billing Details</h1>
                        </div>

                        <div>

                            <div>
                                <label for="fullname">Fullname</label>
                                <input 
                                id="fullname" 
                                type="text" 
                                min={10} 
                                value={userInfo.fullname}
                                onChange= {e => handleChangeData("fullname", e.target.value)}
                                />
                                <ul>
                                    {userInfo.fullname.length >= 10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.fullname.length <=30 ? <li>ok</li> : <li>Maximum 30 characters</li>}
                                    {!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(userInfo.fullname) ? <p>ok</p> : <li>Do not contain special characters or number</li>}
                                </ul>
                            </div>
                            
                            <div>
                                <label for="order-address">Order Address</label>
                                <input 
                                id="order-address" 
                                type="text" 
                                min={10} 
                                value={userInfo.address}
                                onChange= {e => handleChangeData("address", e.target.value)}
                                />
                                <ul>
                                    {userInfo.address.length >=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.address.length <=150 ?<li>ok</li> : <li>Maximum 150 characters</li>}
                                </ul>
                            </div>

                            <div>
                                <label for="phone-num">Phone number</label>
                                <input 
                                id="phone-num" 
                                type="text" 
                                min={10} 
                                value={userInfo.phone}
                                onChange= {e => handleChangeData("phone", e.target.value)}
                                />
                                <ul>
                                    { userInfo.phone.length>=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    { userInfo.phone.length<=11 ?<li>ok</li> : <li>Maximum 11 characters</li>}
                                    {new RegExp("^[0-9]+$").test(userInfo.phone) ? <li>ok</li> : <li>Contain numbers only</li>}
                                </ul>
                            </div>

                            <div>
                                <label for="order-address">Email</label>
                                <input 
                                id="order-address" 
                                type="text" 
                                min={10} 
                                value={userInfo.email}
                                onChange= {e => handleChangeData("email", e.target.value)}
                                />
                                <ul>
                                    {userInfo.email.length >=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.email.length <=50 ?<li>ok</li> : <li>Maximum 50 characters</li>}
                                    {new RegExp("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$").test(userInfo.email) ? <li>ok</li> : <li>Match format: abc@example.com</li>}
                                </ul>
                            </div>

                            <div>
                                <label for="description">Notes</label>
                                <textarea 
                                id="description"
                                min={0} 
                                value={userInfo.note}
                                onChange= {e => handleChangeData("note", e.target.value)}
                                />
                                <ul>
                                    {userInfo.note.length >=10 ?<li>ok</li> : <li>At least 10 characters</li>}
                                    {userInfo.note.length <=150 ?<li>ok</li> : <li>Maximum 150 characters</li>}
                                </ul>
                            </div>

                        </div>

                    </div>

                    <div>

                        <div>
                            <h1>Product</h1>
                        </div>
                        
                        <div>

                            <div>
                                {
                                    listItem.map(e => (

                                        <div>

                                            <div>

                                                <img src={ConvertToIamge(e.image)} alt="item cart"/>

                                            </div>

                                            <div>

                                                <div>
                                                    <p>{e.PdName}</p>
                                                    <p>{e.price} / {e.unit}</p>
                                                </div>
                                                
                                                <div>
                                                    <p><b>QTY: {e.quantity}</b></p>
                                                </div>

                                            </div>

                                        </div>

                                    ))
                                }

                            </div>

                            <div>
                                <p>Total</p>
                                <p>{listItem.reduce((acc, curr) =>{
                                    return acc += curr.price * curr.quantity
                                }, 0)}$</p>
                            </div>

                            <div>

                                <div>
                                    <button onClick={handleSelectMethod}> {listMethod.findIndex(e=> e.id === userInfo.methodid) === -1 
                                    ?<p>Click to select</p>
                                :  (
                                    <>
                                        <p><FontAwesomeIcon icon={iconDict[listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].type]}/>{listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].type}</p>
                                        <p>{listMethod[listMethod.findIndex(e=> e.id === userInfo.methodid)].description}</p>
                                    </>
                                )}</button>
                                </div>

                                {
                                    openSelectMethod 
                                    && (
                                    <div>

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

                                        <button onClick={handleAddNewMethod}>Add new method</button>
                            
                                    </div>                                    
                                    )
                                }

                                {
                                    openAddMethod 
                                    && (
                                    <div>

                                        <div>

                                            <p>Add new method</p>
                                            <button onClick={e => {
                                                SetOpenAddMethod(false)
                                                SetUserMethodForm({
                                                    methodtypeid: 0, 
                                                    description: ""
                                                })
                                                }}><FontAwesomeIcon icon={fa.faClose}/></button>

                                        </div>


                                        <div>

                                            {
                                                listSelectMethod.length !==0 
                                                ? listSelectMethod.map(e => (
                                                    <button 
                                                    key={e.id} 
                                                    onClick={ev => SetUserMethodForm(form => ({...form, methodtypeid: e.id}))}>
                                                        <FontAwesomeIcon icon={iconDict[e.type]}/>{e.type}
                                                    </button>
                                                ))
                                                : <p>Nothing to select</p>
                                            }

                                        </div>  

                                        {
                                            userMethodForm.methodtypeid !==0 
                                            && (
                                            <div>

                                                <label for="cardnumber">Card number</label>
                                                <input 
                                                id="cardnumber" 
                                                type="text" 
                                                placeholder="Card number"
                                                onChange={e => SetUserMethodForm(form => ({...form, description: e.target.value}))}/>
                                                {failToAddMethod.state && <p>{failToAddMethod.msg}</p>}
                                            </div>                                              
                                            )
                                        }
                                                


                                        <div>
                                            <button 
                                            onClick={addNewMethod}><FontAwesomeIcon icon={fa.faAdd} /> Add</button>
                                        </div>                                   


                                    </div>                                    
                                    )

                                }

                            </div>  

                            <div>
                                <button onClick={checkout}>Place order</button>
                            </div>

                        </div>

                    </div>

                </div>                    
                )
            }

        </div>
    )
}