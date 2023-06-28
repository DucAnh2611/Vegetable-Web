
import React, { useEffect, useMemo, useState } from "react"; 
import Product_Item from "./ProductItem/Product_Item";
import { BestSeller_Wrap,
        AllProduct_wrap,
        Filter_category_wrap,
        Filter_category_list} from "./HomeItemBestSeller_Styled";

function BestSellerSection (){

    const [ListItem, SetListItem] = useState([]);
    const [ListType, SetListType] = useState([]);
    const [amount, SetAmount] = useState(10);
    const [type, SetType] = useState(0);
    const [dictionaryType, SetDictionaryType] = useState({
        "drink" : 1,
        "vegetable" : 2,
        "fruit" : 3,
        "nuts" : 4
    })

    const fetchListBestSeller= (amount, type) => {
        fetch(`/home/list-item?amount=${amount}&type=${type}`)
        .then(res => res.json())
        .then(data=> {
            SetListItem(data.field);    
        })
    }
    const fetchListType = () => {
        fetch(`/home/list-type`)
        .then(res => res.json())
        .then(data=> {
            SetListType(data.field); 
        })
    }

    useMemo(()=> {
        fetchListBestSeller(10, type);
    }, [type]);

    useEffect(() => {
        fetchListBestSeller(10, type);
        fetchListType();
    }, []);

    return (
        <BestSeller_Wrap>
            <AllProduct_wrap>
                <h1>Best Seller</h1>
                <Filter_category_wrap>
                    <Filter_category_list>
                        <li onClick={el => {SetType(0)}}>All</li>
                        {
                            ListType.map(e => <li onClick={el => {SetType(dictionaryType[e.type])}}>{e.type.toUpperCase()}</li>)
                        }
                    </Filter_category_list>
                </Filter_category_wrap>
                <Product_Item list={ListItem}></Product_Item>
            </AllProduct_wrap>
        </BestSeller_Wrap>
    )
}

export default BestSellerSection