
import styled from "styled-components";

export const ProductDetailWrapper=styled.div`
    padding: 5% 10% 0;
`;

export const PDProductWrapper=styled.div`
    display: flex;
    margin: 0% auto 5%;
    max-width: 1000px;
`;

export const PDImgWrapper=styled.div`
    width: 55%;
    height: 550px;
    border: 1px solid var(--Primary_Gray);
    display: flex;
    margin-right: 5%;
    border-radius: 20px;
`;

export const PDImg=styled.img`
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
    border-radius: 20px;
    margin: auto;
`;

export const PDProductDescriptionAndBuyWrapper=styled.div`
    width: 40%;
`;

export const PDProductDescriptionWrapper=styled.div`
    display: flex;
    flex-direction: column;
`;

export const PDProductDescriptionNameAndPriceWrapper=styled.div`
    text-align: left;
`;

export const PDProductDescriptionPrice=styled.p`
    font-size: 23px;
    color: var(--Fourth_Green);
    font-weight: 600;
    margin: 5px 0;
`;

export const PDProductDescriptionDAndQuantityWrapper=styled.div`
    text-align: left;
`;

export const PDProductDescription=styled.p`
    font-size: 15px;
    padding: 5px 0 10px;
    text-align: justify;
`;

export const PDProductQuantity=styled.p`
    margin: 10px 0;
`;

export const PDProductBuyWrapper=styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const PDProductSetQuantityAndAdd2CartButtonWrapper=styled.div`
    display: flex;
    flex-direction: row;
`;

export const PDProductSetQuantityWrapper=styled.div`
    width: 30%;
    border: 1px solid var(--Primary_Gray);
    border-radius: 20px;
`;

export const PDProductSetQuantityButt=styled.button`
    width: 30%;
    height: 40px;
    background: none;
    cursor: pointer;
`;

export const PDProductSetQuantityInput=styled.input`
    width: 40%;
    height: 40px;
    border: none;
    outline: none;
    text-align: center;
    cursor: default;
`;

export const PDProductAdd2CartButtonWrapper=styled.div`
    width: 68%;
    border-radius: 20px;
    background-color: var(--Fourth_Green);
    margin-left: 2%;
    cursor: pointer;
    &:hover{
        background: var(--Hover_Color_Btn);
    }
`;

export const PDProductAdd2CartButton=styled.button`
    height: 40px;
    color: var(--Secondary_White);
    background: none;
    font-size: 14px;
    cursor: pointer;
`;

export const PDProductAdd2WishlistButtonWrapper=styled.div`
    margin: 20px 0 10px;
`;

export const PDProductAdd2WishlistButton=styled.button`
    background: none;
    font-size: 14px;
    line-height: 40px;
    padding: 0;
    display: flex;
    cursor: pointer;
    &>span{
        height:40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
        border: .5px solid var(--Primary_Black);
        &>svg{
            height: 20px;
            align-items: center;
        }
    }
    &:hover>span{
        background-color: var(--Fourth_Green);
        border: .5px solid var(--Secondary_White);
        >svg{
            color: var(--Secondary_White);
        }
    }
`;

export const PDDeliveryDetailWrapper=styled.div`
    display: flex; 
    text-align: left;
    padding-top: 10px;
`;
export const PDDeliveryDetailDescription=styled.div`
    font-size: 14px;
    line-height: 40px;
`;

export const PDDeliveryDetailIcon=styled.div`
    margin-right: 10px;
    &>span>svg{
        height: 40px;
        width: 40px;
    }
`;

export const PDHr =styled.hr`
    color: var(--Primary_Gray);
    margin: 10px 0;
    opacity: .6;
`;