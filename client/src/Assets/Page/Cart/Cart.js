
import React, { useEffect, useState } from "react";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {debounce} from 'lodash';
import * as fa from "@fortawesome/free-solid-svg-icons";

export default function Cart() {

    const [listItem, SetListitem] = useState([]);

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
    }

    const removeItem = (id) => {
        fetch(`/navigation/cart/remove?userid=${JSON.parse(localStorage.getItem("auth")).id}&productid=${id}`)
        .then(res => res.json())
        .then(data => 
            fetchCartItems()
        );        
    }

    const addItem = debounce((quantity, id) => {

        fetch(`/product-detail/${id}/addtocart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: JSON.parse(localStorage.getItem("auth")).id, 
                quantity: quantity
            }),
        })
        // .then(res => res.json())
        // .then(data=> {
        // });
        
    }, 1000);

    const changeItemQuantity = (quantitychange, id, quantitydef) => {
        if(quantitydef + quantitychange > 0) {
            SetListitem(listItem.map((e) => {
                if(e.id === id) {
                    return {
                        ...e, 
                        quantity : e.quantity += parseInt(quantitychange)
                    }
                    
                }
                return e;
            }))
            addItem(quantitychange, id);
        }            

    };

    useEffect(() => {
        fetchCartItems();
        document.title = "Vegetable - Cart";
    }, []);

    return (

        <div>

            <div>

                <div>

                    header

                </div>

                <div>

                    {
                        listItem.length !==0 
                        ? listItem.map(e => (
                            <div key={e.id}>

                                <div>
                                    <img src={ConvertToIamge(e.image)} alt="item cart"/>
                                </div>

                                <div>
                                    <p>{e.PdName}</p>
                                </div>

                                <div>
                                    <p>${e.price} / {e.unit}</p>
                                </div>

                                <div>
                                    <button onClick={ev => changeItemQuantity(- 1, e.id, e.quantity)}><FontAwesomeIcon icon={fa.faMinus}/></button>
                                    <input type="number" onChange={ev => changeItemQuantity(ev.target.value < 0 ? 1 :ev.target.value - e.quantity, e.id, e.quantity)} value={e.quantity}/>
                                    <button onClick={ev => changeItemQuantity(1, e.id, e.quantity)}><FontAwesomeIcon icon={fa.faPlus}/></button>
                                </div>

                                <div>
                                    <p>${parseFloat(e.quantity)*parseFloat(e.price)}</p>
                                </div>

                                <div>
                                    <button onClick={ev => removeItem(e.id)}><FontAwesomeIcon icon={fa.faClose}/></button>
                                    
                                </div>

                            </div>
                        ))
                        : <p>Nothing in cart</p>
                    }

                </div>

                <div>

                    <a href="/shop">Continute Shopping</a>
                    
                </div>

            </div>

            <div>

                <div>

                    <h1>Total</h1>

                </div>

                <div>

                    <div>
                        <p>Total: {listItem.reduce((acc, cur) => {
                            return acc += cur.price * cur.quantity
                        }, 0)}</p>
                    </div>
                    <div>
                        <a href="/shop-checkout ">Proceed to Checkout</a>
                    </div>

                </div>


            </div>

        </div>

    )
}