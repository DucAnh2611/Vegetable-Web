
import styled, { keyframes } from "styled-components";

export const PartWrap = styled.section`
    height: fit-content;
    width: 70%;
    box-sizing: border-box;
    padding: 0 5%;
    display: block;
    &>div{
        width: 100%;
        display: block;
    }
`;

export const SectionPart = styled.div`
    height: fit-content;
    display: block;
`;

export const SectionHeader = styled.div`
    height: 50px;
    width: 100%;
    color: var(--Primary_Green);
    border-bottom: 2px solid var(--Primary_Green);
    &>h1{
        width: 100%;
        text-align: left;
        font-size: 30px;
    }
`;

export const SectionContent = styled.div`
    height: fit-content;
    display: block;
    box-sizing: border-box;
    padding: 50px 0;
`;

export const InputImage = styled.div`
    height: 100px;
    display: flex;
    gap: 30px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    &>div{
        :first-child{
            height: 100px;
            width: 100px;
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
            overflow: hidden;
            border-radius: 100%;
            border: 5px solid var(--Fifth_Green);
            &>img {
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        :last-child{
            height: 100%;
            width: auto;
            display: flex;
            align-items: center;
            &>label {
                padding: 15px 20px;
                border-radius: 20px;
                font-size: 20px;
                font-weight: bold;
                color: var(--Secondary_White);
                background-color: var(--Primary_Green);
                cursor: pointer;
                &:hover{
                    background-color: var(--Fifth_Green);
                }
            }
            &>input{
                display: none;
            }
        }
    }
`;

export const InputText = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    &>label {
        height: 25px;
        letter-spacing: 1px;
        text-align: left;
        font-size: 18px;
        font-style: italic;
        color: var(--Primary_Black);
    }
    &>input {
        height: 50px;
        width: 100%;
        border-radius: 20px;
        border: 1px solid var(--Primary_Green);
        box-sizing: border-box;
        padding: 0 15px;
        color: var(--Primary_Grey);
        font-size: 14px;
        &:focus{
            outline: none;
            background-color: rgb(0,0,0,0.05);
            & ~ ul{
                display: flex;
            }
        }
    }
    &>ul {
        height: fit-content;
        width: 100%;
        display: none;
        gap: 10px;
        flex-direction:column;
        align-items: flex-start;
        justify-content: center;
        padding: 20px 0;
        background-color: rgb(0,0,0,0.05);
        &>li{
            width: 100%;
            text-align: left;
            box-sizing: border-box;
            padding: 0 5%;
            list-style: inside;
            height: 30px;
            font-size: 15px;
            font-weight: 500;
            &.not {
                color: var(--Primary_Gray);
            }
            
            &.ok {
                text-decoration: line-through;
                color: var(--Fifth_Green);
            }
        }
    }
`;

export const InputButton = styled.div`
    height: fit-content;
    display:block;
    width: 100%;
    &>button {
        padding: 15px 20px;
        border-radius: 20px;
        font-size: 15px;
        font-weight: bold;
        color: var(--Secondary_White);
        background-color: var(--Primary_Green);
        :not(:disabled) {
            cursor: pointer;
            :hover{
                background-color: var(--Fifth_Green);
            }
        }
        :disabled{
            opacity: .5;
        }
    }
`;

export const InputPass = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    &>label {
        height: 25px;
        letter-spacing: 1px;
        text-align: left;
        font-size: 18px;
        font-style: italic;
        color: var(--Primary_Black);
    }
    &>div{
        height: fit-content;
        width: 100%;

        display: block;
        position: relative;

        &>input {
            height: 50px;
            width: 100%;
            border-radius: 20px;
            border: 1px solid var(--Primary_Green);
            box-sizing: border-box;
            padding: 0 15px;
            color: var(--Primary_Grey);
            font-size: 14px;
            &:focus{
                outline: none;
                background-color: rgb(0,0,0,0.05);
                &  ~ ul{
                    display: flex;
                }
            }
        }
        &>button {
            --size: 35px;
            position: absolute;
            right: 10px;
            top: 25px;
            transform: translate(0, -50%);
            background-color: transparent;
            height: var(--size);
            width: var(--size);
            cursor: pointer;
            border-radius: 100%;
            color: var(--Primary_Green);
            box-sizing: border-box;
            display: grid;
            place-items: center;
            &>svg {
                height: 10px;
            }
            :hover{
                border: 1px solid var(--Primary_Green);
            }
            &:focus{
                &  ~ ul{
                    display: flex;
                }
            }
        }
        &>ul {
            height: fit-content;
            width: 100%;
            display: none;
            gap: 10px;
            flex-direction:column;
            align-items: flex-start;
            justify-content: center;
            padding: 20px 0;
            background-color: rgb(0,0,0,0.05);
            &>li{
                width: 100%;
                text-align: left;
                box-sizing: border-box;
                padding: 0 5%;
                list-style: inside;
                height: 30px;
                font-size: 15px;
                font-weight: 500;
                &.not {
                    color: var(--Primary_Gray);
                }
                
                &.ok {
                    text-decoration: line-through;
                    color: var(--Fifth_Green);
                }
            }
        }
    }

`;

export const Notification = styled.div`
    height: fit-content;
    width: 100%;
    display: block;
    border-radius: 30px;
    box-sizing: border-box;
    padding: 20px;
    &>p {
        padding: 5px 0;
        text-align: left;
        &:first-child{
            font-size: 20px;
        }
        &:first-child{
            font-size: 15px;
        }
    }
    &.not {
        background-color: var(--Secondary_Pink);
        p{
            color: var(--Primary_Red);
        }
    }
    &.ok {
        background-color: var(--Secondary_Green);
        p{
            color: var(--Primary_Green);
        }
    }
`;
