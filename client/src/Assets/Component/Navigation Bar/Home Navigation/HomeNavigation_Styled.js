
import { findLastKey } from "lodash";
import styled, { keyframes } from "styled-components"

export const NavigationWrapper=styled.div`
    width:80%;
    height: 100px;
    margin: 40px auto;
    display: flex;
    min-width: 1000px;
    position: relative;
`;

export const NavigationLogo=styled.div`
    width:25%;
    align-items: center;
    display: flex;
    &>svg{
        height:80px;
        float: left;
        cursor: default;
    }
`;

export const NavigationSubtitleWrapper=styled.div`
    width:50%;
`;

export const NavigationSubtitleUl=styled.ul`
    padding:0;
    margin: 0;
    line-height:100px;
`;

export const NavigationSubtitleLi=styled.a`
    list-style: none;
    display: inline-block;
    text-decoration: none;
    color: var(--Primary_Black);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0px 20px 0 20px;
    cursor:pointer;
    &:hover{
        color: var(--Fifth_Green);
    }
`;

export const NavigationIconWrapper=styled.div`
    width: 25%;
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
`;

export const EachIconPart = styled.div`
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: relative;
`;

export const NavigationIcon=styled.button`
    background: transparent;
    --size: 40px;
    height: var(--size);
    width: var(--size);
    display: grid;
    place-items: center;
    cursor:pointer;
    border-radius: 100%;
    &>svg{
        height: 20px;
    }
    &:hover{
        transform: scale(1.05);
        border: 1px solid var(--Fifth_Green);
    }
`;

export const ItemNumber=styled.p`
    position: absolute;
    --vspace: 5px;
    top: var(--vspace);
    right: var(--vspace);
    height: 30px;
    width: 30px;
    transform: translate(50%, -50%);
    background: var(--Primary_Green);
    border-radius: 100%;
    color: var(--Secondary_White);
    font-size: 1.3vh;
    font-weight: bold;
    display: grid;
    place-items: center;
`;

const growFromRight = keyframes`
    0%{
        width: 0px;

    }
    100%{
        width: 300px;
    }

`;

const CloseFromLeft = keyframes`
    0%{
        width: 300px

    }
    100%{
        width: 0px;
    }

`;

export const SearchPart = styled.div`
    height: 50px;
    width: fit-content;
    border-radius: 50px;
    border: 1px solid var(--Primary_Gray);
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    box-sizing: border-box;
    padding: 0 10px;

    &>input{
        border: none;
        padding: 0 10px;
        border-right: 1px solid var(--Fifth_Green);
        animation: ${growFromRight} .3s ease-in-out forwards;
        :focus{
            outline: none;
        }
        .closed{
            animation: ${CloseFromLeft} .3s ease-in-out forwards;
        }
    }
    &>button {
        --size: 30px;
        height: var(--size);
        width: var(--size);

        background: transparent;
        border: 1px solid var(--Primary_Gray);
        color: var(--Primary_Black);

        border-radius: 100%;
        background-color: none;
        cursor: pointer;
        :hover{
            background: var(--Primary_Green);
            color: var(--Primary_White);
        }
    }
    
    &>div{
        position: absolute;
        bottom: -10px;
        right: 0;
        transform: translateY(100%);
        height: fit-content;
        min-height: 100px;
        max-height: 380px;
        width: 400px;
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
    }
`;