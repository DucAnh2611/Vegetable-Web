
import styled from "styled-components"

export const Navigation_Wrapper=styled.div`
    width:80%;
    height: 100px;
    margin: 40px auto;
    display: flex;
    min-width: 1000px;
    position: relative;
`;

export const Navigation_Logo=styled.div`
    width:25%;
    align-items: center;
    display: flex;
    &>svg{
        height:80px;
        float: left;
    }
`;

export const Navigation_Subtitle_Wrapper=styled.div`
    width:50%;
`;

export const Navigation_Subtitle_ul=styled.ul`
    padding:0;
    margin: 0;
    line-height:100px;
`;

export const Navigation_Subtitle_li=styled.li`
    list-style: none;
    display: inline-block;
    font-family: cursive;
    font-size: 20px;
    font-weight: 700;
    margin: 0px 20px 0 20px;
    cursor:pointer;
    &:hover{
        color: var(--Fifth_Green);
    }
`;

export const Navigation_Subtitle_li_Home=styled.li`
    list-style: none;
    display: inline-block;
    font-family: cursive;
    color: var(--Fifth_Green);
    font-size: 20px;
    font-weight: 700;
    margin: 0px 20px 0 20px;
    cursor:pointer;
    &:hover{
        color: var(--Fourth_Green);
    }
`;

export const Navigation_Icon_Wrapper=styled.div`
    width:25%;
    line-height:100px;
    display: flex;
    justify-content: flex-end;
`;

export const Navigation_Icon=styled.div`
    width: 22px;
    height: 22px;
    line-height: 22px;
    font-size: 20px;
    margin: 40px 0px 0 20px;
    display: flex;
    float: right;
    cursor:pointer;
`;

export const Item_Number=styled.div`
    background: var(--Primary_Green);
    width: 28px;
    height: 28px;
    margin: 28px 0px 0px;
    border-radius: 50%;
    line-height: 28px;
    color: var(--Secondary_White);
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    float: right;
`;