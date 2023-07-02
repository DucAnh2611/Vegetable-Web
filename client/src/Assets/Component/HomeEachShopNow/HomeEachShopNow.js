
import React from "react";
import * as Style from "./HomeEachShopeNow_Styled";
import * as Style_2 from "../HomeEachBenefit/HomeEachBenefit_Styled"

export default function ShopNow() {

    return (

        <Style.ShopNowWrapper>
            <Style.ShopNowWrap2Ele>

                <Style.ShopNowProductWrapper>
                    {/* Ảnh */}
                    <Style.ShopNowImgWrap>
                        <Style.ShopNowProductImg>
                            <img src="https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2023/02/banner-1.jpg" alt="Beef"/>
                        </Style.ShopNowProductImg>
                    </Style.ShopNowImgWrap>
                    {/* Description */}
                    <Style.ShopNowProductContent>
                        <Style_2.SectionTitle style={{ color: "var(--Secondary_White)" }}>Organic Pork</Style_2.SectionTitle>
                        <Style.ShopNowProductSubTitle style={{ color: "var(--Primary_White)" }}>No Preservatives</Style.ShopNowProductSubTitle>
                        <Style_2.SectionButton>Shop now</Style_2.SectionButton>
                    </Style.ShopNowProductContent>
                </Style.ShopNowProductWrapper>

                <Style.ShopNowProductWrapper>
                    {/* Ảnh */}
                    <Style.ShopNowImgWrap>
                        <Style.ShopNowProductImg>
                            <img src="https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2022/11/banner-2.jpg" alt="Beef"/>
                        </Style.ShopNowProductImg>
                    </Style.ShopNowImgWrap>
                    {/* Description */}
                    <Style.ShopNowProductContent>
                        <Style_2.SectionTitle>Scallion</Style_2.SectionTitle>
                        <Style.ShopNowProductSubTitle style={{color: "var(--Primary_Gray)"}}>10% off today only</Style.ShopNowProductSubTitle>
                        <Style_2.SectionButton>Shop now</Style_2.SectionButton>
                </Style.ShopNowProductContent>
                </Style.ShopNowProductWrapper>

            </Style.ShopNowWrap2Ele>
        </Style.ShopNowWrapper>
    )
}