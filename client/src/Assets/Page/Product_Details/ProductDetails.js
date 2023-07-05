
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import Product_Item from "../../Component/Home-Item-Bestseller/ProductItem/Product_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faReg from "@fortawesome/free-regular-svg-icons";
import {ProductDetailWrapper,
        PDProductWrapper,
        PDImgWrapper,
        PDImg,
        PDProductDescriptionAndBuyWrapper,
        PDProductDescriptionWrapper,
        PDProductDescriptionNameAndPriceWrapper,
        PDProductDescriptionPrice,
        PDProductDescriptionDAndQuantityWrapper,
        PDProductDescription,
        PDProductQuantity,
        PDProductBuyWrapper,
        PDProductSetQuantityAndAdd2CartButtonWrapper,
        PDProductSetQuantityWrapper,
        PDProductSetQuantityButt,
        PDProductSetQuantityInput,
        PDProductAdd2CartButtonWrapper,
        PDProductAdd2CartButton,
        PDProductAdd2WishlistButtonWrapper,
        PDProductAdd2WishlistButton,
        PDDeliveryDetailWrapper,
        PDDeliveryDetailDescription,
        PDDeliveryDetailIcon,
        PDHr, } from "./ProductDetails_Styled";
import { SectionTitle } from "../../Component/HomeEachBenefit/HomeEachBenefit_Styled";
import { ReactComponent as DeliveryTruck } from "../../Image/SVG/Product_Detail_SVG/FreeShipTruck.svg";
import { ReactComponent as DeliveryBox } from "../../Image/SVG/Product_Detail_SVG/DeliverBox.svg";
import {PDReviewWrapper,
        PDReviewTitleWrapper,
        PDReviewerWrapper,
        PDReviewerAndReviewWrapper,
        PDReviewerImgWrapper,
        PDReviewerImg,
        ReviewWrapper,
        PDReviewerNameWrapper,
        PDReviewerUserName,
        PDReviewerFullName,
        PDReviewerReviewWrapper,
        PDReviewerTitleAndRatingWrapper,
        PDReviewerTitle,
        PDReviewerRating,
        ReviewDescriptionWrapper,
        ReviewDescription, } from "./PDReview_Styled";
