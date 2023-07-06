
import styled from "styled-components";

export const ProductWrapper = styled.div`
    padding: 0 15px;
`;

// Heading
export const ProductHeadingWrap = styled.div`
    margin-top: 30px;
`;

export const ProductTitle = styled.div`
    height: auto;
    width: 100%;

    h1 {
        margin: 30px 0 20px 0;
    }
`;
// Menu ở heading
export const ProductMenuFilter = styled.div`
    height: auto;
    width: 35%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    margin-bottom: 20px;

    button {
        font-size: 18px;
        background-color: transparent;

        :hover {
            cursor: pointer;
            color: var(--Fifth_Green);
        }
    }
`;

// Khoảng giá (double range)
export const DoubleRangeSection = styled.div`
    width: 35%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    h1 {
        padding: 0 10px;
        font-size: 17px;
        font-weight: 400;
        margin: 0;

    }
`;

export const DoubleRangeWrap = styled.div`

    display: flex;
    gap: 10px;
    &>div{
        width: fit-content;
        height: 40px;
        position: relative;
        display: flex;
        flex-direction: column;
        &> input {
            width: 200px;
        }
    }
    
    &>p{
        margin-top: 10px;
    }
`;


// Product range + list product
export const ProRangeListPro = styled.div`
    margin-top: 30px;
`;

export const ProductShowWrap = styled.div`
    display: flex;
    margin: 0 auto;
    width: 35%;
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
        background-color: transparent;
        border-radius: 50%;
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
    flex: 1;
    width: 260px;
    height: auto;

    input {
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
    }

    button {
        background-color: transparent;
        border-radius: 50%;
        font-size: 16px;
        padding: 4px 20px;
        margin: 0 5px;

        :hover {
            color: var(--Primary_White);
            cursor: pointer;
            background-color: var(--Fifth_Green)
        }
    }

    input {
        width: 60px;
        font-size: 16px;
    }
`;