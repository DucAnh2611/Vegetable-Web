
import styled from "styled-components"

export const ShopNowWrapper=styled.div`
    padding: 0 5% 0px 5%;
    display: flex;
    justify-content: center;
`;

export const ShopNowProductWrapper =styled.div`
    width: 40%;
    height: auto;
    max-width: 640px;
    display: flex;
    justify-content: center;
    margin: 7% 1% 0;
    flex: 1 1;
    text-align: left;
`;

export const Space =styled.div`
    width: 4%;
`;

export const ShopNowProductImg =styled.div`
    background-size: cover;
    background-repeat: no-repeat;
    height: auto;
    width: 100%;
    max-width: 100%;
    border-radius: 16px;
    flex: 1 1;
    transition: 0.2s;
    &:Hover{
        transform: scale(1.2,1.2);
    }
`;

export const ShopNowProductContent =styled.div`
    display: flex;
    flex-direction: column;
    float: left;
    margin: 12% 0px 10% 7%;
`;

export const ShopNowProductSubTitle =styled.div`
    float: left;
    display: flex;
    font-size: 16px;
    margin: 3vh 0px;
`;