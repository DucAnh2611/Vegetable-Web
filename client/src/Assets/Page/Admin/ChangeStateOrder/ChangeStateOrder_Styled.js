
import styled from "styled-components";


export const TableContent = styled.div`
    height: fit-content;
    max-height: 600px;
    width: 100%;
    overflow-y: auto;
`;
export const TableHeader = styled.div`
    height: fit-content;
    min-height: 40px;
    display: grid;
    grid-template-columns: .5fr 1.5fr 1.5fr 0.5fr 1.5fr;
    grid-template-rows: 1;
    background-color: var(--Primary_Green);
    color: var(--Secondary_White);
    border-radius: 10px;
    
    &>div{
        &:not(:last-child) {
            border-right: 1px solid var(--Fifth_Green);
        }
        font-size: 15px;
        width: 100%;
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: grid;
        place-items: center;
    }

`;

export const TableRow = styled.div`
    cursor: pointer;
    margin: 1px 0;
    height: fit-content;
    min-height: 50px;
    display: grid;
    grid-template-columns: .5fr 1.5fr 1.5fr 0.5fr 1.5fr;
    grid-template-rows: 1;
    text-decoration: none;
    color: var(--Primary_Black);
    border-radius: 10px;
    box-sizing: border-box;
    border: 1px solid var(--Fourth_Green);
    overflow: hidden;

    &:nth-child(odd) {
        background-color: var(--Secondary_Green);
    }
    &>div{
        &:not(:last-child) {
            border-right: 1px solid var(--Fifth_Green);
        }
        width: 100%;
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: grid;
        place-items: center;
        box-sizing: border-box;
        padding: 15px 10px;
        &>p{
            font-size: 13px;
            word-wrap: wrap;
            word-break: break-word;
        }
        &>select{
            height: 30px;
            width: 80%;
            border-radius: 20px;
            background-color: var(--Secondary_White);
            box-sizing: border-box;
            padding: 0 10px;
            border: 1px solid var(--Primary_Green);
            :focus {
                outline: none;
            }
        }
    }
    &:hover{
        background-color: var(--Fifth_Green);
    }

`;