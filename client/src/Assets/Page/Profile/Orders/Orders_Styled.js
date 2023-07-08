
import styled from "styled-components";

export const TableHeader = styled.div`
    height: fit-content;
    min-height: 40px;
    display: grid;
    grid-template-columns: .5fr 1.5fr 2fr 1fr 1.5fr;
    grid-template-rows: 1;
    background-color: var(--Primary_Green);
    color: var(--Secondary_White);
    border-radius: 10px;
    
    &>div{
        width: 100%;
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: grid;
        place-items: center;
    }

`;

export const TableRow = styled.a`
    margin: 2px 0;
    height: fit-content;
    min-height: 50px;
    display: grid;
    grid-template-columns: .5fr 1.5fr 2fr 1fr 1.5fr;
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
        width: 100%;
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        display: grid;
        place-items: center;
        box-sizing: border-box;
        padding:10px 10px;
        &>p{
            font-size: 13px;
            word-wrap: wrap;
            word-break: break-word;
        }
    }
    &:hover{
        background-color: var(--Fifth_Green);
        transform: translateX(3px);
    }

`;