
import styled from "styled-components"

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
        cursor: pointer;
    }
`;

export const NavigationSubtitleWrapper=styled.div`
    width:50%;
`;

export const NavigationSubtitleul=styled.ul`
    padding:0;
    margin: 0;
    line-height:100px;
`;

export const NavigationSubtitleli=styled.a`
    list-style: none;
    display: inline-block;
    text-decoration: none;
    color: var(--PrimaryBlack);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 600;
    margin: 0px 20px 0 20px;
    cursor:pointer;
    &:hover{
        color: var(--FifthGreen);
    }
`;

export const NavigationIconWrapper=styled.div`
    width:25%;
    line-height:100px;
    display: flex;
    justify-content: flex-end;
`;

export const NavigationIcon=styled.div`
    width: 22px;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    margin: 40px 0px 0 20px;
    display: flex;
    float: right;
    cursor:pointer;
`;

export const ItemNumber=styled.div`
    background: var(--PrimaryGreen);
    width: 28px;
    height: 28px;
    margin: 28px 0px 0px;
    border-radius: 50%;
    line-height: 28px;
    color: var(--SecondaryWhite);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    float: right;
`;