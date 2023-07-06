
import styled from "styled-components";

export const OrderTrackingWrap = styled.div`
    height: fit-content;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15%;
    display: block;
`;

export const CurrentState = styled.div`
    height: 200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    place-items: center;
    width: 50%;
    position: relative;

    &>span{
        &.base {
            width: 100%;
            background-color: var(--Secondary_Green);
            height: 10px;
        }
        &.real{
            background-color: var(--Fifth_Green);
            height: 10px;
        }
        border: 1px solid var(--Primary_Green);
        z-index: 0;
        position: absolute;
        left: 0;
        border-radius: 10px;
        content: '';
    }
`;

export const EachState = styled.div`
    height: 40%;
    width: 100%;
    position: relative;
    display: grid;
    place-items: center;
    z-index: 1;
    &> p{
        :first-child{
            display: grid;
            place-items: center;
            --size: 30px;
            height: var(--size);
            width: var(--size);
            border-radius: 100%;
            color: var(--Primary_Green);
            background-color: var(--Secondary_Green);
            font-size: 13px;
            font-weight: bold;
            border: 3px solid var(--Secondary_White);
            :hover{
                & ~ p:last-child {
                    display: block;
                }
            }
        }
        :last-child{
            position: absolute;
            width: 300px;
            top: 0;
            left: 50%;
            transform: translate(-50%, -50%);
            text-transform: capitalize;
        }
    }
    &:not(:nth-child(odd)) > p{
        :last-child {
            bottom: 0;
            transform: translate(-50%, 100%);
        }
    }
    &.ok > p{
        :first-child {
            transform: scale(1.3);
            color: var(--Secondary_White);
            background-color: var(--Primary_Green);
        }
    }
`;

export const OrderTrackingMain = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2%;
`;

export const ProductListWrap = styled.div`
    height: fit-content;
    max-height: 900px;
    width: 34%;
    border-radius: 20px;
    border: 2px solid var(--Primary_Green);
    box-sizing: border-box;
    padding: 20px;
    overflow: hidden;
`;

export const ProductListHeader = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    &>h1{
        display: flex;
        align-items: center;
        text-align: left;
        color: var(--Primary_Green);
        font-size: 30px;
        font-weight: bold;
        :nth-child(2){
            color: var(--Primary_Black);
            font-size: 20px;
        }
    }
    border-bottom: 1px solid var(--Primary_Green);
`;

export const ProductListContent = styled.div`
    height: fit-content;
    max-height: 800px;
    width: 100%;
    padding: 10px 0;
    overflow: hidden auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const EachProduct = styled.div`
    height: 150px;
    min-height: 150px;
    width: 100%;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-sizing: border-box;
    padding: 20px;
    border-bottom: 1px solid var(--Primary_Green);

    &>div{
        height: 100%;
        :first-child{
            width: 35%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid var(--Primary_Green);
            &>img {
                height: 100%;
                width: 100%;
                object-fit: contain;
            }
        }
        :last-child {
            padding: 0 10px;
            box-sizing: border-box;
            display: flex;
            position: relative;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
            width: 65%;
            gap: 10px;
            &>div{
                :first-child{
                    width: 60%;
                    font-size: 15px;
                    &>p{
                        :first-child{
                            font-size: 20px;
                            word-wrap: break-word;
                        }
                        text-align: left;
                        text-transform: capitalize;
                    }
                }
                :nth-child(2){
                    width: 60%;
                    font-size: 18px;
                    font-weight: 900;
                    text-align: left;
                    text-transform: uppercase;
                }
                :nth-child(3) {
                    width: 40%;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translate(0, -50%);
                    height: fit-content;
                    &>button{
                        padding: 15px 0;
                        width: 100%;
                        border-radius: 20px;
                        font-size: 15px;
                        color: var(--Secondary_White);
                        background-color: var(--Primary_Green);
                        cursor: pointer;
                        :hover{
                            background-color: var(--Fifth_Green);
                        }
                    }
                }
            }
        }
    }
`;

export const BillingDetailsWrap = styled.div`
    height: fit-content;
    width: 64%;
    box-sizing: border-box;
    padding: 20px;
`;

export const BillingContent = styled.div`
    height: fit-content;
    width: 100%;
    display: block;
    box-sizing: border-box;
    padding: 20px;
    &>div{
        padding: 10px 0%;
        height: fit-content;
        display: block;
        border-bottom: 1px solid var(--Primary_Green);
        &>p{
            height: fit-content;
            width: 100%;
            font-size: 15px;
            text-align: left;
            box-sizing: border-box;
            :first-child{
                height: 30px;
                font-size: 18px;
            }
            :nth-child(2){
                min-height: 40px;
                display: flex;
                align-items: center;
                background-color: rgb(0,0,0,0.05);
                font-size: 18px;
                font-weight: bold;
                padding: 10px 20px;
                color: var(--Primary_Green);
                &>svg{
                    height: 25px;
                    margin-right: 5px;
                }
            }
            :nth-child(3){
                background-color: rgb(0,0,0,0.05);
                font-size: 13px;
                padding: 0 20px 5px;
            }
        }
        :hover{
            transform: translateX(10px);
        }
    }
`;

export const AddReviewWrap = styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0,0,0,0.3);
    backdrop-filter: blur(5px);
    top:0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 2;
`;

export const AddReviewMain = styled.div`
    height: fit-content;
    width: 500px;
    background-color:var(--Secondary_White);
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    display: flex;
    flex-direction: column;

`;

export const AddReviewHeader = styled.div`
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    &>p{
        font-size: 30px;
        font-weight: 900;
        color: var(--Fifth_Green);
    }
`;

export const AddReViewContent = styled.div`
    height: fit-content;
    width: 100%;
    display: block;
`;

export const InputStar = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &>button {
        height: 10px;
        background-color: transparent;
        color: var(--Primary_Green);
        cursor: pointer;
        svg{
            height: 17px;
        }
    }
`;

export const InputBtn = styled.div`
    height: fit-content;
    width: 100%;
    &>button {
        height: 50px;
        width: 100%;
        background-color: var(--Primary_Green);
        color: var(--Secondary_White);
        border-radius: 20px;
        
        &:not(:disabled) {
            cursor: pointer;
            :hover{
                background-color: var(--Fifth_Green);
            }
        }
        &:disabled {
            opacity: .5;
        }

    }
`;
