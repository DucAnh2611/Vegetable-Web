
import React from "react";  
import { ReactComponent as Logo } from "../../../Image/SVG/Logo.svg"
import {Navigation_Wrapper,
        Navigation_Logo,
        Navigation_Subtitle_Wrapper,
        Navigation_Subtitle_ul,
        Navigation_Subtitle_li,
        Navigation_Icon_Wrapper,
        Navigation_Icon,
        Item_Number,
        Navigation_Subtitle_li_Home } from "./HomeNavigation_Styled";

export default function HomeNavigation() {
    
    return (
        <Navigation_Wrapper>

            <Navigation_Logo>
                <Logo style={{cursor:"pointer"}}></Logo>
            </Navigation_Logo>

            <Navigation_Subtitle_Wrapper>
                
                <Navigation_Subtitle_ul>
                    <Navigation_Subtitle_li_Home>Home</Navigation_Subtitle_li_Home>
                    <Navigation_Subtitle_li>Shop</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Products</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Blog</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Page</Navigation_Subtitle_li>
                </Navigation_Subtitle_ul>

            </Navigation_Subtitle_Wrapper>

            <Navigation_Icon_Wrapper>
                    <Item_Number>1</Item_Number>
                    <Navigation_Icon>Cart</Navigation_Icon>
                    <Item_Number>0</Item_Number>
                    <Navigation_Icon>Wishlist</Navigation_Icon>
                    <Navigation_Icon>User</Navigation_Icon>
                    <Navigation_Icon>Search</Navigation_Icon>
            </Navigation_Icon_Wrapper>

        </Navigation_Wrapper>
    )
}