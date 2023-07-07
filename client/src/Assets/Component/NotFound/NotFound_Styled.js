
import styled, { keyframes } from "styled-components";

const upAndDown = keyframes`
    0% { 
        transform: translate(0, 0); 
    }
    50%{
        transform: translate(0, -50px); 
    }
    100% {
        transform: translate(0, 0); 
    }
`;

export const NotFoundWrap= styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    background-color: var(--Secondary_White);
    display: grid;;
    place-items: center;
    z-index: 3;

    &>div{
        height: fit-content;
        width: fit-content;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;  
        &>svg {
            height: 200px;
        }
        &>p{
            font-size: 150px;
            font-weight: 900;
            text-transform: uppercase;
            color: var(--Primary_Green);

            
        }
    }
`;


 
