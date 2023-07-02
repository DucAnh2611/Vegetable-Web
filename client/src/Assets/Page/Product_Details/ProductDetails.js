
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import Product_Item from "../../Component/Home-Item-Bestseller/ProductItem/Product_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faReg from "@fortawesome/free-regular-svg-icons";

export default function ProductDetail() {

    const { productid } = useParams();
    const [listRelated, SetListRelated] = useState([]);
    const [productInfo, SetproductInfo] = useState({});
    const [listReview, SetListReview] = useState([]);
    const [maxRelated, SetMaxRelated] = useState(4);
    const [quantity, SetQuantity] = useState(1);
    const [loaded, SetLoaded] = useState(false);

    const fetchListRelated = () => {
        fetch(`/product-detail/${productid}?maxrelated=${maxRelated}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListRelated(data.field.relatedProduct);
                SetListReview(data.field.review);
                SetproductInfo(data.field.productInfo[0]);
                SetLoaded(true);
            }
        })
    };

    const AddToWishList = (id) => {
        fetch(`/product-detail/${id}/addwishlist`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                userid: JSON.parse(localStorage.getItem("auth")).id
            }),
        })
        .then(res => res.json())
        .then(data=> {
            console.log(data);
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
                quantity: quantity
            }),
        })
        .then(res => res.json())
        .then(data=> {
            if(data.status === "accepted") {
                SetQuantity(1);
            }
        })
        
    };

    useEffect(() => {
        fetchListRelated();
        document.title = 'Product Detail';
    }, [] );

    return (
        <>

        {
            loaded
            ? (<div>

                    <div>

                        <div>
                            <img src={ConvertToIamge(productInfo.image)} alt="img proc"/>
                        </div>

                        <div>

                            <div>

                                <div>

                                <h3>{productInfo.PdName}</h3> 
                                <h3>${productInfo.price}</h3> 

                                </div>

                                <div>
                                    
                                    <p>{productInfo.description}</p> 
                                    <p>{productInfo.quantity} on stock</p> 
        
                                </div>
                                
                            </div>

                            <div>

                                <div>

                                    <div>
                                        <button onClick={e => SetQuantity(quantity - 1)}><FontAwesomeIcon icon={fa.faMinus}/></button>
                                        <input type="number" value={quantity}/>
                                        <button onClick={e => SetQuantity(quantity + 1)}><FontAwesomeIcon icon={fa.faPlus}/></button>
                                    </div>

                                    <div>
                                        <button onClick={e => AddToCart(productInfo.id)}>Add to card</button>
                                    </div>
                                    
                                </div>

                                <div>

                                    <button onClick={e => AddToWishList(productInfo.id)}><span><FontAwesomeIcon icon={faReg.faHeart}/></span>Add to Wishlist</button>

                                </div>
                            </div>

                        </div>


                    </div>

                    <div>

                        <div>

                            <h1>Review</h1>

                        </div>

                        <div>
                            {listReview.map(e => {
                                return (
                                    <div key={e.id}>

                                        <div>

                                            <img src={ConvertToIamge(e.avatar)} alt="review user"/>

                                        </div>

                                        <div>

                                            <div>
                                                <p><b>{e.username}</b></p>
                                                <p>{e.fullname}</p>
                                            </div>

                                            <div>

                                                <div>
                                                    <p>{e.title}</p>
                                                    <p>{e.rating}</p>
                                                </div>

                                                <div>
                                                    <p>{e.description}</p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    <div>

                        <div>
                            <h1>Related</h1>
                        </div>

                        <div>
                            {listRelated.map(e => <Product_Item item={e}/>)}
                        </div>


                    </div>


                </div>)
            : <p>Loading</p>
        }        
        
        </>
    )
}