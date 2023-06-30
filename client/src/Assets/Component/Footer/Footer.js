
import React from "react";
import { ReactComponent as Logo } from "../../Image/SVG/horizon_logo.svg";
import { 
    DetailContent,
    DetailContentColumn,
    DetailHeader,
    FooterDetailWrap,
    FooterEndWrap,
    FooterWrap
} from "./Footer_Styled";

export default function Footer() {
    return (

        <FooterWrap>

            <FooterDetailWrap>

                <DetailHeader>

                    <div>
                        <span><Logo/></span>
                    </div>
                    
                </DetailHeader>

                <DetailContent>

                    <DetailContentColumn>

                        <div>
                            <h1>About us</h1>
                        </div>

                        <div>
                            <a href="https://github.com/DucAnh2611/Vegetable-Web">Vege Source</a>
                            <a href="#">b</a>
                            <a href="#">c</a>
                            <a href="#">d</a>
                        </div>

                    </DetailContentColumn>

                    <DetailContentColumn>

                        <div>
                            <h1>About us</h1>
                        </div>

                        <div>
                            <a href="https://github.com/DucAnh2611/Vegetable-Web">Vege Source</a>
                            <a href="#">b</a>
                            <a href="#">c</a>
                            <a href="#">d</a>
                        </div>

                    </DetailContentColumn>

                    <DetailContentColumn>

                        <div>
                            <h1>About us</h1>
                        </div>

                        <div>
                            <a href="https://github.com/DucAnh2611/Vegetable-Web">Vege Source</a>
                            <a href="#">b</a>
                            <a href="#">c</a>
                            <a href="#">d</a>
                        </div>

                    </DetailContentColumn>

                    <DetailContentColumn>

                        <div>
                            <h1>About us</h1>
                        </div>

                        <div>
                            <a href="https://github.com/DucAnh2611/Vegetable-Web">Vege Source</a>
                            <a href="#">b</a>
                            <a href="#">c</a>
                            <a href="#">d</a>
                        </div>

                    </DetailContentColumn>

                </DetailContent>

            </FooterDetailWrap>

            <FooterEndWrap>
                <p>Copyright@ 2023 Vegetable. All Rights Reserved</p>
            </FooterEndWrap>

        </FooterWrap>

    )
}