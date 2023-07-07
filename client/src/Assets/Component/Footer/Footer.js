
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
                                <a href="https://github.com/DucAnh2611/Vegetable-Web">Github</a>
                                <a href="https://www.figma.com/file/M3IcmYGMJN61Tn4fcVINhI/DaCNTT?type=design&node-id=205%3A238&mode=design&t=wSQl7MiPoCSnG4Ve-1">Figma</a>
                                <a href="https://thanglongedu-my.sharepoint.com/:w:/g/personal/a38520_thanglong_edu_vn/EWK-tpPID-xFiCa0o1JkbnABlVMLHoD6EbAQCxd2M6G62w?e=72JAOk">Word</a>
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