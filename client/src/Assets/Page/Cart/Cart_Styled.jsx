
import styled from "styled-components"

// Cart
export const CartWrapper=styled.div`
    padding: 5% 10% 0;
    display: flex;
    flex-direction: row;
    justify-content:center;
`;

export const CartDetailWrapper=styled.div`
    display: flex;
    flex-direction: column;
`;

export const CartTitleWrapper=styled.div`
    display: flex;
    height: 60px;
    padding-left: 10px;
    border-radius:20px 20px 0px 0px ;
    border: 1px solid var(--Secondary_Gray);
    border-bottom: none;
`;

export const ProductThumbnail=styled.p`
    line-height: 60px;
    text-align: left;
`;

export const ProductInCartWrapper=styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid var(--Secondary_Gray);
    border-top: none; 
    border-bottom: none;
`;

export const ProductWrapper=styled.div`
    display: flex;
    align-items: center;
    border-top: 1px solid var(--Secondary_Gray);
`;

export const ProductImgWrapper=styled.div`
    height: 150px;
    width: 150px;
    margin:0 10px;
    font-size: 15px;
`;

export const ProductImg=styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
`;

export const ProductNameWrapper=styled.div`
    width: 180px;
    text-align: left;
`;

export const ProductName=styled.p`

`;

export const ProductPriceWrapper=styled.div`
    width: 120px;
    text-align: left;
`;

export const ProductPrice=styled.p`

`;

export const ProductPlusMinusButtonWrapper=styled.div`
    width: 100px;
    border-radius: 6px;
    margin-right: 50px;
    border: 1px solid var(--Secondary_Gray);
`;

export const ProductPlusMinusButton=styled.button`
    width: 30%;
    height: 40px;
    background: none;
    cursor: pointer;
`;

export const ProductPlusMinusInput=styled.input`
    width: 40%;
    height: 40px;
    border: none;
    outline: none;
    text-align: center;
    cursor: default;
`;

export const ProductCostWrapper=styled.div`
    width: 100px;
    text-align: left;
`;

export const ProductCost=styled.p`

`;

export const ProductRemoveWrapper=styled.div`
    width: 20px;
    height: 20px;
    margin:0 16px;
    border-radius: 50%;
    border: 1px solid var(--Secondary_Gray);
    display: flex;
    justify-content: center;
    &:hover{
        background-color: var(--Fourth_Green);
        border: 1px solid var(--Secondary_White);
    }
`;

export const ProductRemoveButton=styled.button`
    background: none;
    cursor: pointer;
    &>svg{
        width: 16px;
        height: 16px;
    }
    &:hover>svg{
        color: var(--Secondary_White);
    }
`;

// Continue Shopping
export const ContinueShoppingWrapper=styled.div`
    border-radius: 0 0 20px 20px ;
    border-top: none;
    border: 1px solid var(--Secondary_Gray);
    height: 60px;
    display:flex;
    align-items: center;
    justify-content: flex-end;
`;

export const ContinueShoppingDiv=styled.div`
    height: 40px;
    width: 200px;
    border-radius: 20px;
    background-color: var(--Fourth_Green);
    margin-right: 20px;
    cursor: pointer;
    &:hover{
        background: var(--Hover_Color_Btn);
    }
`;

export const ContinueShopping=styled.a`
    line-height: 40px;
    color: var(--Secondary_White);
    font-size: 14px;
`;

// Total
export const TotalWrapper=styled.div`
    width: 100%;
    max-width: 360px;
    height: auto;
    margin-left: 5%;
    display: flex;
    flex-direction: column;
`;

export const TotalTitleWrapper=styled.div`
    padding: 10px;
    text-align: left;
    height: 60px;
    border-bottom: 1px solid var(--Secondary_Gray);
    background-color: var(--Third_Gray);
    border-radius: 20px 20px 0 0;
`;

export const TotalTitle=styled.p`
    line-height: 40px;
`;

export const TotalAndCheckOutWrapper=styled.div`
    padding: 10px;
    background-color: var(--Fourth_Gray);
    border-radius:0 0 20px 20px;
`;

export const TotalDivWrapper=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px 0 20px;
`;

export const Total=styled.p`
    
`;

export const TotalPrice=styled.p`
    font-size: 18px;
    color: var(--Primary_Green);
    font-weight: 600;
`;

export const CheckOutWrapper=styled.div`
    border-radius: 0 0 20px 20px ;
    height: 60px;
    margin-bottom: 10px;
    display:flex;
`;

export const CheckOutDiv=styled.a`
    height: 40px;
    width: 100%;
    border-radius: 20px;
    background-color: var(--Fourth_Green);
    cursor: pointer;
    &:hover{
        background: var(--Hover_Color_Btn);
    }
`;

export const CheckOut=styled.a`
    line-height: 40px;
    color: var(--Secondary_White);
    font-size: 14px;
`;