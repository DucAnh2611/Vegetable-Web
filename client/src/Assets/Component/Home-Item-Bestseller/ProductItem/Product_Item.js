import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import * as faBrands from "@fortawesome/free-brands-svg-icons";
import * as Style from "./Product_Item_Styled"

function Product_Item() {
    return (
        <>
            <Style.flex_row_product>
                <Style.Product_Item_Wrap>
                    <Style.Product_content>
                        {/* Ảnh product */}
                        <Style.Pic_item_wrap>
                            <a href="#">
                                <img src="https://wpbingosite.com/wordpress/vegety/wp-content/uploads/2018/05/products-45.jpg" alt="Dưa hấu"></img>
                            </a>

                            {/* Side menu product section */}
                            <Style.Product_side_btn>
                                <Style.Side_btn_wishlist>
                                    <button>
                                        <FontAwesomeIcon icon={faRegular.faHeart} />
                                    </button>
                                </Style.Side_btn_wishlist>

                                <Style.Side_btn_quickView>
                                    <button>
                                        <FontAwesomeIcon icon={faRegular.faEye} />
                                    </button>
                                </Style.Side_btn_quickView>

                                <Style.Side_btn_compare>
                                    <button>
                                        <FontAwesomeIcon icon={faSolid.faArrowRightArrowLeft} />
                                    </button>
                                </Style.Side_btn_compare>

                                <Style.Side_btn_addToCart>
                                    <button>
                                        <FontAwesomeIcon icon={faSolid.faCartShopping} />
                                    </button>
                                </Style.Side_btn_addToCart>
                            </Style.Product_side_btn>

                        </Style.Pic_item_wrap>

                        {/* Description product */}
                        <Style.Pic_item_des>
                            {/* Rating section */}
                            <Style.Star_rating>
                                <FontAwesomeIcon icon={faRegular.faStar} />
                                <FontAwesomeIcon icon={faRegular.faStar} />
                                <FontAwesomeIcon icon={faRegular.faStar} />
                                <FontAwesomeIcon icon={faRegular.faStar} />
                                <FontAwesomeIcon icon={faRegular.faStar} />
                            </Style.Star_rating>

                            <h3>Organic Watermelon</h3>

                            {/* Product price section */}
                            <Style.Product_price>
                                <span>
                                    <FontAwesomeIcon icon={faSolid.faDollarSign} />
                                    <p>180.00</p>
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faSolid.faDollarSign} />
                                    <p>79.00</p>
                                </span>
                            </Style.Product_price>
                        </Style.Pic_item_des>
                    </Style.Product_content>
                </Style.Product_Item_Wrap>         
            </Style.flex_row_product>

            <Style.ShopNow_Btn> 
                <button>Shop now</button>
            </Style.ShopNow_Btn>
        </>
    )
}

export default Product_Item