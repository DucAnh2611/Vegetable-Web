
import React from "react"; 
import {SliderWrapper,
        SlideTitle,
        SlideSubTitle,
        ShopNowButton,
        SliderChoosing } from "./HomeEachSlide_Styled"; 

const Home_Slider = () =>{
    return(
        <SliderWrapper>

            <SlideTitle>Organic butter</SlideTitle>
            <SlideSubTitle>Thin shell, golden rice, high flexibility</SlideSubTitle>
            <ShopNowButton>Shop now</ShopNowButton>
            <SliderChoosing>1 2 3</SliderChoosing>

        </SliderWrapper>
    )
}

export default Home_Slider;