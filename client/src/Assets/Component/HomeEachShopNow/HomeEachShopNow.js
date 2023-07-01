
import React from "react";
import {ShopNowWrapper,
        ShopNowProductWrapper,
        Space,
        ShopNowProductImg,
        ShopNowProductContent,
        ShopNowProductSubTitle} from "./HomeEachShopeNow_Styled";
import {SectionButton,
        SectionTitle, } from "../HomeEachBenefit/HomeEachBenefit_Styled"

export default function ShopNow() {

    return(

        <ShopNowWrapper>

            <ShopNowProductWrapper>
                
                <ShopNowProductImg style={{backgroundImage: "var(--Beef)"}}>

                    <ShopNowProductContent>
                        <SectionTitle style={{color:"var(--Secondary_White)"}}>Organic Pork</SectionTitle>
                        <ShopNowProductSubTitle style={{color:"var(--Primary_White)"}}>No Preservatives</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>

                </ShopNowProductImg>

            </ShopNowProductWrapper>

            <Space></Space>

            <ShopNowProductWrapper style={{float:"left"}}>

                <ShopNowProductImg style={{backgroundImage: "var(--Onion)"}}>
                        
                    <ShopNowProductContent>
                        <SectionTitle>Scallion</SectionTitle>
                        <ShopNowProductSubTitle>10% off today only</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>
                    
                </ShopNowProductImg>

            </ShopNowProductWrapper>

        </ShopNowWrapper>

    )
}