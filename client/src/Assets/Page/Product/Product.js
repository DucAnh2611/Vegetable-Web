
import React, { useEffect, useState, useMemo } from "react";
import Product_Item from "../../Component/Home-Item-Bestseller/ProductItem/Product_Item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import Pagenation from "../../Component/Pagenation/Pagenation";
import {
    ProductWrapper,
    ProductListWrap,
    ProductHeadingWrap,
    ProductTitle,
    ProductMenuFilter,
    DoubleRangeSection,
    DoubleRangeWrap,
    ProRangeListPro,
    ProductShowWrap,
    ProductShow,
    ProductShowSearch,
    PagenationPage
} from "./Product_Styled";
import {debounce} from 'lodash';
import LoadingPage from "../../Component/Loading/PageLoading_Dom";

export default function Product({setUpdate}) {

    const [loading, setLoading] = useState(false);
    const [listProduct, SetListProduct] = useState([]);
    const [listType, SetListType] = useState([]);
    const [keySearch, SetKeySearch] = useState("");
    const [page, SetPage] = useState(1);
    const [eachPage, SetEachPage] = useState(10);
    const [type, SetType] = useState(0);
    const [minPrice, SetMinPrice] = useState(0);
    const [maxPrice, SetMaxPrice] = useState(0);
    const [maxPriceFixed, SetMaxPriceFixed] = useState(0);
    const [maxPage, SetMaxPage] = useState(0);

    let fetchListItem = debounce(() => {
        fetch('/product/list', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                key: keySearch,
                page: page,
                eachPage: eachPage,
                type: type,
                minPrice: minPrice,
                maxPrice: maxPrice
            })
        }).then(res => res.json())
            .then(data => {
                if (data.status === "accepted") {
                    SetListProduct(data.field.list);
                    SetMaxPage(data.field.maxPage);
                    SetMaxPriceFixed(data.field.maxPrice);
                    maxPrice === 0 && SetMaxPrice(data.field.maxPrice);
                    setLoading(true);
                }

            })
    }, 500);

    let fetchListType = () => {
        fetch('product/type', { method: "GET" })
            .then(res => res.json())
            .then(data => {
                SetListType(data.field);
            })
    };

    useMemo(() => {
        fetchListItem();
    }, [keySearch, page, eachPage, type, minPrice, maxPrice]);

    useEffect(() => {
        fetchListType();
        fetchListItem();
        document.title = 'Vegetable - Shop';
    }, []);

    const toCapitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
        {
            !loading 
            ? <LoadingPage/> 
            : (
            <ProductWrapper>

                <ProductHeadingWrap>
    
                    <ProductTitle>
                        <h1>Catetory</h1>
                    </ProductTitle>
    
                    {/* Menu lọc product */}
                    <ProductMenuFilter>
                        <button onClick={ev => SetType(0)}>All</button>
                        {
                            listType.map(e => (
                                <button onClick={ev => SetType(e.id)}>{toCapitalize(e.type)}</button>
                            ))
                        }
                    </ProductMenuFilter>
    
                    {/* Khoảng giá - Double range */}
                    <DoubleRangeSection>
                        <ProductTitle style={{
                            width: "100%"
                            }}>
                            <h1>Price</h1>
                        </ProductTitle>
    
                        <DoubleRangeWrap>
                                
                            <div>
                                <input
                                    type="range"
                                    min={0}
                                    max={maxPriceFixed}
                                    defaultValue={minPrice}
                                    step={0.5}
                                    value={minPrice}
                                    onChange={e => {
                                        if(e.target.value >= maxPrice) {
                                            SetMaxPrice(parseFloat(e.target.value));
                                        }
                                        SetMinPrice(parseFloat(e.target.value));
                                        
                                    }} />
                                <input
                                    type="range"
                                    min={0}
                                    max={maxPriceFixed}
                                    defaultValue={maxPrice}
                                    step={0.5}
                                    value={maxPrice}
                                    onChange={e => {
                                        if(e.target.value <= minPrice) {
                                            SetMinPrice(parseFloat(e.target.value));
                                        }
                                        SetMaxPrice(parseFloat(e.target.value));
                                        }} />                            
                            </div>
    
                            <p>Range: {minPrice} - {maxPrice}</p>
                        </DoubleRangeWrap>
                    </DoubleRangeSection>
    
                </ProductHeadingWrap>
    
    
                <ProRangeListPro>
                    <ProductShowWrap>
                        <ProductShow style={{order: "2"}}>
                            <p>Show: </p>
                            <button onClick={e => SetEachPage(4)}>4</button>
                            <button onClick={e => SetEachPage(8)}>8</button>
                            <button onClick={e => SetEachPage(12)}>12</button>
                        </ProductShow>
    
                        <ProductShowSearch style={{order: "1", marginRight: "10px"}}>
                            <input placeholder="Tìm kiếm sản phẩm" type="text" onChange={e => SetKeySearch(e.target.value)} />
                        </ProductShowSearch>
                    </ProductShowWrap>
    
                    <ProductListWrap>
                        {
                            listProduct.length !== 0
                                ? listProduct.map(e => <Product_Item key={e.id} item={e} setUpdate={setUpdate}/>)
                                : <div style={{
                                    margin: "0 auto",
                                    marginBottom: 30
                                }}>
                                    <img
                                        src="https://citroen.navigation.com/static/WFS/Shop-CitroenEMEA-Site/-/Shop-CitroenEMEA/en_GB/Product%20Not%20Found.png"
                                        alt="Not found"
                                        style={{
                                            height: 400,
                                            width: "auto",
                                        }}
                                    ></img>
                                    <p>Data not found</p>
                                </div>
                        }
                    </ProductListWrap>
    
                    <PagenationPage>
                        <Pagenation current={page} max={maxPage} setPage={SetPage} />
                    </PagenationPage>
    
                </ProRangeListPro>
    
            </ProductWrapper>
            )
        }        
        </>

    )
}