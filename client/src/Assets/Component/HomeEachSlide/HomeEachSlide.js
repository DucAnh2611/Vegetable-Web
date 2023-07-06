
import React from "react"; 
import {SliderWrapper,
        SliderContent,
        SlideTitle,
        SlideSubTitle,
        ShopNowButton,
        SliderChoosingWrapper,
        SliderChoosing,
        SliderNotChoose } from "./HomeEachSlide_Styled"; 
import { useNavigate } from "react-router-dom";

const Home_Slider = () =>{
    const navigate = useNavigate();
    return(
        <SliderWrapper>

            <SliderContent>

                <SlideTitle>Organic butter</SlideTitle>
                <SlideSubTitle>Thin shell, golden rice, high flexibility</SlideSubTitle>
                <ShopNowButton onClick={e => navigate("/shop")}>Shop now</ShopNowButton>

            </SliderContent>
            
            <SliderChoosingWrapper>
                
                <SliderChoosing >
                    <SliderNotChoose></SliderNotChoose>
                </SliderChoosing>
                
                <SliderChoosing style={{border: "none"}}>
                    <SliderNotChoose></SliderNotChoose>
                </SliderChoosing>
                    
                <SliderChoosing style={{border: "none"}}>
                    <SliderNotChoose></SliderNotChoose>
                </SliderChoosing>
            
            </SliderChoosingWrapper>

        </SliderWrapper>
    )
}

export default Home_Slider;