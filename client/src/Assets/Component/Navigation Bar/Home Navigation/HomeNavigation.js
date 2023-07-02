
import React from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/horizon_logo.svg";
import {NavigationWrapper,
        NavigationLogo,
        NavigationSubtitleWrapper,
        NavigationSubtitleul,
        NavigationSubtitleli,
        NavigationIconWrapper,
        NavigationIcon,
        ItemNumber} from "./HomeNavigation_Styled";

export default function HomeNavigation() {
    
    return (
        <NavigationWrapper>
        {
            // ham che de StyledComponent kieu ABC nen de la: ABC hoac A-B-C
        }
            <NavigationLogo>
                <Logo></Logo>
            </NavigationLogo>

            <NavigationSubtitleWrapper>
                
                <NavigationSubtitleul>
                    <NavigationSubtitleli href="/">Home</NavigationSubtitleli>
                    <NavigationSubtitleli href="/shop">Shop</NavigationSubtitleli>
                    <NavigationSubtitleli href="/about-us">About us</NavigationSubtitleli>
                </NavigationSubtitleul>

            </NavigationSubtitleWrapper>

            <NavigationIconWrapper>
                    <NavigationIcon><FontAwesomeIcon icon = {faSolid.faMagnifyingGlass}/></NavigationIcon>
                    <NavigationIcon><FontAwesomeIcon icon = {faRegular.faUser}/></NavigationIcon>
                    <NavigationIcon><FontAwesomeIcon icon = {faRegular.faHeart}/></NavigationIcon>
                    <ItemNumber>1</ItemNumber>
                    <NavigationIcon><FontAwesomeIcon icon = {faSolid.faCartShopping}/></NavigationIcon>
                    <ItemNumber>0</ItemNumber>
            </NavigationIconWrapper>

        </NavigationWrapper>
    )
}