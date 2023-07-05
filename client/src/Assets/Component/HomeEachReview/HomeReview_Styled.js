
import styled from "styled-components";

export const ReviewPartWrapper = styled.section`
    width: 100%;
    height: 550px;
    display: block;
    background: url(https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/11/background-2.jpg) center repeat-x;
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
        font-size: 16px;
        color: var(--Primary_Gray);
    }

`;

export const ReviewContent = styled.div`
    height: 80%;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15% 30px;
    position: relative; 
`;

export const ReviewSlider = styled.div`
    height: 100%;
    width: 100%;
    padding: 0 0 15px;
    display: flex;
    align-items: center;
    overflow: auto hidden;
    gap: 2%;
        
    &::-webkit-scrollbar {
        height: 10px;
    }
    
    &::-webkit-scrollbar-track {
        background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: var(--Primary_Green);
        border-radius: 50px;
    }
`;

export const EachReview = styled.div`
    min-width: 49%;
    width: 49%;
    height: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 0;

    &>div{
        :first-child{
            height: 200px;
            width: 150px;
            left: 5%;
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 20px;
            box-sizing: border-box;
            border: 2.5px solid rgba(126, 158, 44, 0.8);

            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
            }
        }
        :last-child {
            height: auto;
            width: 85%;
            border-radius: 20px;
            overflow: hidden;
            display: flex;
            flex-direction: row;
            align-items: center;
            background-color: var(--Primary_White);
            border: 2.5px solid rgba(126, 158, 44, 0.8);

            &>div{
                :first-child {
                    height: 220px;
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
                    padding: 36px 20px 36px 15px;
                    &>div{
                        width: 100%;
                        height: fit-content;
                        &>p{
                            text-align: left;
                            padding: 5px 0;
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
                            padding: 15px;
                            border-radius: 10px;
                            border: 1px solid var(--Primary_Green);
                            &>p{
                                text-overflow: word-break;
                                word-break: break-all;
                                width: 100%;
                                :first-child{
                                    font-size: 13px;
                                }
                                :last-child{
                                    font-size: 13px;
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