import {PDRelatedWrapper,
        PDRelatedTitleWrapper,
        PDRelatedProductWrapper, } from "./PDRelated_Styled";

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
            ? (<ProductDetailWrapper>

                    <PDProductWrapper>

                        <PDImgWrapper>
                            <PDImg src={ConvertToIamge(productInfo.image)} alt="img proc"/>
                        </PDImgWrapper>

                        <PDProductDescriptionAndBuyWrapper>

                            <PDProductDescriptionWrapper>

                                <PDProductDescriptionNameAndPriceWrapper>

                                    <SectionTitle>{productInfo.PdName}</SectionTitle> 
                                    <PDProductDescriptionPrice>${productInfo.price}</PDProductDescriptionPrice> 

                                </PDProductDescriptionNameAndPriceWrapper>

                                <PDHr></PDHr>

                                <PDProductDescriptionDAndQuantityWrapper>
                                    
                                    <PDProductDescription>{productInfo.description}</PDProductDescription> 
                                    <PDProductQuantity>{productInfo.quantity} on stock</PDProductQuantity> 
        
                                </PDProductDescriptionDAndQuantityWrapper>
                                
                            </PDProductDescriptionWrapper>

                            <PDHr></PDHr>

                            <PDProductBuyWrapper>

                                <PDProductSetQuantityAndAdd2CartButtonWrapper>

                                    <PDProductSetQuantityWrapper>
                                        <PDProductSetQuantityButt onClick={e => SetQuantity(quantity - 1)}><FontAwesomeIcon icon={fa.faMinus}/></PDProductSetQuantityButt>
                                        <PDProductSetQuantityInput type="number" value={quantity}/>
                                        <PDProductSetQuantityButt onClick={e => SetQuantity(quantity + 1)}><FontAwesomeIcon icon={fa.faPlus}/></PDProductSetQuantityButt>
                                    </PDProductSetQuantityWrapper>

                                    <PDProductAdd2CartButtonWrapper>
                                        <PDProductAdd2CartButton onClick={e => AddToCart(productInfo.id)}>Add to card</PDProductAdd2CartButton>
                                    </PDProductAdd2CartButtonWrapper>
                                    
                                </PDProductSetQuantityAndAdd2CartButtonWrapper>

                                <PDProductAdd2WishlistButtonWrapper>

                                    <PDProductAdd2WishlistButton onClick={e => AddToWishList(productInfo.id)}><span><FontAwesomeIcon icon={faReg.faHeart}/></span>Add to Wishlist</PDProductAdd2WishlistButton>

                                </PDProductAdd2WishlistButtonWrapper>
                            </PDProductBuyWrapper>

                            <PDDeliveryDetailWrapper>

                                <PDDeliveryDetailIcon>
                                    <span>
                                        <DeliveryTruck></DeliveryTruck>
                                    </span>
                                </PDDeliveryDetailIcon>

                                <PDDeliveryDetailDescription>
                                    Free worldwide shipping on all orders over $100
                                </PDDeliveryDetailDescription>

                            </PDDeliveryDetailWrapper>

                            <PDDeliveryDetailWrapper>

                                <PDDeliveryDetailIcon>
                                    <span>
                                        <DeliveryBox></DeliveryBox>
                                    </span>
                                </PDDeliveryDetailIcon>

                                <PDDeliveryDetailDescription>
                                    Delivers in: 3-7 Working Days
                                </PDDeliveryDetailDescription>

                            </PDDeliveryDetailWrapper>

                        </PDProductDescriptionAndBuyWrapper>

                    </PDProductWrapper>

                    <PDHr></PDHr>

                    <PDReviewWrapper>

                        <PDReviewTitleWrapper>

                            <SectionTitle>Review</SectionTitle>

                        </PDReviewTitleWrapper>

                        <PDReviewerWrapper>
                            {listReview.map(e => {
                                return (
                                    <PDReviewerAndReviewWrapper key={e.id}>

                                        <PDReviewerImgWrapper>

                                            <PDReviewerImg src={ConvertToIamge(e.avatar)} alt="review user"/>

                                        </PDReviewerImgWrapper>

                                        <ReviewWrapper>

                                            <PDReviewerNameWrapper>
                                                <PDReviewerUserName>{e.username}</PDReviewerUserName>
                                                <PDReviewerFullName>{e.fullname}</PDReviewerFullName>
                                            </PDReviewerNameWrapper>

                                            <PDReviewerReviewWrapper>

                                                <PDReviewerTitleAndRatingWrapper>
                                                
                                                    <PDReviewerRating>
                                                            {
                                                                new Array(5).fill('').map((_, idx) => (
                                                                    idx + 1 <= e.rating
                                                                        ? <FontAwesomeIcon icon={fa.faStar} />
                                                                        : e.rating - idx >= 0.5
                                                                            ? <FontAwesomeIcon icon={faReg.faStarHalfAlt} />
                                                                            : <FontAwesomeIcon icon={faReg.faStar} />
                                                                ))
                                                            }
                                                        </PDReviewerRating>
                                                    <PDReviewerTitle>{e.title}</PDReviewerTitle>
                                                    
                                                </PDReviewerTitleAndRatingWrapper>

                                                <ReviewDescriptionWrapper>
                                                    <ReviewDescription>{e.description}</ReviewDescription>
                                                </ReviewDescriptionWrapper>

                                            </PDReviewerReviewWrapper>

                                        </ReviewWrapper>
                                    </PDReviewerAndReviewWrapper>
                                )
                            })}
                        </PDReviewerWrapper>

                    </PDReviewWrapper>

                    <PDHr></PDHr>

                    <PDRelatedWrapper>

                        <PDRelatedTitleWrapper>
                            <SectionTitle>Related</SectionTitle>
                        </PDRelatedTitleWrapper>

                        <PDRelatedProductWrapper>
                            {listRelated.map(e => <Product_Item item={e}/>)}
                        </PDRelatedProductWrapper>

                    </PDRelatedWrapper>

                </ProductDetailWrapper>)
            : <p>Loading</p>
        }        
        
        </>
    )
}