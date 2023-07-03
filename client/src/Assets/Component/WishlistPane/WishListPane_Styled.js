
import styled, { keyframes } from "styled-components";

export const WishListWrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    background-color: rgb(0,0,0, 0.2);
    z-index: 1;
`;

const existFromRight = keyframes`

    0%{
        transform: translateX(100%);
    }
    100%{
        transform: translateX(0);
    }

`;

export const WishListPane = styled.div`
    height: 100%;
    width: 500px;
    background: var(--Secondary_White);
    border-radius: 30px 0 0 30px;
    animation: ${existFromRight} 0.3s ease forwards;
    &>div{
        width: 100%;
        box-sizing: border-box;
    }
`;

export const WishListHeader = styled.div`
    height: 10%;
    display: flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--Primary_Green);
    padding: 0 30px;

    &>h1{
        font-size: 3vh;
        width: 70%;
        text-align: left;
        color: var(--Primary_Green);
        box-sizing: border-box;
    }
    &>button{
        height: 35px;
        width: 35px;
        border-radius: 100%;
        background-color: var(Third_Green);
        cursor: pointer;
        color: var(--Primary_Green);
        display: grid;
        place-items: center;

        &>svg{
            height: 20px;
        }

        :hover{
            background-color: var(--Primary_Green);
            color: var(--Primary_White);
        }
    }

`;

export const WishListContent = styled.div`
    height: 90%;
    display: inline-block;
    padding: 30px;
    &>div{
        width: 100%;
        :first-child{
            height: 90%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            overflow: hidden auto;
            gap: 20px;
        }
        :last-child{
            border-top: 1px solid var(--Primary_Green);
            height: 10%;
            display: flex;
            align-items: flex-end;
            justify-content: flex-start;
            &>a{
                text-decoration: none;
                font-size: 1.5vh;
                background-color: var(--Primary_Green);
                color: var(--Secondary_White);
                padding: 20px 50px;
                border-radius: 20px;
                :hover{
                    background-color: var(--Fifth_Green);
                }
            }
        }
    }
`;

export const EachItemInWishList = styled.div`
    display: flex;
    color: var(--Primary_Black);
    box-sizing: border-box;
    padding: 15px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 120px;
    width: 100%;
    border-radius: 20px;
    &>div{
        height: 100%;
        :first-child{
            height: 100%;
            width: 30%;
            overflow: hidden;
            border-radius: 20px;
            position: relative;
            border: 1px solid var(--Primary_Green);
            background-color: var(--Secondary_White);
            &>img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
        :nth-child(2) {
            width: 35%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            box-sizing: border-box;
            padding: 0 10px;
            gap: 10px;
            overflow: hidden;
            &>p{
                font-size: 1.8vh;
                word-wrap: break-word;
                :first-child{
                    font-size: 2vh;
                    font-weight: bold;
                }
            }
        }
        :last-child{
            width: 35%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            &>button{
                height: 45%;
                width: 100%;
                border-radius: 10px;
                text-decoration: none;
                font-size: 1.2vh;
                display: flex;
                align-items: center;
                justify-content: center;
                box-sizing: border-box;
                cursor: pointer;
            }
            &>button{
                :first-child {
                    background-color: var(--Primary_Green);
                    color: var(--Secondary_White);
                    :hover{
                        background-color: var(--Fifth_Green);
                    }
                }
                :nth-child(2) {
                    background-color: var(--Secondary_Green);
                    color: var(--Primary_Green);
                    :hover{
                        background-color: var(--Third_Yellow);
                        color: var(--Secondary_White);
                    }
                }
            }
        }
    }

    :hover{
        background: linear-gradient(270deg, var(--Secondary_White) 30%, var(--Secondary_Green) 100%);
    }

`;