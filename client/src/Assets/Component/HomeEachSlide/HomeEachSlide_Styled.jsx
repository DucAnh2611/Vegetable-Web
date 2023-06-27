
import styled from "styled-components"

let AvocadoSlideUrl = "https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/12/slider-1-1.jpg"

export const SliderWrapper=styled.div`
    background-image: url(${AvocadoSlideUrl});
    height: 1200px;
    width: 100%;
    min-width: 1000px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-top: -180px;
    display: flex;
    flex-direction: column;
`;

export const SlideTitle=styled.div`
    align-items: center;
    display: flex;
    font-size: 40px;
    font-weight: 600;
    font-family: cursive;
    margin: 400px 0 0 200px;
`;

export const SlideSubTitle=styled.div`
    align-items: center;
    display: flex;
    font-size:14px;
    font-weight: 500;
    margin: 10px 0px 10px 200px;
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
    margin: 10px 0 0 200px;
`;