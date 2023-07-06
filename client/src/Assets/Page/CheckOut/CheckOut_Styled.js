
import styled from "styled-components"

export const CheckoutWrap = styled.section`
    box-sizing: border-box;
    padding: 0 15%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
    gap: 2%;
`;

export const BillingDetailsWrap = styled.div`
    width: 59%;
    height: fit-content;
    display: block;
`;
export const BillHeader = styled.div`
    height: 100px;
    width: 100%;
    &>h1{
        text-align: left;
        font-size: 35px;
        color: var(--Primary_Green);
    }
`;

export const BillContent = styled.div`
    height: fit-content;
    width: 100%;
    &>div> input{
        border: none;
        border-radius: 0;
        background-color: rgb(0,0,0,0.05);
        border-bottom: 1px solid var(--Primary_Green);
    }

`;

export const InputTextArea = styled.div`
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
    &>textarea {
        resize: vertical;
        height: 50px;
        min-height: 50px;
        max-height: 200px;
        width: 100%;
        border: none;
        border-radius: 0;
        background-color: rgb(0,0,0,0.05);
        border-bottom: 1px solid var(--Primary_Green);
        box-sizing: border-box;
        padding: 15px 15px;
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

export const ProductWrap = styled.div`
    width: 39%;
    height: fit-content;
    display: block;
`;

export const ProductContent = styled.div`
    height: fit-content;
    display: block;
    border-radius: 20px;
    box-sizing: border-box;
    padding: 20px;
    border: 3px solid var(--Primary_Black);
`;

export const ListProduct = styled.div`
    height: fit-content;
    max-height: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 10px 0;
    gap: 10px;
    overflow-y: auto;
    border-bottom: 1px solid var(--Primary_Green);
`;

export const EachProduct = styled.div`
    min-height: 150px;
    height: 150px;
    width: 100%;
    background-color: var(--Secondary_White);
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid var(--Primary_Black);
    &>div{
        height: 100%;

        :first-child {
            width: 30%;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            border-right: 1px solid var(--Primary_Black);
            &>img{
                height: 100%;
                width: 100%;
                object-fit: contain;
            }            
        }:last-child{
            width: 70%;
            display: block;
            box-sizing: border-box;
            padding: 0 30px;
            &>div{
                width: 100%;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                :first-child{
                    height: 50%;
                    justify-content: flex-end;
                    &>p{
                        font-size: 20px;
                        :last-child{
                            font-size: 15px;
                            text-transform: capitalize;
                        }
                    }
                }
                :last-child{
                    margin-top: 10px;
                    height: 50%;
                    justify-content: flex-start;
                    &>p{
                        font-size: 20px;
                        font-weight: 900;
                    }
                }

            }
        }

    }
`;

export const TotalCart = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--Primary_Green);
    &>p{
        :first-child {
            font-size: 25px;
            color: var(--Primary_Green);
            font-weight: 900;
        }
        :last-child {
            font-size: 20px;
            color: var(--Primary_Blacks);
            font-weight: bold;
        }
    }
`;

export const SelectMethodWrap = styled.div`
    height: fit-content;
    padding: 20px 0;
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    z-index: 1;
`;

export const SelectMethod = styled.div`
    height: fit-content;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    &>button {
        height: 50px;
        width: 100%;
        cursor: pointer;
        background-color:var(--Secondary_White);
        border-radius:  20px;
        border: 1px solid var(--Primary_Green);
        font-size: 15px;
        font-weight: bold;
        text-transform: uppercase;
        color: var(--Primary_Green); 
        p {
            display: flex;
            align-items: center;
            justify-content: center;
            svg{
                height: 20px;
                margin-right: 10px;
            }
        }
        :hover {
            background-color: rgb(0,0,0, 0.05);
        }

    }

`;

