
import React, { useEffect, useMemo, useState } from "react";
import { 
    PartWrap,
    SectionContent,
    SectionHeader, 
    SectionPart 
} from "../Account/Account_Styled";
import { 
    TableHeader,
    TableRow 
} from "./Orders_Styled";

export default function Orders() {

    const [listOrder, SetListOrder] = useState([]);
    const [page, SetPage] = useState(1);

    const fetchListOrder = () => {
        fetch(`/profile/orders/${JSON.parse(localStorage.getItem("auth")).id}?each=10&page=${page}`)
        .then(res =>res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListOrder(data.field);
            }else {
                SetPage(page-1);
            }
        })
    };

    const scrollToFetchMore = (e) => {
        if(e.target.scrollHeight- e.target.scrollTop === e.target.clientHeight) {
            SetPage(page+1);
        }
    };

    useMemo(() => {
        fetchListOrder();
    }, [page])

    useEffect(()=>{
        fetchListOrder();
        document.title = "Vegetable - Account Orders";
    }, []); 

    if(listOrder.length === 0) {
        return (
            <PartWrap>

                <SectionHeader>
                    <h1>Nothing in your list order</h1>
                </SectionHeader>
                
            </PartWrap>
        )
    }

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

                    <div onScroll={e => scrollToFetchMore(e)}>
                        {
                            listOrder.map(e => (
                                <TableRow href={`/shop-order-tracking/${e.id}`}>
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
                                        <p>{e.total}$</p>
                                    </div>

                                    <div>
                                        <p>{e.state}</p>
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