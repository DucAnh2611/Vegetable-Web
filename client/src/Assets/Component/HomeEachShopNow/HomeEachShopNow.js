
import React from "react";
import {ShopNowWrapper,
        ShopNowProductWrapper,
        ShopNowProductContent,
        ShopNowProductTitle,
        ShopNowProductSubTitle } from "./HomeEachShopeNow_Styled";
import {SectionButton,
        SectionWrapper,
        SectionTitle} from "../HomeEachBenefit/HomeEachBenefit_Styled"

export default function ShopNow() {

    return(

        <SectionWrapper style={{flexDirection: "row",
                                justifyContent: "space-between"}}>

            <ShopNowProductWrapper>

                <ShopNowProductContent>
                    <SectionTitle>Organic Pork</SectionTitle>
                    <ShopNowProductSubTitle>No Preservatives</ShopNowProductSubTitle>
                    <SectionButton style={{marginLeft: "0"}}>Shop now</SectionButton>
                </ShopNowProductContent>

            </ShopNowProductWrapper>

            <ShopNowProductWrapper>

                <ShopNowProductContent>
                    <SectionTitle>Scallion</SectionTitle>
                    <ShopNowProductSubTitle>10% off today only</ShopNowProductSubTitle>
                    <SectionButton style={{marginLeft: "0"}}>Shop now</SectionButton>
                </ShopNowProductContent>

            </ShopNowProductWrapper>

        </SectionWrapper>

    )
}