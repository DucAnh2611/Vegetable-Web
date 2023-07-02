import styled from "styled-components"

export const ShopNowWrapper = styled.div`
    padding: 0 15px;
`;

export const ShopNowWrap2Ele = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    margin-top: 80px;
`;

export const ShopNowProductWrapper = styled.div`
    width: 50%;
    height: auto;
    padding: 0 20px;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    position: relative;

    :hover {
        img {
            transform: scale(1.1);
        }
    }
`;

export const ShopNowImgWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;

    img {
        transform: scale(1);
        transition: 1s;
    }
`;

export const ShopNowProductImg = styled.div`
    height: 350px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
`;

export const ShopNowProductContent = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 13%;
    left: 8%;
`;

export const ShopNowProductSubTitle = styled.div`
    display: flex;
    font-size: 16px;
    margin: 15px 0;
`;