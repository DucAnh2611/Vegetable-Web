import styled from "styled-components"

export const BestSeller_Wrap = styled.div`
    background: var(--Secondary_White);
    height: auto;
    width: 100%;
    padding: 0 15px;
`;

export const AllProduct_wrap = styled.div`
    width: 100%;
    height: auto;
    max-width: 1440px;
    margin: 0 auto;

    h1 {
        font-weight: 500;
        margin-bottom: 10px;
    }
`;

export const Filter_category_wrap = styled.div`
    margin: 0 auto;
    height: auto;
    width: 500px;
    margin-top: 15px;
`;

export const Filter_category_list = styled.ul`
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    margin-bottom: 50px;

    li:first-child{
        padding: 0 10px 0 0;
    }

    li {
        padding: 0 12px;
    }

    li:hover {
        cursor: pointer;
        color: var(--Fifth_Green);
        transition: 0.2s;
    }
`;