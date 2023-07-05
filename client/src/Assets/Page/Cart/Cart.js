
import React, { useEffect, useState } from "react";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {debounce} from 'lodash';
import * as fa from "@fortawesome/free-solid-svg-icons";
import {SectionTitle} from "../../Component/HomeEachBenefit/HomeEachBenefit_Styled"
import {CartWrapper,
        CartDetailWrapper,
        CartTitleWrapper,
        ProductThumbnail,
        ProductInCartWrapper,
        ProductWrapper,
        ProductImgWrapper,
        ProductImg,
        ProductNameWrapper,
        ProductName,
        ProductPriceWrapper,
        ProductPrice,
        ProductPlusMinusButtonWrapper,
        ProductPlusMinusButton,
        ProductPlusMinusInput,
        ProductCostWrapper,
        ProductCost,
        ProductRemoveWrapper,
        ProductRemoveButton,
        ContinueShoppingWrapper,
        ContinueShoppingDiv,
        ContinueShopping,
        TotalWrapper, } from "./Cart_Styled";

export default function Cart() {

    const [listItem, SetListitem] = useState([]);

    const fetchCartItems = () => {
        fetch(`/navigation/cart?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListitem(data.field);
            }
            else {
                SetListitem([]);
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

    const addItem = debounce((quantity, id) => {

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
        // .then(res => res.json())
        // .then(data=> {
        // });
        
    }, 1000);

    const changeItemQuantity = (quantitychange, id, quantitydef) => {
        if(quantitydef + quantitychange > 0) {
            SetListitem(listItem.map((e) => {
                if(e.id === id) {
                    return {
                        ...e, 
                        quantity : e.quantity += parseInt(quantitychange)
                    }
                    
                }
                return e;
            }))
            addItem(quantitychange, id);
        }            

    };

    useEffect(() => {
        fetchCartItems();
        document.title = "Vegetable - Cart";
    }, []);

    return (

        <CartWrapper>

            <CartDetailWrapper>

                <CartTitleWrapper>

                    <ProductThumbnail style={{width:"340px"}}>Product</ProductThumbnail>
                    <ProductThumbnail style={{width: "120px"}}>Price</ProductThumbnail>
                    <ProductThumbnail style={{width: "150px"}}>Quantity</ProductThumbnail>
                    <ProductThumbnail style={{width: "100px"}}>Subtotal</ProductThumbnail>

                </CartTitleWrapper>

                <ProductInCartWrapper>

                    {
                        listItem.length !==0 
                        ? listItem.map(e => (
                            <ProductWrapper key={e.id}>

                                <ProductImgWrapper>
                                    <ProductImg src={ConvertToIamge(e.image)} alt="item cart"/>
                                </ProductImgWrapper>

                                <ProductNameWrapper>
                                    <ProductName>{e.PdName}</ProductName>
                                </ProductNameWrapper>

                                <ProductPriceWrapper>
                                    <ProductPrice>${e.price} / {e.unit}</ProductPrice>
                                </ProductPriceWrapper>

                                <ProductPlusMinusButtonWrapper>
                                    <ProductPlusMinusButton onClick={ev => changeItemQuantity(- 1, e.id, e.quantity)}><FontAwesomeIcon icon={fa.faMinus}/></ProductPlusMinusButton>
                                    <ProductPlusMinusInput type="number" onChange={ev => changeItemQuantity(ev.target.value < 0 ? 1 :ev.target.value - e.quantity, e.id, e.quantity)} value={e.quantity}/>
                                    <ProductPlusMinusButton onClick={ev => changeItemQuantity(1, e.id, e.quantity)}><FontAwesomeIcon icon={fa.faPlus}/></ProductPlusMinusButton>
                                </ProductPlusMinusButtonWrapper>

                                <ProductCostWrapper>
                                    <ProductCost>${parseFloat(e.quantity)*parseFloat(e.price)}</ProductCost>
                                </ProductCostWrapper>

                                <ProductRemoveWrapper>
                                    <ProductRemoveButton onClick={ev => removeItem(e.id)}><FontAwesomeIcon icon={fa.faClose}/></ProductRemoveButton>
                                    
                                </ProductRemoveWrapper>

                            </ProductWrapper>

                        ))
                        : <p>Nothing in cart</p>
                    }

                </ProductInCartWrapper>

                <ContinueShoppingWrapper>

                    <ContinueShoppingDiv>
                        <ContinueShopping href="/shop">Continute Shopping</ContinueShopping>
                    </ContinueShoppingDiv>
                    
                </ContinueShoppingWrapper>

            </CartDetailWrapper>

            <div>

                <div>

                    <SectionTitle>Total</SectionTitle>

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

        </CartWrapper>

    )
}