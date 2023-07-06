
import styled from "styled-components";

export const CartGroupWrap = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
    &>a {
        height: fit-content;
        width: fit-content;
        padding: 10px 20px;
        border-radius: 30px;
        font-size: 16px;
        color: var(--Secondary_White);
        background-color: var(--Primary_Green);
        &:hover{
            background-color: var(--Fifth_Green);
        }
    }
`;

export const ProfileGroupWrap = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start ;
    box-sizing: border-box;
    padding: 100px 20% 0;
`;

export const ProfileNav = styled.div`
    height: fit-content;
    width: 30%;
    background-color: transparent;
    display: block;
    &>button {
        height: 50px;
        width: 100%;
        background-color: var(--Primary_Green);
        color: var(--Secondary_White);
        text-align: left;
        box-sizing: border-box;
        padding: 0 20px;
        cursor: pointer;
        &:hover{
            transform: translateX(10px);
            background-color: var(--Fifth_Green);
        }
    }
`;