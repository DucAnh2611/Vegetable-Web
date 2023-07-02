
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import * as fa from "@fortawesome/free-solid-svg-icons";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { 
    EachItemInWishList,
    WishListContent,
    WishListHeader,
    WishListPane,
    WishListWrapper
 } from "./WishListPane_Styled";

export default function WishList({setOpenPane}) {

    const [WishList, SetWishList] = useState([]);

    const handleCloseBtn = () => {
        setOpenPane(false);
    }

    const fetchWishList = () =>{
        fetch(`/navigation/wish-list?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetWishList(data.field);
            }
        })
    };

    const removeProductWishList = (id) =>{
        fetch(`/navigation/wish-list/remove?userid=${JSON.parse(localStorage.getItem("auth")).id}&productid=${id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetWishList(WishList.filter(e => e.id !== id));
            }
        })
    };

    const AddToCart = (id) => {
        fetch(`/product-detail/${id}/addtocart`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: JSON.parse(localStorage.getItem("auth")).id, 
                quantity: 1
            }),
        })
        .then(res => res.json())
        .then(data=> {

            if(data.status === "accepted") {
                SetWishList(WishList.filter(e => e.id !== id));
                removeProductWishList(id);
            }

        })
        
    };

    useEffect(() => {
        fetchWishList();
    }, [])

    return (
        <WishListWrapper>

            <WishListPane>

                <WishListHeader>
                    <h1>Wishlist</h1>

                    <button onClick={handleCloseBtn}><FontAwesomeIcon icon={fa.faClose}/></button>
                </WishListHeader>

                <WishListContent>

                    <div>

                        {
                            WishList.length !==0
                            ? WishList.map(e => (
                                <EachItemInWishList key={e.id}>

                                    <div>
                                        <img src={ConvertToIamge(e.image)} alt="item wishlist"/>
                                    </div>

                                    <div>
                                        <p>{e.PdName}</p>
                                        <p>{e.price} <FontAwesomeIcon icon={fa.faDollar}/>/{e.unit}</p>
                                    </div>

                                    <div>
                                        <button onClick={ev => AddToCart(e.id)}>Add to my Cart</button>
                                        <button onClick={ev => removeProductWishList(e.id)}>Remove</button>
                                    </div>
                                </EachItemInWishList>
                            ))
                            : <p>Nothing in wishlist</p>
                        }



                    </div>

                    <div>

                        <a href="/shop-cart">View Cart</a>

                    </div>

                </WishListContent>  

            </WishListPane>

        </WishListWrapper>
    )
}