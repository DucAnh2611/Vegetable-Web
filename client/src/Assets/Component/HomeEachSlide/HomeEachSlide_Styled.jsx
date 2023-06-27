
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

export const SlideTitle=styled.div`
    align-items: center;
    display: flex;
    font-size: 40px;
    font-weight: 600;
    font-family: cursive;
    margin: 5% 0 0 16%;
`;

export const SlideSubTitle=styled.div`
    align-items: center;
    display: flex;
    font-size:14px;
    font-weight: 500;
    margin: 10px 0px 10px 16%;
    color:var(--Primary_Gray)
`;

export const ShopNowButton=styled.button`
    height:50px;
    width: 130px;
    border-radius: 20px;
    border: none;
    background: var(--Fourth_Green);
    color: var(--Secondary_White);
    font-size: 16px;
    font-weight: 500;
    font-family: sans-serif;
    margin: 10px 0 0 16%;
`;

export const SliderChoosing=styled.div`
    margin-top: 20%;
`;