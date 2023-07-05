
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
    PagenationPage} from "./Product_Styled";

export default function Product() {

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

    let fetchListItem = () => {
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
                }
                else {
                    SetListProduct([]);
                    SetMaxPage(1);
                    SetMaxPriceFixed(0);
                }

            })
    };

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
                    <ProductTitle>
                        <h1>Price</h1>
                    </ProductTitle>

                    <DoubleRangeWrap>
                        <div>
                            <input
                                type="range"
                                min={0}
                                max={maxPriceFixed}
                                defaultValue={minPrice}
                                step={0.05}
                                value={minPrice}
                                onChange={e => SetMinPrice(parseFloat(e.target.value))} />
                            <input
                                type="range"
                                min={0}
                                max={maxPriceFixed}
                                defaultValue={maxPriceFixed}
                                step={0.05}
                                value={maxPrice === 0 ? maxPriceFixed : maxPrice}
                                onChange={e => SetMaxPrice(parseFloat(e.target.value))} />
                            <p>Range: {minPrice} - {maxPrice === 0 ? maxPriceFixed : maxPrice}</p>
                        </div>
                    </DoubleRangeWrap>
                </DoubleRangeSection>

            </ProductHeadingWrap>


            <ProRangeListPro>
                <ProductShowWrap>
                    <ProductShow>
                        <p>Show: </p>
                        <button onClick={e => SetEachPage(5)}>5</button>
                        <button onClick={e => SetEachPage(7)}>7</button>
                        <button onClick={e => SetEachPage(10)}>10</button>
                    </ProductShow>

                    <ProductShowSearch>
                        <input placeholder="Tìm kiếm sản phẩm" type="text" onChange={e => SetKeySearch(e.target.value)} />
                    </ProductShowSearch>
                </ProductShowWrap>

                <ProductListWrap>
                    {
                        listProduct.length !== 0
                            ? listProduct.map(e => <Product_Item item={e} />)
                            : <div><p>Nothing too see</p></div>
                    }
                </ProductListWrap>

                <PagenationPage>
                    <Pagenation current={page} max={maxPage} setPage={SetPage} />
                </PagenationPage>
                
            </ProRangeListPro>

        </ProductWrapper>
    )
}