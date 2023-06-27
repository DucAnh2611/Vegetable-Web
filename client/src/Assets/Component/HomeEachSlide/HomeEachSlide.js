
import React from "react"; 
import {SliderWrapper,
        SlideTitle,
        SlideSubTitle,
        ShopNowButton } from "./HomeEachSlide_Styled"; 

const Home_Slider = () =>{
    return(
        <SliderWrapper>

            <SlideTitle>Organic butter</SlideTitle>

            <SlideSubTitle>Thin shell, golden rice, high flexibility</SlideSubTitle>

            <ShopNowButton>Shop now</ShopNowButton>

        </SliderWrapper>
    )
}

export default Home_Slider;