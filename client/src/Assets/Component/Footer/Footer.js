
import React from "react";
import { ReactComponent as Logo } from "../../Image/SVG/horizon_logo.svg";
import { 
    DetailContent,
    DetailContentColumn,
    DetailHeader,
    FooterDetailAll,
    FooterDetailWrap,
    FooterEndWrap,
    FooterWrap
} from "./Footer_Styled";

export default function Footer() {
    return (

        <FooterWrap>

            <FooterDetailAll>

                <FooterDetailWrap>
                    <DetailHeader>
                        <div>
                            <span><Logo/></span>
                            <div>
                                <h1>Vegetable | Thực phẩm sạch</h1>
                                <p>CTY TNHH Nhóm 2</p>
                                <p>Thang Long Universtity</p>
                                <p>Nghiêm Xuân Yêm-Hà Nội</p>
                            </div>
                        </div>
                    </DetailHeader>

                    <DetailContent>

                        <DetailContentColumn>
                            <div>
                                <h1>ABOUT US</h1>
                            </div>

                            <div>
                                <a href="/my-accoount/orders">Order</a>
                                <a href="/about-us">Our Infomation</a>
                            </div>
                        </DetailContentColumn>

                        <DetailContentColumn>
                            <div>
                                <h1>OUR SOURCE</h1>
                            </div>

                            <div>
                                <a href="#">Github</a>
                                <a href="#">Figma</a>
                                <a href="#">Word</a>
                                <a href="#">Endpoints</a>
                            </div>
                        </DetailContentColumn>

                        <DetailContentColumn>
                            <div>
                                <h1>MY ACCOUNT</h1>
                            </div>

                            <div>
                                <a href="/shop-cart">Cart</a>
                                <a href="/my-account/orders">Favourite</a>
                            </div>
                        </DetailContentColumn>

                    </DetailContent>
                </FooterDetailWrap>

                <FooterEndWrap>
                    <p>Copyright@ 2023 Vegetable. All Rights Reserved</p>
                </FooterEndWrap>
            </FooterDetailAll>

        </FooterWrap>

    )
}