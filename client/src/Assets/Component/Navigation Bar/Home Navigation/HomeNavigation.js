
import React from "react";  
import { ReactComponent as Logo } from "../../../Image/Logo.svg"
import {Navigation_Wrapper,
        Navigation_Logo,
        Navigation_Subtitle_Wrapper,
        Navigation_Subtitle_ul,
        Navigation_Subtitle_li,
        Navigation_Icon_Wrapper,
        Navigation_Icon,
        Item_Number } from "./HomeNavigation_Styled";

export default function HomeNavigation() {
    
    return (
        <Navigation_Wrapper>

            <Navigation_Logo>
                <Logo style={{cursor:"pointer"}}></Logo>
            </Navigation_Logo>

            <Navigation_Subtitle_Wrapper>
                
                <Navigation_Subtitle_ul>

                    <Navigation_Subtitle_li style={{color: "#7e9e2c"}}>Home</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Shop</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Products</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Blog</Navigation_Subtitle_li>
                    <Navigation_Subtitle_li>Page</Navigation_Subtitle_li>

                </Navigation_Subtitle_ul>

            </Navigation_Subtitle_Wrapper>

            <Navigation_Icon_Wrapper>

                    <Item_Number>1</Item_Number>
                    <Navigation_Icon></Navigation_Icon>
                    <Item_Number>0</Item_Number>
                    <Navigation_Icon></Navigation_Icon>
                    <Navigation_Icon></Navigation_Icon>
                    <Navigation_Icon></Navigation_Icon>
                    
            </Navigation_Icon_Wrapper>

        </Navigation_Wrapper>
    )
}