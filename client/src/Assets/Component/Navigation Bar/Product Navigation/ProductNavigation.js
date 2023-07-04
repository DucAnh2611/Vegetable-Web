
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/only_logo.svg";
import {ProductNavigationWrapper,
        ProductNavigationLogoWrapper,
        ProductNavigationSearchWrapper,
        PNSearchButtonWrapper,
        PNSearchInputWrapper,
        PNSearchInput,
        PNSearchByCategoryWrapper,
        PNSearchByCategorySelect,
        PNSearchByCategoryOption,
        ProductNavigationUserAndCartWrapper,
        PNUserAndCartWrapper,
        PNUserAndCartLogoWrapper,
        PNUserAndCartTitle,
        PNCartItemNumber } from "./ProductNavigation_Styled";

export default function ProductNavigation() {
    return (
        <ProductNavigationWrapper>
            
            <ProductNavigationLogoWrapper>

                <a href="/"><Logo/></a>

            </ProductNavigationLogoWrapper>

            <ProductNavigationSearchWrapper>
               
                <PNSearchButtonWrapper>
                    <FontAwesomeIcon icon={faSolid.faMagnifyingGlass}/>
                </PNSearchButtonWrapper>

                <PNSearchInputWrapper>
                    <PNSearchInput placeholder="Search now..."/>
                </PNSearchInputWrapper>
           
                <PNSearchByCategoryWrapper>

                    <PNSearchByCategorySelect>
                        <PNSearchByCategoryOption value={0}>All catergory</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={1}>Drink</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={2}>Fruit</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={3}>Fruits & Vegetables</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={4}>Strawberry</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={5}>Blueberry</PNSearchByCategoryOption>
                        <PNSearchByCategoryOption value={6}>Meat</PNSearchByCategoryOption>
                    </PNSearchByCategorySelect>
                
                </PNSearchByCategoryWrapper>

            </ProductNavigationSearchWrapper>
            
            <ProductNavigationUserAndCartWrapper>

                <PNUserAndCartWrapper>

                    <PNUserAndCartLogoWrapper>
                        <FontAwesomeIcon icon={faRegular.faUser}/>
                    </PNUserAndCartLogoWrapper>

                    <PNUserAndCartTitle>My Account</PNUserAndCartTitle>

                </PNUserAndCartWrapper>

                <PNUserAndCartWrapper>

                    <PNUserAndCartLogoWrapper style={{backgroundColor:"var(--Primary_Pink)"}}>
                        <FontAwesomeIcon icon={faSolid.faBasketShopping}/>
                    </PNUserAndCartLogoWrapper>

                    <PNCartItemNumber>1</PNCartItemNumber>

                    <PNUserAndCartTitle>My Cart</PNUserAndCartTitle>

                </PNUserAndCartWrapper>

            </ProductNavigationUserAndCartWrapper>

        </ProductNavigationWrapper>
    )
}