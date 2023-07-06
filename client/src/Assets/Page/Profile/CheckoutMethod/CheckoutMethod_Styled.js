
import styled from "styled-components";

export const AddNewMethodWrap = styled.div`
    width: 100%;
    height: fit-content;
    display: flex;
    align-items: center;
    position: relative;
    &>button{
        background-color: var(--Primary_Green);
        border-radius: 20px; 
        color: var(--Secondary_White);
        font-size: 15px;
        padding: 20px 40px;
        cursor: pointer;;
        &>svg{
            height: 20px;
        }
    }
`;

export const ListTypeWarp = styled.div`
    position:absolute;
    bottom: -10px;
    left: 0;
    transform: translate(0, 100%);
    height: fit-content;
    width: 250px;
    border-radius: 20px;
    background-color: var(--Secondary_White);
    box-shadow: 0 0 30px var(--Fifth_Green);
    overflow: hidden;
    box-sizing: border-box;
    padding: 10px;
    &>div{
        height: 60px;
        width: 100%;
        display: flex;
        align-items: center;
        gap: 20px;
        box-sizing: border-box;
        padding: 0 10px;
        border-radius: 10px;
        color: var(--Primary_Green);
        cursor: pointer;
        &>svg{
            width: 10%;
            height: 100%;
        }
        &>p{
            width: 80%;
            text-align: left;
            font-size: 15px;
            text-transform: capitalize;            
        }

        :hover{
            transform: translateX(2px);
            background-color: var(--Secondary_Green);
        }
    }
`;

export const NewMethodWrap = styled.div`
    position: fixed;
    content: '';
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgb(0,0,0,0.3);
    backdrop-filter: blur(5px);
    z-index: 1;
    display: grid;
    place-items:center;

`;

export const MainNewMethod = styled.div`    
    height: 400px;
    width: 400px;
    position: fixed;
    background-color:var(--Secondary_White);
    border-radius: 20px;
    box-shadow: 0 0 30px var(--Primary_Green);
    box-sizing: border-box;
    padding: 20px;
    z-index: 1;
    &>div{
        width: 100%;
        &:first-child{
            display: flex;
            height: 40%;
            display: flex;
            align-items : center;
            justify-content: center;
            gap: 20px;
            color: var(--Primary_Green);
            &>svg{
                height: 50px;
            }
            &>p{
                text-align: left;
                font-size: 40px;
                text-transform: capitalize;
                font-weight: 900;
            }
        }
        &:nth-child(2) {
            height: 40%;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            &>label {
                height: 30%;
                text-align: left;
                font-size: 20px;
            }
            &>input {
                height: 40%;
                border-radius: 20px;
                border: 3px solid var(--Primary_Green);
                box-sizing: border-box;
                padding: 0 20px;
                &:focus{
                    outline: none;
                }
            }
            &>p{
                display: grid;
                place-items: center;
                height: 30%;
                text-align: left;
                color: var(--Primary_Red);
                background-color:var(--Secondary_Pink);
                border-radius: 10px;
            }
        }
        &:last-child{
            height: 20%;
            display: grid;
            place-items: center;
            &>button {
                height: 90%;
                width: 100%;
                border-radius: 20px;
                background-color: var(--Primary_Green);
                color: var(--Secondary_White);
                font-size: 20px;
                font-weight: bold;
                
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
        }
    }
`;

export const ListMethodUserWrap = styled.div`
    box-sizing: border-box;
    padding: 50px 0;
    height: fit-content;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 10px;
    row-gap: 10px;
    &>div{
        height: 90px;
        width: 100%;
        border-radius: 10px;
        background-color: var(--Secondary_Green);
        box-sizing: border-box;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        &>p{
            :first-child{
                font-size: 20px;
                color: var(--Primary_Green);
                font-weight: bold;
                text-transform: capitalize;
                &>svg{
                    height: 20px;
                }
            }
            :last-child{
                font-size: 15px;
            }
        }
        :hover{
            transform: scale(1.05);
        }
    }
`;
