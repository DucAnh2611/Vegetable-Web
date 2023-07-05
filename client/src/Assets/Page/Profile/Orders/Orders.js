
import React, { useEffect, useMemo, useState } from "react";

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
    }, []); 

    if(listOrder.length === 0) {
        return (
            <div>
                <p>Nothing in your list order</p>
            </div>
        )
    }

    return (
        <div>

            <div>

                <div>
                    <p>OrderID</p>
                </div>

                <div>
                    <p>Order Fullname</p>
                </div>

                <div>
                    <p>Order Email</p>
                </div>

                <div>
                    <p>Order Total</p>
                </div>

                <div>
                    <p>Order Note</p>
                </div>

                <div>
                    <p>State</p>
                </div>

            </div>

            <div onScroll={e => scrollToFetchMore(e)}>
                {
                    listOrder.map(e => (
                        <a href={`/shop-order-tracking/${e.id}`}>
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
                                <p>{e.OrderDescription}</p>
                            </div>

                            <div>
                                <p>{e.state}</p>
                            </div>
                        </a>
                    ))
                }

            </div>

        </div>
    )
}