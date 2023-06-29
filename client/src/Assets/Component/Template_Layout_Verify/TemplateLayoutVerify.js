import styled from "styled-components";

export const VerifyDiv = styled.div`
    position: fixed;    
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden auto;
    background-color: rgb(0, 0, 0, 0.2);

    display: grid;
    place-items: center;
    z-index: 1;
`;

export const VerifySection = styled.section`
    height: fit-content;
    min-height: 10%;

    width: 450px;

    overflow: hidden hidden;
    box-sizing: border-box;
    padding: 30px;

    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    background-color: var(--Primary_White);
    border-radius: 10px;
    box-shadow: 0 0 10px var(--Primary_Black);

    @media (max-width:450px) {
        width: 100%;
        border-radius: 0;
    }
`;

export const VerifyFieldDiv = styled.div`
    height: fit-content;
    width: 100%;

    overflow: hidden;

    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    &>p{
        margin: 30px 0 50px;
        font-size: 2.6vh;
        width: 100%;
        height: fit-content;
        width: fit-content;
        text-align: center;
        font-weight: bold;

    }
    &> button{
       height: 50px;
       width: 49%; 

       box-sizing:border-box;
       padding: 10px;
       border: none;
       border-radius: 10px;
       cursor: pointer;

       font-size: 1.8vh;
       font-weight: bold;

       &:first-child{
        &:disabled{
            background-color: var(--Fifth_Green);
            cursor: default;
            &:active{
                transform: none;
            }
        }
        background-color: var(--Fourth_Green);
        color: var(--Primary_White);
       }
       &:last-child{
        background-color: var(--Primary_White);
        border: 3px solid var(--Fourth_Green);
        color: var(--Primary_Black);
       }
       &:hover {
        background-color: var(--Third_Yellow);
        color: var(--Primary_White);
       }
       &:active{
        transform: scale(0.9);
       }

    }
    @media (max-width:450px) {
        &>p{
            height: fit-content;
        }
    }
`;


export const VerifyInputDiv = styled.div`
    width: 100%;
    height: 80px;
    
    box-sizing: border-box;
    position: relative;

    margin: 10px 0;
    &>p{
        margin:0;
        color: var(--Third_Yellow);
        font-size: 1.2vh;
        text-align: left;
    }
    &>input{
        position: relative;
        height: 75%;
        width: 100%;
        
        box-sizing: border-box;
        padding: 0 10px;

        font-size: 1.6vh;
        font-weight: 400;
        color: var(--Primary_Black);

        border: 3px solid var(--Fifth_Green);
        border-radius: 10px;
        background-color: transparent;
        
        z-index: 1;

        &:focus{
            outline: none;
            border-color: var(--Fourth_Green);
        }
    }
    &>span {
        background-color: var(--Primary_White);
        position: absolute;
        top: 37%;
        left: 10px;

        transform: translateY(-50%);
        padding: 0 5px;
        
        color: var(--Fourth_Green);
        font-size: 1.4vh;
        font-weight: 400;

        z-index: 0;

    }
    & > input:valid ~ span, & > input:focus ~ span{
        z-index:1;
        top:0;
        background-color: var(--Primary_White);
    }
`;
