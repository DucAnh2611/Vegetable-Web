
import React from "react";
import * as Style from "./HomeEachShopeNow_Styled";
import * as Style_2 from "../HomeEachBenefit/HomeEachBenefit_Styled";
import {useNavigate} from "react-router-dom";
export default function ShopNow() {

    const navigate = useNavigate();

    return (

        <Style.ShopNowWrapper>

            <Style.ShopNowProductWrapper>
                {/* Ảnh */}
                <Style.ShopNowImgWrap>
                    <img src="https://static.toiimg.com/photo/msid-68107293/68107293.jpg" alt="Jack Fruit"/>
                </Style.ShopNowImgWrap>
                {/* Description */}
                <Style.ShopNowProductContent>
                    <Style_2.SectionTitle style={{ color: "var(--Secondary_White)" }}>Jack fruit</Style_2.SectionTitle>
                    <Style.ShopNowProductSubTitle style={{ color: "var(--Primary_Black)" }}>No Preservatives</Style.ShopNowProductSubTitle>
                    <Style_2.SectionButton onClick={e => navigate("/shop")}>Shop now</Style_2.SectionButton>
                </Style.ShopNowProductContent>
            </Style.ShopNowProductWrapper>

            <Style.ShopNowProductWrapper>
                {/* Ảnh */}
                <Style.ShopNowImgWrap>
                    <img src="https://www.narayanahealth.org/blog/wp-content/uploads/2022/04/NH-Social-Media-Health-Nuggets-14-1.jpg" alt="Bell Pepper"/>
                </Style.ShopNowImgWrap>
                {/* Description */}
                <Style.ShopNowProductContent>
                    <Style_2.SectionTitle style={{color: "var(--Primary_Black)"}}>Bell Pepper</Style_2.SectionTitle>
                    <Style.ShopNowProductSubTitle style={{color: "var(--Primary_Black)"}}>No Preservatives</Style.ShopNowProductSubTitle>
                    <Style_2.SectionButton onClick={e => navigate("/shop")}>Shop now</Style_2.SectionButton>
            </Style.ShopNowProductContent>
            </Style.ShopNowProductWrapper>

        </Style.ShopNowWrapper>
    )
}