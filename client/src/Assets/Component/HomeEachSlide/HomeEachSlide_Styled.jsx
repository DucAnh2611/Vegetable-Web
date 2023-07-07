
import styled from "styled-components"

let AvocadoSlideUrl = "https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/12/slider-1-1.jpg"

export const SliderWrapper=styled.div`
    background: url(${AvocadoSlideUrl}) top center / cover no-repeat;
    min-width: 1000px;
    margin-top: -180px;
    display: flex;
    flex-direction: column;
    padding-top: 20%;
`;

export const SliderContent=styled.div`
    margin: 5% 0 0 16%;
`;

export const SlideTitle=styled.div`
    align-items: center;
    display: flex;
    font-size: 300%;
    font-weight: 600;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const SlideSubTitle=styled.div`
    align-items: center;
    display: flex;
    font-size:14px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color:var(--Primary_Gray);
    margin: 20px 0 20px 0;
`;

export const ShopNowButton=styled.button`
    height:46px;
    width: 140px;
    border-radius: 20px;
    border: none;
    background: var(--Fourth_Green);
    color: var(--Secondary_White);
    font-size: 16px;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    display: flex;
    justify-content: center;
    line-height: 46px;
    &:hover{
        background: var(--Hover_Color_Btn);
    }
`;

export const SliderChoosingWrapper=styled.div`
    margin-top: 20%;
    display: flex;
    justify-content: center;
`;

export const SliderChoosing =styled.div`
    height: 20px;
    width: 20px;
    border-radius: 50%;
    border-color: var(--Primary_Green);
    box-sizing: content-box;
    margin: 0px 10px 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const SliderNotChoose =styled.div`
    background: var(--Third_Green);
    height: 12px;
    width: 12px;
    border-radius: 50%;
    line-height: 20px;
`;