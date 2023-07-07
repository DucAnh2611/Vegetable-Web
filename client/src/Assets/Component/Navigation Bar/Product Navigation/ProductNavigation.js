
import React, { useMemo, useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/only_logo.svg";
import {ProductNavigationWrapper,
        ProductNavigationLogoWrapper,
        ProductNavigationSearchWrapper,
        PNSearchButtonWrapper,
        PNSearchInputWrapper,
        PNSearchInput,
        ProductNavigationUserAndCartWrapper,
        PNUserAndCartWrapper,
        PNUserAndCartLogoWrapper,
        PNUserAndCartTitle,
        PNCartItemNumber, 
        SearchResPane} from "./ProductNavigation_Styled";
import { debounce } from "lodash";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";

export default function ProductNavigation() {

    const searchRef = useRef(null);
    const [openSearchPane, SetOpenSearchPane] = useState(false);
    const [searchPage, SetSearchPage] = useState(1);
    const [searchKey, SetSearchKey] = useState("");
    const [changeSearchKey, SetChangeSearchKey]= useState(false);
    const [listSearch, SetListSearch] = useState([]);

    const handleOpenSearchPane = () => {
        SetOpenSearchPane(true);
        SetSearchPage(1);
    };

    const scrollToFetchMore = (e) => {
        if(e.target.scrollHeight- e.target.scrollTop === e.target.clientHeight) {
            SetSearchPage(searchPage+1);
        }
    }

    const searchSomeThing = debounce(() => {

        fetch(`/navigation/search?key=${searchKey}&each=${5}&page=${searchPage}`,{method: 'GET'})
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                if(!changeSearchKey) {
                    SetListSearch(list => [...list, ...data.field]);                    
                }
                else{
                    SetListSearch(data.field);
                    SetChangeSearchKey(false);
                }

            }
            else {
                SetListSearch([]);
            }
        })
    }, 500);


    useMemo(()=> {
        searchSomeThing();

        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                SetOpenSearchPane(false);
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
    
        return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        };

    }, [searchPage, searchKey]);

    return (
        <ProductNavigationWrapper>
            
            <ProductNavigationLogoWrapper>

                <a href="/"><Logo/></a>

            </ProductNavigationLogoWrapper>

            <ProductNavigationSearchWrapper>
               
                <PNSearchButtonWrapper>
                    <FontAwesomeIcon icon={faSolid.faMagnifyingGlass}/>
                </PNSearchButtonWrapper>

                <PNSearchInputWrapper>
                    <PNSearchInput type="text" placeholder="Search now..."  maxLength={30} onChange={e=> {
                        SetSearchKey(e.target.value);
                        SetChangeSearchKey(true);
                    }}
                    onFocus={handleOpenSearchPane}
                    />
                </PNSearchInputWrapper>

                {
                    openSearchPane 
                    && (
                        <SearchResPane onScroll={e => scrollToFetchMore(e)} ref={searchRef}> 
                            {
                                listSearch.length !==0
                                ?listSearch.map(e=> (
                                <a href={`/shop/product/${e.id}`}>

                                    <div>
                                        <img src={ConvertToImage(e.image)} alt="search item"/>
                                    </div>

                                    <div>
                                        <p>{e.PdName}</p>
                                        <p><FontAwesomeIcon icon={faSolid.faDollar}/>{e.price} / {e.unit}</p>
                                    </div>

                                </a>) )
                                :<p>Nothing in list</p>
                            }
                        </SearchResPane>
                    )
                }


            </ProductNavigationSearchWrapper>
            
            <ProductNavigationUserAndCartWrapper>

                <PNUserAndCartWrapper href="/my-account">

                    <PNUserAndCartLogoWrapper>
                        <FontAwesomeIcon icon={faRegular.faUser}/>
                    </PNUserAndCartLogoWrapper>

                    <PNUserAndCartTitle>My Account</PNUserAndCartTitle>

                </PNUserAndCartWrapper>

                <PNUserAndCartWrapper href="/shop-cart">

                    <PNUserAndCartLogoWrapper style={{backgroundColor:"var(--Primary_Pink)"}}>
                        <FontAwesomeIcon icon={faSolid.faBasketShopping}/>
                    </PNUserAndCartLogoWrapper>

                    <PNUserAndCartTitle>My Cart</PNUserAndCartTitle>

                </PNUserAndCartWrapper>

            </ProductNavigationUserAndCartWrapper>

        </ProductNavigationWrapper>
    )
}