export const ListMethod = styled.div`
    height: fit-content;
    max-height: 300px;
    overflow: hidden auto;
    width: 100%;
    position: absolute;
    display: flex;
    flex-direction: column;
    left: 0;
    bottom: 0;
    transform: translate(0, 100%);
    box-sizing: border-box;
    padding: 10px;
    border-radius: 10px;
    gap: 10px;
    box-shadow: 0 0 30px var(--Fifth_Green);
    background-color: var(--Secondary_White);
    &>button{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content:center;
        gap: 5px;
        width: 100%;
        padding: 15px 0;
        cursor: pointer;
        border-radius: 20px;            
        color: var(--Primary_Green);
        background-color: transparent;
        font-size: 18px;
        &>p{
            :first-child{
                font-weight: bold;
                text-transform: uppercase;
                display: flex;
                align-items: center;
                svg {
                    height: 25px;
                    margin-right: 5px;
                }
                font-size: 20px;
            }
        }
        :hover{
            transform: translateX(5px);
            background-color: var(--Secondary_Green);
        }
    }
`;

export const AddMethod = styled.div`
    height: 100vh;
    width: 100vw;
    position: fixed;
    backdrop-filter: blur(5px);
    background-color: rgb(0,0,0,0.2);
    display: grid;
    place-items: center;
    top: 0;
    left: 0;

`;

export const AddMethodMain = styled.div`
    height: 400px;
    width: 400px;
    position: fixed;
    border-radius: 20px;
    background-color: var(--Secondary_White);
    box-shadow: 0 0 50px var(--Primary_Green);
    display: block;
    box-sizing: border-box;
    padding: 20px;
    &>div{
        width: 100%;
    }
`;

export const AddMethodHeader = styled.div`
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    &>p{
        font-size: 25px;
        color: var(--Primary_Green);
        font-weight: bold;
        text-align: left;
    }
    &>button {
        height: 30px; 
        width: 50px;
        border-radius: 10px;
        background-color: transparent;
        border: 1px solid var(--Primary_Green);
        color: var(--Primary_Green);
        cursor: pointer;
        display: grid;
        place-items: center;
        &>svg{
            height:15px;
        }
        :hover{
            background-color: var(--Primary_Green);
            color: var(--Secondary_White);
        }
    }

`;

export const AddMethodContent = styled.div`
    height: 60%;
    display: block;
    position: relative;
    &>div{
        height: fit-content;
        width: 100%;
        box-sizing: border-box;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        :first-child {
            height: fit-content;
            width: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            column-gap : 10px;
            &>button {
                height: 50px;
                width: 100%;
                font-size: 15px;
                text-transform: capitalize;
                background-color: var(--Secondary_White);
                border-radius: 10px;
                cursor: pointer;
                &>svg{
                    height: 15px;
                }
                &.ok{
                    background-color: var(--Secondary_Green);
                }
                :hover{
                    transform: scale(1.05);
                    background-color: var(--Secondary_Green);
                }
            }
        }
        :last-child {
            height: fit-content;
            width: 100%;
            display: flex;
            flex-direction: column;
            &>label{
                height: 30px;
                font-size: 18px;
                text-align: left;
            }
            &>input{
                height: 50px;
                font-size: 15px;
                box-sizing: border-box;
                padding: 0 10px;
                border-radius: 10px;
                border: 1px solid var(--Primary_Green);
                :focus {
                    outline: none;
                }
            }
            &> p {
                height: fit-content;
                text-align: left;
                font-size: 12px;
                color: var(--Primary_Red);
            }
        }
    }
`;

export const AddMethodBtn = styled.div`
    height: 20%;
    width: 100%;
    &>button {
        height: 50px;
        width: 100%;
        border-radius: 10px;
        background-color: var(--Primary_Green);
        font-size: 15px;
        color: var(--Secondary_White);
        &:not(:disabled){
            cursor: pointer;
            :hover{
                background-color: var(--Fifth_Green);
            }
        }
        &:disabled{
            opacity: .5;
        }
    }
`;

export const CheckOutButton = styled.div`

    height: fit-content;
    width: 100%;
    &>button {
        height: 70px;
        width: 100%;
        border-radius: 10px;
        background-color: var(--Primary_Green);
        font-size: 25px;
        font-weight: 800;
        letter-spacing: 5px;
        text-transform: uppercase;
        color: var(--Secondary_White);
        &:not(:disabled){
            cursor: pointer;
            :hover{
                background-color: var(--Fifth_Green);
                letter-spacing: 15px;
            }
        }
        &:disabled{
            opacity: .5;
        }
    }
`;