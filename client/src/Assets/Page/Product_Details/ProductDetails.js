
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import Product_Item from "../../Component/Home-Item-Bestseller/ProductItem/Product_Item";

export default function ProductDetail() {

    const { productid } = useParams();
    const [listRelated, SetListRelated] = useState([]);
    const [productInfo, SetproductInfo] = useState({});
    const [listReview, SetListReview] = useState([]);
    const [maxRelated, SetMaxRelated] = useState(4);
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
    }
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
                                add funcs
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