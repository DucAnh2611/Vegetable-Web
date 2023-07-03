
import styled from "styled-components";

export const ReviewPartWrapper = styled.section`
    width: 100%;
    height: 600px;
    display: inline-block;
    background-color: var(--Secondary_Green);   

`;

export const ReviewHeader = styled.div`
    height: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    &>p{
        font-size: 1.2vh;
        color: var(--Primary_Gray);
    }

`;

export const ReviewContent = styled.div`
    height: 80%;
    width: 70%;
    box-sizing: border-box;
    padding: 50px 0;
    margin: 0 auto;
    position: relative; 

`;

export const ReviewSlider = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: auto hidden;
    gap: 2%;
`;

export const EachReview = styled.div`
    min-width: 49%;
    height: 100%;
    width: 49%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 0;

    &>div{
        :first-child{
            height: 200px;
            width: 150px;
            left: 0;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 20px;
            box-sizing: border-box;
            border: 5px solid var(--Primary_Green);
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        :last-child {
            height: 90%;
            width: 85%;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: var(--Primary_White);
            &>div{
                :first-child {
                    height:100%;
                    width: 35%;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img{
                        height: 100%;
                        width: 100%;
                        object-fit: cover;
                    }
                }
                &:last-child{
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                    width: 65%;
                    box-sizing: border-box;
                    padding: 30px; 
                    &>div{
                        width: 100%;
                        height: fit-content;
                        &>p{
                            text-align: left;
                        }
                        &:first-child{
                            border-bottom: 1px solid var(--Primary_Green);
                        }
                        &:nth-child(3) {
                            display: flex;
                            justify-content: flex-start;
                            align-items: center;
                            color: var(--Primary_Green);
                        }
                        &:last-child{
                            box-sizing: border-box;
                            padding: 10px;
                            border-radius: 10px;
                            border: 1px solid var(--Primary_Green);
                            &>p{
                                text-overflow: word-break;
                                word-break: break-all;
                                width: 100%;
                                :first-child{
                                    height: 20%;
                                    font-size: 1.5vh;
                                }
                                :last-child{
                                    height: 80%;
                                    font-size: 1.3vh;
                                }
                            }
                        }
                    }
                }
            }
            z-index: -1;
        }
    }
`;