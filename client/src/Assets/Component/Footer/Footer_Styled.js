
import styled from "styled-components";

export const FooterWrap = styled.section`
    margin-top: 200px;
    display: inline-block;
    height: 500px; 
    width: 100%;
    background-color: var(--Primary_Green);
    overflow: hidden;
    &>div{
        width: 100%;
    }
`;

export const FooterDetailWrap = styled.div`
    height: 450px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 100px 15% 50px 15%;
    &>div{
        height: 100%;
    }
`;

export const FooterEndWrap = styled.div`
    height: 50px;
    display: grid;
    place-items: center;
    &>p{
        text-align: center;
        font-size: 1.6vh;
        color: var(--Primary_Black);
    }
`;

export const DetailHeader = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    border-right: 1px solid var(--Fifth_Green);
    box-sizing: border-box;
    padding: 0 50px;
    &>div{
        width: 100%;
        height: 100%;
        display: grid;
        place-items: center;
        background: var(--Primary_White);
        border-radius: 20px;
        &>span{
            svg{
                height: 100px;
            }
        }
    }
`;
export const DetailContent = styled.div`
    width: 60%;
    display: flex;
    flex-direction: row;
`;
export const DetailContentColumn = styled.div`
    height: 100%;
    width: 250px;
    display: inline-block;
    box-sizing: border-box;
    padding: 0 20px;
    &>div{
        width: 100%;
        &:first-child {
            height: 50px;
            border-bottom: 1px solid var(--Fifth_Green);
            & > h1{
                text-align: right;
                font-size: 3vh;
                color: var(--Primary_White);
            }
        }
        &:last-child {
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            &>a{
                height: 40px;
                display: flex;
                justify-content: flex-end;
                align-items: center;
                color: var(--Primary_White);
                &:hover{
                    transform: translateX(-10px);
                    color: var(--Fifth_Green);
                }
            }
        }
    }
`;