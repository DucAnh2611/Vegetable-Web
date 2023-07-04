
import styled from "styled-components";

export const FooterWrap = styled.section`
    margin-top: 100px;
    height: auto; 
    width: 100%;
    background-color: var(--Primary_Green);
    overflow: hidden;
    &>div{
        width: 100%;
    }
`;

export const FooterDetailAll = styled.div`
    padding: 0 15px 0 10px;
`;

export const FooterDetailWrap = styled.div`
    height: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 15px;
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
        font-size: 14px;
        color: var(--Primary_White);
    }
`;

export const DetailHeader = styled.div`
    width: 40%;
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    padding:  0px 20px 0 0;

    &>div{
        width: 100%;
        height: 350px;
        margin: 20px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;

        & > div {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
        }
        & > div > h1, p {
            color: var(--Primary_White);
            font-weight: 400;
            font-size: 13px;
            line-height: 18px;
        }
        & > div > h1 {
            font-weight: 500;
            font-size: 15px;
            margin-bottom: 6px;
        }
        & > span{
            background: var(--Primary_White);
            margin-top: 20px;
            border-radius: 20px;
            padding: 20px 15px;
            svg{
                height: 150px;
                width: 100%;
                padding: 10px;
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
    display: block;
    padding: 0 20px;
    border-right: 1px solid var(--Fifth_Green);
    &>div{
        width: 100%;
        &:first-child {
            padding: 10px 10px 5px 10px;
            border-bottom: 1px solid var(--Fifth_Green);
            & > h1{
                text-align: right;
                font-size: 17px;
                color: var(--Primary_White);
            }
        }
        &:last-child {
            margin-top: 15px;
            display: flex;
            flex-direction: column;
            &>a{
                padding: 8px 10px;
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