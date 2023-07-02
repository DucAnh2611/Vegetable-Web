
import React, { useState } from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/horizon_logo.svg";
import {Navigation_Wrapper,
        Navigation_Logo,
        Navigation_Subtitle_Wrapper,
        Navigation_Subtitle_ul,
        Navigation_Subtitle_li,
        Navigation_Icon_Wrapper,
        Navigation_Icon,
        Item_Number,
        Navigation_Subtitle_li_Home } from "./HomeNavigation_Styled";
import WishList from "../../WishlistPane/WishlistPane";
import { useNavigate } from "react-router-dom";

export default function HomeNavigation() {

    const navigation = useNavigate();
    const [openWishListPane, SetOpenWishListPane] = useState(false);

    const handleOpenWishListPane = () => {
        SetOpenWishListPane(true);
    }
    
    return (
        <Navigation_Wrapper>
            {
                openWishListPane && <WishList setOpenPane={SetOpenWishListPane}/>
            }
            <Navigation_Logo>
                <Logo style={{cursor:"pointer"}}></Logo>
            </Navigation_Logo>

            <Navigation_Subtitle_Wrapper>
                
                <Navigation_Subtitle_ul>
                    <Navigation_Subtitle_li href="/">Home</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li href="/shop">Shop</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li href="/about-us">About us</Navigation_Subtitle_li>
                </Navigation_Subtitle_ul>

            </Navigation_Subtitle_Wrapper>

            <Navigation_Icon_Wrapper>
                    <Navigation_Icon><FontAwesomeIcon icon = {faSolid.faMagnifyingGlass}/></Navigation_Icon>
                    <Navigation_Icon><FontAwesomeIcon icon = {faRegular.faUser}/></Navigation_Icon>
                    <Navigation_Icon onClick={handleOpenWishListPane}><FontAwesomeIcon icon = {faRegular.faHeart}/></Navigation_Icon>
                    <Item_Number>1</Item_Number>
                    <Navigation_Icon onClick={e => navigation("/shop-cart")}><FontAwesomeIcon icon = {faSolid.faCartShopping}/></Navigation_Icon>
                    <Item_Number>0</Item_Number>
            </Navigation_Icon_Wrapper>

        </Navigation_Wrapper>
    )
}