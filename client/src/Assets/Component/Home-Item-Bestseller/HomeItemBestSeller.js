/* eslint-disable react/jsx-pascal-case */
import React from "react"; 
import Product_Item from "./ProductItem/Product_Item";
import { BestSeller_Wrap, 
    AllProduct_wrap,
    Filter_category } from "./HomeItemBestSeller_Styled";

function BestSellerSection (){
    return (
        <BestSeller_Wrap>
            <AllProduct_wrap>
                <h1>BestSeller</h1>
                <Filter_category>
                    <ul>
                        <li>All</li>
                        <li>Fruit</li>
                        <li>Meat</li>
                        <li>Nuts</li>
                        <li>Seafood</li>
                        <li>Vegetable</li>
                    </ul>
                </Filter_category>
                <Product_Item></Product_Item>
            </AllProduct_wrap>
        </BestSeller_Wrap>
    )
}

export default BestSellerSection