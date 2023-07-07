
import styled from "styled-components"

export const ProductNavigationWrapper=styled.div`
    height: 100px;
    width: 100%;
    background-color: var(--Fifth_Green);
    display:flex;
    padding: 0 15%;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    position: relative;
`;

export const ProductNavigationLogoWrapper=styled.div`
    height: 80px;
    width: 25%;
    &>a>svg{
        height: 80px;
        width: 80px;
        float: left;
        cursor: pointer;
    }
`;

export const ProductNavigationSearchWrapper=styled.div`
    width: 25%;
    height: 50px;
    display: flex;
    justify-content: center;
    position: relative;
    gap: 10px;
    align-items: center;
    background-color: var(--Third_White);
    border-radius: 50px;
    box-sizing: border-box;
    padding: 0 20px;
    z-index: 1;
`;

export const PNSearchButtonWrapper=styled.button`
    background-color: transparent;
    width: 10%;
    height: fit-content;
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
    width: 90%;
    height: 40px;
`;

export const PNSearchInput=styled.input`
    border: none;
    background-color: transparent;
    height: 100%;
    width: 100%;
    outline: none;
`;
export const SearchResPane = styled.div`
    position: absolute;
    bottom: -10px;
    right: 0;
    transform: translateY(100%);
    height: fit-content;
    min-height: 100px;
    max-height: 380px;
    width: 100%;
    overflow: hidden auto;
    box-shadow: 0 10 50px rgb(0,0,0,0.2);
    background-color: var(--Primary_Green);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;

    &>a {
        min-height: 100px;
        height: 100px;
        width: 100%;
        background: radial-gradient(circle, var(--Primary_Green) 0%, var(--Fifth_Green) 100%);
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        overflow: hidden;
        text-decoration: none;
        :hover{
            transform: scale(1.05);
        }
        &>div{
            height: 100%;
            :first-child {
                width: 40%;
                position: relative;
                background-color: var(--Secondary_White);
                &>img{
                    height: 90%;
                    width: 90%;
                    object-fit: contain;
                }
            }
            :last-child{
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                box-sizing: border-box;
                gap: 10px;
                padding: 10px 20px;
                p{
                    color: var(--Primary_White);
                    :first-child{
                        font-size: 1.7vh;
                        font-weight: bold;
                    }
                    :last-child{
                        font-size: 1.5vh;
                        text-transform: capitalize;
                    }
                }
            }
        }
    }

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--Fifth_Green);
        border-radius: 50px;
        border: 5px solid var(--Primary_Green);
    }
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
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: end;
`;

export const PNUserAndCartWrapper=styled.a`
    height: 50px;
    width: auto;
    text-decoration: none;
    color: var(--Primary_Black);
    display: flex;
    padding-right: 10px;
    cursor: pointer;
`;

export const PNUserAndCartLogoWrapper=styled.div`
    height: 50px;
    width: 50px;
    background-color: var(--Secondary_Green);
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    display: flex;
    &>svg{
        height: 20px;
        width: 20px;
    }
`;

export const PNUserAndCartTitle=styled.div`
    font-size: 14px;
    line-height: 50px;
    padding-left: 10px;
    color: var(--Secondary_White);
`;

export const PNCartItemNumber =styled.div`
    background-color: var(--Third_Yellow);
    border-radius: 50%;
    height: 24px;
    width: 24px;
    line-height: 24px;
    font-size: 14px;
    color: var(--Secondary_White);
    margin-left: -16px;
    margin-top: -6px;
`;