
import styled from "styled-components";

export const InputSelect = styled.div`
    height: fit-content;
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 20px 0;
    position: relative;
    &>label {
        height: 25px;
        letter-spacing: 1px;
        text-align: left;
        font-size: 18px;
        font-style: italic;
        color: var(--Primary_Black);
    }
    &>button {
        height: 50px;
        width: 30%;
        border-radius: 20px;
        border: 1px solid var(--Primary_Green);
        box-sizing: border-box;
        padding: 0 15px;
        color: var(--Primary_Grey);
        font-size: 14px;
        text-transform: capitalize;
        cursor: pointer;
        &:hover{
            background-color: rgb(0,0,0,0.05);
        }
    }
`;

export const Notification = styled.div`
    height: 100px;
    width: 100%;
    display: grid;
    place-items: center;
    background-color: var(--Secondary_Pink);
    &>p {
        font-size: 15px;
        color: var(--Primary_Red);
    }
`;