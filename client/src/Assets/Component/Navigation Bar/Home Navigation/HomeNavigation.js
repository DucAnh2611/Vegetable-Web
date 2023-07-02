
import React, { useState } from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/horizon_logo.svg";
import {NavigationWrapper,
        NavigationLogo,
        NavigationSubtitleWrapper,
        NavigationSubtitleUl,
        NavigationSubtitleLi,
        NavigationIconWrapper,
        NavigationIcon,
        ItemNumber} from "./HomeNavigation_Styled";
import WishList from "../../WishlistPane/WishlistPane";
import { useNavigate } from "react-router-dom";

export default function HomeNavigation() {

    const navigation = useNavigate();
    const [openWishListPane, SetOpenWishListPane] = useState(false);

    const handleOpenWishListPane = () => {
        SetOpenWishListPane(true);
    }
    
    return (
        <NavigationWrapper>
            {
                openWishListPane && <WishList setOpenPane={SetOpenWishListPane}/>
            }
            <NavigationLogo>
                <Logo style={{cursor:"pointer"}}></Logo>
            </NavigationLogo>

            <NavigationSubtitleWrapper>
                
                <NavigationSubtitleUl>
                    <NavigationSubtitleLi href="/">Home</NavigationSubtitleLi>
                    <NavigationSubtitleLi href="/shop">Shop</NavigationSubtitleLi>
                    <NavigationSubtitleLi href="/about-us">About us</NavigationSubtitleLi>
                </NavigationSubtitleUl>

            </NavigationSubtitleWrapper>

            <NavigationIconWrapper>
                    <NavigationIcon><FontAwesomeIcon icon = {faSolid.faMagnifyingGlass}/></NavigationIcon>
                    <NavigationIcon><FontAwesomeIcon icon = {faRegular.faUser}/></NavigationIcon>
                    <NavigationIcon onClick={handleOpenWishListPane}><FontAwesomeIcon icon = {faRegular.faHeart}/></NavigationIcon>
                    <ItemNumber>1</ItemNumber>
                    <NavigationIcon onClick={e => navigation("/shop-cart")}><FontAwesomeIcon icon = {faSolid.faCartShopping}/></NavigationIcon>
                    <ItemNumber>0</ItemNumber>
            </NavigationIconWrapper>

        </NavigationWrapper>
    )
}