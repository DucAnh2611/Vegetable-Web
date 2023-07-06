
import React, { useEffect, useState } from "react";
import { PartWrap, SectionContent, SectionHeader, SectionPart } from "../../Profile/Account/Account_Styled";
import { TableHeader, TableRow } from "./ChangeStateOrder_Styled";

export default function ChangeStateOrder () {

    const [listType, SetListType] = useState([]);
    const [listOrder, SetListOrder] = useState([]);
    const [page, SetPage] = useState(1);

    const fetchListType = () => {
        fetch("/order-tracking/view/state")
        .then(res => res.json())
        .then(data => {
            SetListType(data.field);
        })
    };

    const fetchListOrder = () => {
        fetch(`/show/order?each=10&page=${page}&userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListOrder(data.field);                
            }

        })
    };

    const changeState = (stateForm) => {
        fetch(`/change/orderstate`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(stateForm),
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.status === "accepted") {
                window.location.reload();
            }

        }) ; 
    };

    useEffect(()=> {
        fetchListType();
        fetchListOrder();
    }, []);

    return (
        <PartWrap>

            <SectionPart>

                <SectionHeader>
                    <h1>List orders</h1>
                </SectionHeader>

                <SectionContent>

                    <TableHeader className="header">

                        <div>
                            <p>ID</p>
                        </div>

                        <div>
                            <p>Order Fullname</p>
                        </div>

                        <div>
                            <p>Order Email</p>
                        </div>

                        <div>
                            <p>Total</p>
                        </div>

                        <div>
                            <p>State</p>
                        </div>

                    </TableHeader>

                    <div>
                        {
                            listOrder.map(e => (
                                <TableRow>
                                    <div>
                                        <p>{e.id}</p>
                                    </div>

                                    <div>
                                        <p>{e.OrderFullname}</p>
                                    </div>

                                    <div>
                                        <p>{e.OrderEmail}</p>
                                    </div>

                                    <div>
                                        <p>{e.total}</p>
                                    </div>

                                    <div>
                                        <select 
                                        defaultValue={0}
                                        onChange={eve => changeState({
                                            orderid: e.id,
                                            newstateid: parseInt(eve.target.value),
                                            userid: JSON.parse(localStorage.getItem("auth")).id
                                        })
                                        }
                                        >   
                                            <option value={0} hidden={true}>{e.state}</option>
                                            {
                                                listType.map(ev=> (
                                                    <option value={ev.id}>{ev.state}</option>
                                                ))
                                            }
                                        </select>
                                        
                                    </div>
                                </TableRow>
                            ))
                        }

                    </div>   

                </SectionContent>

            </SectionPart>

        </PartWrap>
    )
}