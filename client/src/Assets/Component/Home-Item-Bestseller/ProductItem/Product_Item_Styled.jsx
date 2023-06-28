import styled from "styled-components"

export const flex_row_product = styled.div`
    max-width: 1440px;
    display: flex;
    flex-wrap: wrap
`;

export const Product_Item_Wrap = styled.div`
    padding: 0 15px;
    width: 288px;
    height: auto;
    margin-bottom: 24px;
`;

export const Product_content = styled.div`
    width: 100%;
    height: auto;
    border: 1px solid rgba(64, 107, 15, 0.1);
`;

// Ảnh product
export const Pic_item_wrap = styled.div`
    display: block;
    width: 100%;
    height: 300px;

    a {
        display: block;
        width: 100%;
        height: 100%;
    }

    img {
        width: 100%;
        height: auto;
        object-fit: cover;
    }
`;

// Des ảnh product
export const Pic_item_des = styled.div`
    width: 100%;
    height: auto;
    margin-top: 10px;

    h3 {
        font-size: 17px;
        font-weight: 400;
        margin-top: 5px;
    }
`;

export const Star_rating = styled.div`
    width: 45%;
    height: auto;
    font-size: 14px;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: var(--Primary_Gray)
`;

export const Product_price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 12px 0;

    span {
        display: flex;
        align-items: center;
        font-size: 12px;

        p {
            font-size: 15px;

        }
    }

    > *:first-child {
        color: var(--Primary_Gray);
        p {
            text-decoration: line-through;
        }
    }

    > *:last-child {
        margin-left: 10px;
        color: var(--Primary_Black);
        font-weight: 500;
    }
`;
