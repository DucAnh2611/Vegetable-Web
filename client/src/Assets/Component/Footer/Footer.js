
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
                                <p>MST: 0123456789</p>
                                <p>DHTL-Nghiêm Xuân Yêm-Hà Nội</p>
                            </div>
                        </div>
                    </DetailHeader>

                    <DetailContent>

                        <DetailContentColumn>
                            <div>
                                <h1>ABOUT US</h1>
                            </div>

                            <div>
                                <a href="#">Order</a>
                                <a href="#">Shipment</a>
                                <a href="#">Feedback</a>
                                <a href="#">Privacy Policy</a>
                            </div>
                        </DetailContentColumn>

                        <DetailContentColumn>
                            <div>
                                <h1>HOT CATEGORY</h1>
                            </div>

                            <div>
                                <a href="#">Fruit</a>
                                <a href="#">Meat</a>
                                <a href="#">Milk Eggs</a>
                                <a href="#">Vegetable</a>
                            </div>
                        </DetailContentColumn>

                        <DetailContentColumn>
                            <div>
                                <h1>MY ACCOUNT</h1>
                            </div>

                            <div>
                                <a href="#">Cart</a>
                                <a href="#">Favourite</a>
                                <a href="#">List Bought</a>
                                <a href="#">Product Infomation</a>
                            </div>
                        </DetailContentColumn>

                        <DetailContentColumn>
                            <div>
                                <h1>PAYMENT</h1>
                            </div>

                            <div>
                                <a href="#">Visa</a>
                                <a href="#">Momo</a>
                                <a href="#">Paypal</a>
                                <a href="#">Viettel pay</a>
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