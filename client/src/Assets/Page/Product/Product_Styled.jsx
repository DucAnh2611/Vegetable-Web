
import styled from "styled-components";

export const ProductWrapper = styled.div`
    display: flex;
    width: 80%;
    margin: 0 auto;
`;

// Heading
export const ProductHeadingWrap = styled.div`
    padding: 0 20px 20px 20px;
    position: sticky;
    height: fit-content; 
    width: 25%;   
    border: 1px solid var(--Primary_Green);
    margin-top: 30px;
    box-sizing: border-box;
`;

export const ProductTitle = styled.div`
    height: auto;
    width: 100%;

    h1 {
        padding: 20px 0 0 0;
        font-size: 30px;
        font-weight: bold;
        text-align: left;
    }
`;
// Menu ở heading
export const ProductMenuFilter = styled.div`
    height: auto;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 5px 0;
    margin-bottom: 20px;

    button {
        padding: 10px 0;
        text-align: left;
        font-size: 17px;
        background-color: transparent;
        box-sizing: border-box;
        border-bottom: 1px solid var(--Secondary_White);

        :hover {
            cursor: pointer;
            color: var(--Fifth_Green);
            border-bottom: 1px solid var(--Primary_Green);
        }
    }
`;

// Khoảng giá (double range)
export const DoubleRangeSection = styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h1 {
        text-align: "left";
        width: 100%;
        padding: 20px 0 0 0;
        font-size: 30px;
        font-weight: bold;
        margin: 0;

    }
`;

export const DoubleRangeWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    &>div{
        width: fit-content;
        height: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        &> input[type="range" i] {
            width: 250px;
            -webkit-appearance: none;
            appearance: none;
            background: transparent;
            cursor: pointer;
            ::-webkit-slider-runnable-track {
                background: var(--Primary_Green);
                height: fit-content;
                border-radius: 10px;
                padding: 3px;
            }
            ::-webkit-slider-thumb{
                -webkit-appearance: none;
                appearance: none;
                background-color: var(--Fifth_Green);
                border-radius: 100%;
                border: 2px solid var(--Secondary_White);
                height: 15px;
                width: 15px;  
            }
        }
    }
    
    &>p{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;


// Product range + list product
export const ProRangeListPro = styled.div`
    width: 75%;
    margin-top: 30px;
`;

export const ProductShowWrap = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    height: auto;
    align-items: center;
    padding-bottom: 20px;
`;

export const ProductShow = styled.div`
    display: flex;
    flex-direction: row;
    margin-right: 20px;
    align-items: center;

    p {
        font-size: 16px;
        margin-right: 10px;
    }

    button {
        height: 30px;
        width: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        border-radius: 100%;
        font-size: 15px;
        padding: 2px 10px;

        :hover {
            color: var(--Primary_White);
            cursor: pointer;
            background-color: var(--Fifth_Green)
        }
    }
`;

export const ProductShowSearch = styled.div`
    width: 500px;
    height: auto;

    input {
        font-size: 15px;
        padding: 10px 15px;
        width: 100%;
        font-size: 16px;
        border-radius: 50px;
        outline: none;
        border: 2px solid rgba(0,0,0, .2);
        box-shadow: 2px 3px 3px rgba(0,0,0, .1);

        ::placeholder {
            color: rgba(0,0,0, .3);
        }
        :focus {
            border-color: var(--Fourth_Green);
        }
    }
`;

// List product
export const ProductListWrap = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1440px;
`;

export const PagenationPage = styled.div`
    max-width: 1440px;
    margin: 0 auto;

    div {
        display: flex;
        justify-content: center;
        margin-top: 15px;
        align-items: center;
    }
    p{
        text-align: center;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 5px;
        letter-spacing: 2px;
    }

    button {
        height: 30px;
        width: 30px;
        background-color: transparent;
        border-radius: 100%;
        font-size: 16px;
        padding: 10px;
        margin: 0 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--Primary_Green);
        color: var(--Secondary_White);
        :hover {
            color: var(--Primary_White);
            cursor: pointer;
            background-color: var(--Fifth_Green);
        }
    }

    input {
        width: 50px;
        font-size: 12px;
        box-sizing: border-box;
        padding: 10px;
        border: 1px solid var(--Fifth_Green);
        border-radius: 10px;
        :focus{
            outline: none;
            border: 1px solid var(--Primary_Green);
        }
    }
`;