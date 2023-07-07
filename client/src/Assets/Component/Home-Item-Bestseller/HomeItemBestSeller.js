
import React, { useEffect, useMemo, useState } from "react"; 
import Product_Item from "./ProductItem/Product_Item";
import { SectionTitle } from "../HomeEachBenefit/HomeEachBenefit_Styled";
import { BestSeller_Wrap,
        AllProduct_wrap,
        Filter_category_wrap,
        Filter_category_list} from "./HomeItemBestSeller_Styled";
import {SectionWrapper} from "../HomeEachBenefit/HomeEachBenefit_Styled";
import * as Style from "./ProductItem/Product_Item_Styled";
import { useNavigate } from "react-router-dom";

function BestSellerSection ({setUpdate}){

    const navigate = useNavigate();
    const [ListItem, SetListItem] = useState([]);
    const [ListType, SetListType] = useState([]);
    const [type, SetType] = useState(0);
    const [dictionaryType, SetDictionaryType] = useState({
        "drink" : 1,
        "vegetable" : 2,
        "fruit" : 3,
        "nuts" : 4
    })

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

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

        <AllProduct_wrap>

            <SectionTitle>Best Seller</SectionTitle>
            
            <Filter_category_wrap>

                <Filter_category_list>

                    <li onClick={el => {SetType(0)}}>All</li>
                    {
                        ListType.map(e => <li onClick={el => {SetType(dictionaryType[e.type])}}>{toCapitalize(e.type)}</li>)
                    }

                </Filter_category_list>

            </Filter_category_wrap>

            <Style.flex_row_product>
                {
                    ListItem.length!==0
                    ? ListItem.map(e => (<Product_Item key={e.id} item={e} setUpdate={setUpdate}/>))
                    : <div><p>Nothing too see</p></div>
                }

                <Style.ShopNow_Btn> 
                    <button onClick={e => navigate("/shop")}>Shop now</button>
                </Style.ShopNow_Btn>
            </Style.flex_row_product>

        </AllProduct_wrap>

    )
}

export default BestSellerSection