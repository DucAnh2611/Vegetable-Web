
import React, { useEffect, useState } from "react"; 
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

    const [currentIndex, setCurrentIndex] = useState(0);    

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    const choosingSlide = (slideNum) =>{

        if (slideNum === currentIndex){
            return "solid 1px"
        }
        else return "none"

    };

    const slides = [

        {url: 'https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/12/slider-1-1.jpg', 
        title: 'Organic butter', 
        subtitle: 'Thin shell, golden rice, high flexibility'},
        {url: 'https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/12/slider-1-2.jpg', 
        title: 'Gold Kiwi', 
        subtitle: 'New Zealand golden kiwi is a delecious fruit'},
        {url: 'https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/12/slider-1-3.jpg', 
        title: 'Dragon fruit', 
        subtitle: 'Yellow dragon fruit is an oval-shaped fruit'}

    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(idx => idx+1 >= slides.length ? 0 : idx +1)
          }, 2500);
      
          return () => {
            clearInterval(intervalId);
          };
    }, [])

    return(
        <SliderWrapper style={{backgroundImage: `url(${slides[currentIndex].url})`}}>

            <SliderContent>

                <SlideTitle>{slides[currentIndex].title}</SlideTitle>
                <SlideSubTitle>{slides[currentIndex].subtitle}</SlideSubTitle>
                <ShopNowButton onClick={e => navigate("/shop")}>Shop now</ShopNowButton>

            </SliderContent>
            
            <SliderChoosingWrapper>

                {slides.map((slide, slideIndex) => (

                    <SliderChoosing key={slideIndex} onClick={() => goToSlide(slideIndex)}  style={{border:`${choosingSlide(slideIndex)}` }}>
                        <SliderNotChoose ></SliderNotChoose>
                    </SliderChoosing>

                ))}
            
            </SliderChoosingWrapper>

        </SliderWrapper>
    )
}

export default Home_Slider;