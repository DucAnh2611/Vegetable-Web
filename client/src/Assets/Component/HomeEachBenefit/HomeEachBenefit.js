
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { ReactComponent as BenefitIcon1 } from "../../../Assets/Image/SVG/Benefit SVG/low in pesticides.svg";
import { ReactComponent as BenefitIcon2 } from "../../../Assets/Image/SVG/Benefit SVG/Natural enviroment.svg";
import { ReactComponent as BenefitIcon3 } from "../../../Assets/Image/SVG/Benefit SVG/no hormones.svg";
import { ReactComponent as BenefitIcon4 } from "../../../Assets/Image/SVG/Benefit SVG/no hormones.svg";
import {BenefitWrapper,
        BenefitTitleAndSubTitle,
        SectionTitle,
        BenefitSubTitle,
        BenefitContentWrapper,
        BenefitContent,
        BenefitContentIconWrapper,
        BenefitContentParagraph,
        BenefitButton } from "./HomeEachBenefit_Styled";

export default function Benefit() {
    return (

        <BenefitWrapper>

            <BenefitTitleAndSubTitle>
                <SectionTitle>Benefits of organic food</SectionTitle>
                <BenefitSubTitle>Let's see the benefits of organic food</BenefitSubTitle>
            </BenefitTitleAndSubTitle>

            <BenefitContentWrapper>

                <BenefitContent>

                    <BenefitContentIconWrapper>
                        <BenefitIcon1></BenefitIcon1>
                    </BenefitContentIconWrapper>

                    <BenefitContentParagraph>May be low in pesticides or other chemicals.</BenefitContentParagraph>

                </BenefitContent>

                <BenefitContent>

                    <BenefitContentIconWrapper>
                        <BenefitIcon2></BenefitIcon2>
                    </BenefitContentIconWrapper>

                    <BenefitContentParagraph>Meat of animals raised in a natural environment...</BenefitContentParagraph>

                </BenefitContent>

                <BenefitContent>

                    <BenefitContentIconWrapper>
                        <BenefitIcon3></BenefitIcon3>
                    </BenefitContentIconWrapper>

                    <BenefitContentParagraph>Meat has no antibiotics or hormones</BenefitContentParagraph>

                </BenefitContent>

                <BenefitContent>

                    <BenefitContentIconWrapper>
                        <BenefitIcon4></BenefitIcon4>
                    </BenefitContentIconWrapper>

                    <BenefitContentParagraph>Apply natural farming methods to return the soil to fertility.</BenefitContentParagraph>

                </BenefitContent>

            </BenefitContentWrapper>
    
            <BenefitButton>Read more</BenefitButton>
                    
        </BenefitWrapper>

    )
}