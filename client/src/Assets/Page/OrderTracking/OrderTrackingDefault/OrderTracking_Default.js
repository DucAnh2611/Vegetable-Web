
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
    OrderTrackingContent,
    OrderTrackingDefaultWrap, OrderTrackingHeader
} from "./OrderTracking_Df_Styled";

export default function OrderTrackingDefault() {

    const navigate = useNavigate();
    const [orderid, SetOrderId] = useState("");
    const [email, SetEmail] = useState("");
    const [fail, SetFail] = useState(false);

    const fetchOrder = () => {
        fetch(`/order-tracking?email=${email}&orderid=${orderid}&userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted"){
                navigate(`/shop-order-tracking/${orderid}`);
                SetFail(false);
            }
            else {
                SetFail(true);
            }
        })
    }
    const confirmtrack = () => {
        if(orderid!== "" && email !== "") {
            fetchOrder();
        }
        else {
            SetFail(true);
        }
    }
    useEffect(() => {
        document.title = "Vegetable - Order Tracking";
    })

    return (

        <OrderTrackingDefaultWrap>

            <OrderTrackingHeader>
                <h1>Order Tracking</h1>
            </OrderTrackingHeader>

            <OrderTrackingContent>

                <div>
                    <label for="orderid">Order Id</label>
                    <input 
                    type="text" 
                    id="orderid" 
                    placeholder="Show in your profile"
                    onChange={ e => SetOrderId(e.target.value)}/>
                    <p>ID of your order. You can find in your Account</p>
                </div>

                <div>
                    <label for="email">Billing email</label>
                    <input 
                    type="text"         
                    id="email" 
                    placeholder="Email you use when checkout"
                    onChange={ e => SetEmail(e.target.value)}/>
                    <p>Your email you have userd for checkout. You can find in your Account</p>
                </div>
            
                <div>
                    <button onClick={confirmtrack}>Track</button>
                </div>

                {fail && (
                <div>
                    <p>There are no results found</p>
                </div>
                )}
                
            </OrderTrackingContent>

        </OrderTrackingDefaultWrap>

    )
}