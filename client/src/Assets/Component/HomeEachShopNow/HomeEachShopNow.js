
import React from "react";
import {ShopNowProductWrapper,
        ShopNowProductImg,
        ShopNowProductContent,
        ShopNowProductSubTitle} from "./HomeEachShopeNow_Styled";
import {SectionButton,
        SectionWrapper,
        SectionTitle} from "../HomeEachBenefit/HomeEachBenefit_Styled"

export default function ShopNow() {

    return(

        <SectionWrapper>

            <ShopNowProductWrapper>
                
                <ShopNowProductImg style={{marginRight: "1%"}}>

                    <ShopNowProductContent>
                        <SectionTitle>Organic Pork</SectionTitle>
                        <ShopNowProductSubTitle>No Preservatives</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>

                </ShopNowProductImg>

            </ShopNowProductWrapper>

            <ShopNowProductWrapper>

                <ShopNowProductImg style={{marginLeft: "1%"}}>
                        
                    <ShopNowProductContent>
                        <SectionTitle>Scallion</SectionTitle>
                        <ShopNowProductSubTitle>10% off today only</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>
                    
                </ShopNowProductImg>

            </ShopNowProductWrapper>

        </SectionWrapper>

    )
}