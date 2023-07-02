
import styled from "styled-components"

export const ProductNavigationWrapper=styled.div`
    height: 100px;
    width: 100%;
    background-color: var(--Fifth_Green);
    display:flex;
    padding: 0 5%;
    align-items: center;
`;

export const ProductNavigationLogoWrapper=styled.div`
    height: 80px;
    width: 20%;
    &>span>svg{
        height: 80px;
        width: 80px;
        float: left;
    }
`;

export const ProductNavigationSearchWrapper=styled.div`
    width: 60%;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PNSearchButtonWrapper=styled.button`
    background-color: var(--Third_White);
    height: 40px;
    width: 60px;
    border-radius: 20px 0 0 20px ;
    cursor: pointer;
    &>svg{
        height: 20px;
        width: 20px;
        float: right;
        padding-right: 5px;
    }
`;

export const PNSearchInputWrapper=styled.div`
    display:flex;
`;

export const PNSearchInput=styled.input`
    background-color: var(--Third_White);
    border: none;
    height: 40px;
    width: 350px;
    outline: none;
`;

export const PNSearchByCategoryWrapper=styled.div`
    
`;

export const PNSearchByCategorySelect=styled.select`
    background-color: var(--Third_White);
    border-radius: 0 20px 20px 0 ;
    font-size: 14px;
    height: 40px;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const PNSearchByCategoryOption=styled.option`
    
`;

export const ProductNavigationUserAndCartWrapper=styled.div`
    height: 80px;
    width: 20%;
    background-color: lightpink;
`;