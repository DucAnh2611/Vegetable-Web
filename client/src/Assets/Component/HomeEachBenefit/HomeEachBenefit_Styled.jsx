
import styled from "styled-components"

export const BenefitWrapper=styled.div`
    padding: 8% 5% 0px 5%;
`;

export const BenefitTitleAndSubTitle=styled.div`
    padding-bottom: 20px;
`;

export const SectionTitle=styled.div`
    font-size: 38px;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

export const BenefitSubTitle=styled.div`
    font-size: 16px;
    font-weight: 400;
    color:var(--Primary_Gray);
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    padding: 20px 0 0px 0;
`;

export const BenefitContentWrapper=styled.div`
    display: flex;
    margin: 20px 0 50px 0;
`;

export const BenefitContent=styled.div`
    background: var(--Sixth_Green);
    height: 230px;
    width: 23%;
    border-radius: 16px;
    display: inline-block;
    margin: 0 1% 0 1%;
`;

export const BenefitContentIconWrapper=styled.div`
    height: 80px;
    width: 80px;
    background-color: var(--Secondary_Green);
    border-radius: 50%;
    margin: 10% auto 5% auto;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BenefitContentParagraph=styled.p`
    font-weight: 400;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    padding: 0 16px 0 16px;

`;

export const BenefitButton=styled.button`
    height:46px;
    width: 140px;
    border-radius: 10px;
    border: none;
    background: var(--Fourth_Green);
    color: var(--Secondary_White);
    font-size: 16px;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    cursor: pointer;
    justify-content: center;
    line-height: 46px;
    &:hover{
        background: var(--Hover_Color_Btn);
    }
`;