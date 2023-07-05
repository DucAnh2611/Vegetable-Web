
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderTrackingDefault() {

    const navigate = useNavigate();
    const [orderid, SetOrderId] = useState("");
    const [email, SetEmail] = useState("");

    const fetchOrder = () => {
        fetch(`/order-tracking?email=${email}&orderid=${orderid}&userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted"){
                navigate(`/shop-order-tracking/${data.field}`);
            }
        })
    }
    const confirmtrack = () => {
        if(orderid!== "" && email !== "") {
            fetchOrder();
        }
    }

    return (
        <div>

            <div>
                <a href="/shop-cart">Cart</a>
                <a href="/shop-checkout">Checkout</a>
                <a href="/shop-order-tracking">Order tracking</a>
            </div>

            <div>

                <div>
                    <h1>Order Tracking</h1>
                </div>

                <div>

                    <div>
                        <label for="orderid">Order Id</label>
                        <input 
                        type="text" 
                        id="orderid" 
                        placeholder="Show in your profile"
                        onChange={ e => SetOrderId(e.target.value)}/>
                    </div>

                    <div>
                        <label for="email">Billing email</label>
                        <input 
                        type="text"         
                        id="email" 
                        placeholder="Email you use when checkout"
                        onChange={ e => SetEmail(e.target.value)}/>
                    </div>

                    <div>
                        <button onClick={confirmtrack}>Track</button>
                    </div>
                </div>

            </div>

        </div>
    )
}