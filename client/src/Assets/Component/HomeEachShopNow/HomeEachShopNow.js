
import React from "react";
import Beef from "../../Image/HomeShopNow/beef.jpg"
import SpringOnion from "../../Image/HomeShopNow/hanh.jpg"
import {ShopNowWrapper,
        ShopNowProductWrapper,
        ShopNowProductImg,
        ShopNowProductContent,
        ShopNowProductSubTitle} from "./HomeEachShopeNow_Styled";
import {SectionButton,
        SectionTitle, } from "../HomeEachBenefit/HomeEachBenefit_Styled"

export default function ShopNow() {

    return(

        <ShopNowWrapper>

            <ShopNowProductWrapper>
                
                <ShopNowProductImg src={Beef}/>

                    <ShopNowProductContent>
                        <SectionTitle >Organic Pork</SectionTitle>
                        <ShopNowProductSubTitle >No Preservatives</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>

            </ShopNowProductWrapper>

            <ShopNowProductWrapper>

                <ShopNowProductImg src={SpringOnion}/>
                        
                    <ShopNowProductContent>
                        <SectionTitle>Scallion</SectionTitle>
                        <ShopNowProductSubTitle>10% off today only</ShopNowProductSubTitle>
                        <SectionButton>Shop now</SectionButton>
                    </ShopNowProductContent>
                    
            </ShopNowProductWrapper>

        </ShopNowWrapper>

    )
}