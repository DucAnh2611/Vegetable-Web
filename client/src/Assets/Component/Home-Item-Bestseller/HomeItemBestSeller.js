
import React from "react"; 
import Product_Item from "./ProductItem/Product_Item";
import { BestSeller_Wrap,
        AllProduct_wrap,
        Filter_category_wrap,
        Filter_category_list} from "./HomeItemBestSeller_Styled";

function BestSellerSection (){
    return (
        <BestSeller_Wrap>
            <AllProduct_wrap>
                <h1>Best Seller</h1>
                <Filter_category_wrap>
                    <Filter_category_list>
                        <li>All</li>
                        <li>Fruit</li>
                        <li>Meat</li>
                        <li>Nuts</li>
                        <li>Seafood</li>
                        <li>Vegetable</li>
                    </Filter_category_list>
                </Filter_category_wrap>
                <Product_Item></Product_Item>
            </AllProduct_wrap>
        </BestSeller_Wrap>
    )
}

export default BestSellerSection