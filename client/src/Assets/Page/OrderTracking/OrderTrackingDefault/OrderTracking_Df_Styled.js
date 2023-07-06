
import styled from "styled-components";

export const OrderTrackingDefaultWrap = styled.section`
    height: fit-content;
    width: 500px;
    margin: 0 auto;
    display: block;
    border-radius: 20px;
    border: 1px solid var(--Primary_Green);
    box-sizing: border-box;
    padding: 20px 50px;
`;

export const OrderTrackingHeader = styled.div`
    height: 100px;
    width: 100%;
    display: grid;
    place-items: center;
    &>h1{
        font-size: 30px;
        font-weight: 900;
        color: var(--Primary_Green);
    }
`;

export const OrderTrackingContent = styled.div`
    height: fit-content;
    display: block;
    width: 100%;
    &>div{
        width: 100%;
        height: fit-content;
        :nth-child(1), :nth-child(2) {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 10px 0;
            &>label{
                order: 1;
                width: 100%;
                height: 30px;
                text-align: left;
                font-weight: bold;
                font-size: 20px;
                color: var(--Primary_Green);
            }
            &>input {
                order: 3;
                width: 100%;
                height: 60px;
                background-color: rgb(0,0,0, 0,05);
                border: 1px solid var(--Primary_Green);
                border-radius: 20px;
                box-sizing: border-box;
                padding: 0 20px;
                :focus{
                    outline: none;
                }
            }
            &>p{
                order: 2;
                width: 100%;
                padding: 5px 0;
                text-align: left;
                color: var(--Primary_Gray);
                font-size: 15px;
            }
        }

        :nth-child(3) {
            padding: 10px 0 0;
            &>button {
                height: 60px;
                width: 100%;
                border-radius: 15px;
                background-color: var(--Primary_Green);
                color: var(--Secondary_White);
                font-size: 25px;
                font-weight: 900;
                text-transform: uppercase;
                letter-spacing: 10px;
                cursor: pointer;
                :hover{
                    background-color: var(--Fifth_Green);
                    letter-spacing: 15px;
                }
            }
        }
        :nth-child(4){
            padding: 20px 0 10px;
            color: var(--Primary_Red);
            font-size: 15px;
        }
    }

`;