import styled from "styled-components"

export const flex_row_product = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
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
    box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.05);

    :hover {
        border: 1px solid var(--Fifth_Green);
        box-shadow: 3px 4px 6px rgba(0, 0, 0, 0.1);
        color: var(--Fourth_Green);
        opacity: 1;

        img {
            transform: scale(1.1);
            transition: transform .5s ease;
        }
    }
`;

// Ảnh product
export const Pic_item_wrap = styled.div`
    display: block;
    width: 100%;
    height: 300px;
    overflow: hidden;
    transition: transform .3s ease;
    transform: scale(1);
    position: relative;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
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
    color: var(--Primary_Yellow);
`;

export const Product_price = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 15px 0;

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


// Button
export const ShopNow_Btn = styled.div`
    width: 100%;
    height: auto;
    margin: 20px auto 0 auto;

    button {
        padding: 17px 44px;
        border-radius: 12px;
        border: none;
        background: var(--Fourth_Green);
        color: var(--Secondary_White);
        font-size: 16px;
        font-family: sans-serif;
        cursor: pointer;

        :hover {
            background-color: var(--Hover_Color_Btn);
        }
    }
`;

// Product button
export const Product_side_btn = styled.div`
    position: absolute;
    top: auto;
    bottom: 25px;
    right: 20px;
    left: auto;
    z-index: 9;
    width: 30px;
    height: 182px;
    padding: 0;
    -webkit-transition: all .2s ease;
    transition: all .2s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    /* opacity: 0; */

    button {
        font-size: 16px;
        width: 30px;
        height: 30px;
        line-height: 30px;
        background: #fff;
        border-radius: 50%;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        -ms-border-radius: 50%;
        -o-border-radius: 50%;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
        border: 0;
        padding: 0;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        :hover {
            color: var(--Primary_White);
            background-color: var(--Primary_Green);
        }
    }
`;

export const Side_btn_wishlist = styled.div`
    button:hover::before {
        content: 'Wishlist';
        position: absolute;
        /* right: 20px; */
        /* bottom: 0; */
        -webkit-transform: translate(-86%,0%);
        transform: translate(-86%,0%);
        width: auto;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        padding: 0 10px;
        color: var(--Primary_White);
        background-color: var(--Primary_Green);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        z-index: 10;
    }
    button:hover::after {
        content: '';
        position: absolute;
        transform: translateY(5%);
        -webkit-transform: translate(-200%,0%);
        transform: translate(-200%,0%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent var(--Primary_Green);
    }
`;

export const Side_btn_quickView = styled.div`
    button:hover::before {
        content: 'Quick View';
        position: absolute;
        -webkit-transform: translate(-78%,0%);
        transform: translate(-78%,0%);
        width: auto;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        padding: 0 10px;
        color: var(--Primary_White);
        background-color: var(--Primary_Green);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        z-index: 10;
    }
    button:hover::after {
        content: '';
        position: absolute;
        transform: translateY(5%);
        -webkit-transform: translate(-200%,0%);
        transform: translate(-200%,0%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent var(--Primary_Green);
    }
`;

export const Side_btn_compare = styled.div`
    button:hover::before {
        content: 'Compare';
        position: absolute;
        -webkit-transform: translate(-83%,0%);
        transform: translate(-83%,0%);
        width: auto;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        padding: 0 10px;
        color: var(--Primary_White);
        background-color: var(--Primary_Green);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        z-index: 10;
    }
    button:hover::after {
        content: '';
        position: absolute;
        transform: translateY(5%);
        -webkit-transform: translate(-200%,0%);
        transform: translate(-200%,0%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent var(--Primary_Green);
    }
`;

export const Side_btn_addToCart = styled.div`
    button:hover::before {
        content: 'Add to cart';
        position: absolute;
        -webkit-transform: translate(-77%,0%);
        transform: translate(-77%,0%);
        width: auto;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        font-weight: 600;
        white-space: nowrap;
        padding: 0 10px;
        color: var(--Primary_White);
        background-color: var(--Primary_Green);
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        -ms-border-radius: 5px;
        -o-border-radius: 5px;
        border-radius: 5px;
        z-index: 10;
    }
    button:hover::after {
        content: '';
        position: absolute;
        transform: translateY(5%);
        -webkit-transform: translate(-200%,0%);
        transform: translate(-200%,0%);
        border-width: 5px;
        border-style: solid;
        border-color: transparent transparent transparent var(--Primary_Green);
    }
`;