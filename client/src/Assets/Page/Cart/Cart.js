
import React, { useEffect, useState } from "react";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
        })
    }

    const removeItem = (id) => {
        fetch(`/navigation/cart/remove?userid=${JSON.parse(localStorage.getItem("auth")).id}&productid=${id}`)
        .then(res => res.json())
        .then(data => 
            fetchCartItems()
        );        
    }

    const addItem = (quantity, id) => {
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
        .then(res => res.json())
        .then(data=> {
            fetchCartItems()
        })
    }

    const changeItemQuantity = (quantity, id) => {
        let req = /^\d+$/;
        if(req.test(quantity)) {
            if(quantity <= 0) {
                removeItem(id);
            }
            else {
                addItem(quantity, id);
            }            
        }

    }

    useEffect(() => {
        fetchCartItems();
        document.title = "Vegetable - Cart";
    }, []);

    return (
        <div>

            <div>
                Navigate pane
            </div>

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
                                        <button onClick={ev => changeItemQuantity(e.quantity - 1, e.id)}><FontAwesomeIcon icon={fa.faMinus}/></button>
                                        <p>{e.quantity}</p>
                                        <button onClick={ev => changeItemQuantity(e.quantity + 1, e.id)}><FontAwesomeIcon icon={fa.faPlus}/></button>
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

        </div>
    )
}