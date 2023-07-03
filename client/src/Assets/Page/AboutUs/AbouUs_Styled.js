import styled from "styled-components";

export const AboutUsWrapper = styled.div`

    height: fit-content;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 100px;

    background-color: transparent;
`;

export const AboutUsIntroduce = styled.section`
    height: 600px;
    width: 70%;
    margin: 50px auto;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items:center;

    &>div {
        height: 70%;

        &:first-child {
            width: 45%;
            position: relative;
            &>div{
                position: absolute;
                border-radius: 20px;
                overflow: hidden;
                box-shadow: 0 0 30px var(--Fifth_Green);
                &:first-child{
                    top:0;
                    left: 0;
                    &>img {
                        height: 300px;
                    }
                }
                &:last-child{
                    bottom: 0;
                    right: 0;
                    &>img {
                        height: 200px;
                    }
                }

            }
        }
        &:last-child {
            width: 55%;

            display: flex;
            flex-direction: column;
            justify-content: center;

            box-sizing: border-box;
            padding: 0 50px;

            &> h1, p{
                text-align: left;
                margin: 20px 0;
            }

            &>h1{
                font-size: 4vh;
                color: var(--Primary_Green);
                font-weight: 900;
            }

            &>p{
                font-size: 2vh;
            }

            &>button {
                margin: 20px 0 0 0 ;
                height: 60px;
                width: 200px;

                border-radius: 20px;
                background-color: var(--Fourth_Green);
                color: var(--Primary_White);
                font-size: 1.7vh;
                font-weight: bold;
                letter-spacing: 0.5px;
                cursor: pointer;

                &:hover {
                    background-color: var(--Fifth_Green);
                }
            }
            
        }
    }
`;

export const AboutUsTechnology = styled.section`
    display: inline-block;
    width: 100%;
    height: 600px;
    
    &>div{
        width: 100%;

        &:first-child {
            height: 20%;
            h1 {
                font-size: 4vh;
                color: var(--Primary_Green);
                font-weight: 900;
            }
        }

        &:last-child {
            height: 80%;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 30px;

            padding: 20px 0;
            box-sizing: border-box;
            background-color: var(--Fifth_Green);
        }
    
    }
`;

export const EachTech = styled.div`
    height: 90%;
    width: 280px;

    display: inline-block;
    border-radius: 30px;

    background: radial-gradient(circle, var(--Fifth_Green) 0%, var(--Primary_Green) 100%);
    box-shadow: 0 0 30px var(--Primary_Green);
    overflow: hidden;
    &>div {
        width: 100%;
        &:first-child {
            height: 40%;
            display: grid;
            place-items: center;
            &>svg{
                color: var(--Primary_White);
                height: 50px;
            }
        }
        &:last-child{
            height: 60%;
            background-color: var(--Primary_White);
            display: block;
            box-sizing: border-box;
            padding: 20px;

            &> h3{
                height: 20%;
                width: 100%;
                color: var(--Primary_Green);
                font-size: 2.5vh;
                font-weight: bold;
            }
            &>p{
                height: 55%;
                width: 100%;
                text-align: left;
                text-overflow: ellipsis;
                max-height: 60%;
                box-sizing: border-box;
                padding: 5px 0;
            }
            &>a{
                display: flex;
                text-decoration: none;
                color: var(--Primary_White);
                font-size: 1.5vh;
                font-weight: bold;
                border-radius: 15px;
                height: 25%;
                width: 100%;
                background-color: var(--Primary_Green);

                justify-content: center;
                align-items: center;
                cursor: pointer;
                &:hover{
                    background-color: var(--Fifth_Green);
                }
            }
        }
    }

    &:hover{
        transform: scale(1.05);
    }
`;

export const AboutUsDataBase= styled.section`

    display: inline-block;
    width: 100%;
    height: fit-content;  

    &>div{
        &:first-child {
            height: 100px;
            width: 100%;
            h1 {
                font-size: 4vh;
                color: var(--Primary_Green);
                font-weight: 900;
            }
        }
        &:last-child{
            padding: 30px 0;
            &> img {
                height: 700px;            
                border-radius: 40px;
                box-shadow: 0 0 30px var(--Primary_Green);
            }

        }
    }
`;

export const AboutUsOurTeam = styled.section`
    margin-top: 100px;
    display: inline-block;
    width: 100%;
    height: 600px;  
    &>div{
        width:100%;

        &:first-child {
            height: 100px;
            h1 {
                font-size: 4vh;
                color: var(--Primary_Green);
                font-weight: 900;
            }
        }
        &:last-child{
            height: 500px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            gap: 20px;

            background: radial-gradient(circle, var(--Primary_Black) 30%, var(--Primary_Green) 100%);
        }
    }
`;

export const EachMember = styled.div`
    height: fit-content;
    width: 280px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 30px;

    &>div {
        width: 100%;
        &:first-child {
            height: 200px;
            width: 200px;
            overflow: hidden;
            border-radius: 100%;
            border: 10px solid var(--Fifth_Green);
            display: flex;
            justify-content: center;
            align-items: center;

        }
        &:last-child{
            height: fit-content;
            display: inline-block;
            padding: 20px;

            color: var(--Primary_White);
            
        }
    }

    &:hover{
        &>div:first-child {
            transform: scale(1.05);
            box-shadow: 0 0 100px var(--Fifth_Green);
        }
    }
`;