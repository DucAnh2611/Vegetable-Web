import styled from "styled-components"

export const ShopNowWrapper = styled.div`
    width: auto;
    margin: 0 auto;
    height: auto;
    display: flex;
    justify-content: space-between;
    
`;

export const ShopNowProductWrapper = styled.div`
    width: 50%;
    height: 100%;
    margin: 0 15px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    position: relative;

    :hover {
        img {
            transform: scale(1.05);
        }
    }
`;

export const ShopNowImgWrap = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
    position: relative;
    display: grid;
    place-items: center;

    img {
        height: 352px;
        width: 670px;
        object-fit: cover;
    }
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