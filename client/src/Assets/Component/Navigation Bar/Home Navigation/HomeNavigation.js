
import React, { useMemo, useState } from "react";  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as Logo } from "../../../Image/SVG/horizon_logo.svg";
import {NavigationWrapper,
        NavigationLogo,
        NavigationSubtitleWrapper,
        NavigationSubtitleUl,
        NavigationSubtitleLi,
        NavigationIconWrapper,
        NavigationIcon,
        ItemNumber,
        EachIconPart,
        SearchPart} from "./HomeNavigation_Styled";
import WishList from "../../WishlistPane/WishlistPane";
import { useNavigate } from "react-router-dom";
import {debounce} from "lodash";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";

export default function HomeNavigation() {

    const navigation = useNavigate();
    const [openWishListPane, SetOpenWishListPane] = useState(false);
    const [openSearchPane, SetOpenSearchPane] = useState(false);
    const [searchPage, SetSearchPage] = useState(1);
    const [searchKey, SetSearchKey] = useState("");
    const [listSearch, SetListSearch] = useState([]);

    const handleOpenWishListPane = () => {
        SetOpenWishListPane(true);
    };

    const handleOpenSearchPane = () => {
        SetOpenSearchPane(true);
        SetListSearch([]);
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
                if(searchPage!== 1) {
                    SetListSearch(list => [...list, ...data.field]);                    
                }
                else{
                    SetListSearch(data.field);
                }

            }
            else {
                SetListSearch(list => [...list]);
            }
        })
    }, 300);


    useMemo(()=> {
        searchSomeThing();
    }, [searchPage, searchKey]);
    
    return (
        <NavigationWrapper>
            {
                openWishListPane && <WishList setOpenPane={SetOpenWishListPane}/>
            }
            <NavigationLogo>
                <Logo style={{cursor:"pointer"}}></Logo>
            </NavigationLogo>

            <NavigationSubtitleWrapper>
                
                <NavigationSubtitleUl>
                    <NavigationSubtitleLi href="/">Home</NavigationSubtitleLi>
                    <NavigationSubtitleLi href="/shop">Shop</NavigationSubtitleLi>
                    <NavigationSubtitleLi href="/about-us">About us</NavigationSubtitleLi>
                </NavigationSubtitleUl>

            </NavigationSubtitleWrapper>

            <NavigationIconWrapper>

                {
                    openSearchPane 
                    ? (
                        <SearchPart >
                            <input type="text" className={!openSearchPane&& "closed"} placeholder="Search Prroduct" maxLength={30} onChange={e=> SetSearchKey(e.target.value)}/>
                            <button onClick={e => SetOpenSearchPane(false)}><FontAwesomeIcon icon={faSolid.faClose}/></button>   
                            <div onScroll={e => scrollToFetchMore(e)}>
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
                            </div>                         
                        </SearchPart>

                        
                    )
                    :(
                        <EachIconPart>
                            <NavigationIcon onClick={handleOpenSearchPane}><FontAwesomeIcon icon = {faSolid.faMagnifyingGlass}/></NavigationIcon>      
                        </EachIconPart>
                    )
                }
                

                <EachIconPart>
                    <NavigationIcon><FontAwesomeIcon icon = {faRegular.faUser}/></NavigationIcon>
                </EachIconPart>

                <EachIconPart>
                    <NavigationIcon onClick={handleOpenWishListPane}><FontAwesomeIcon icon = {faRegular.faHeart}/></NavigationIcon>
                    <ItemNumber>1</ItemNumber>
                </EachIconPart>

                <EachIconPart>
                    <NavigationIcon onClick={e => navigation("/shop-cart")}><FontAwesomeIcon icon = {faSolid.faCartShopping}/></NavigationIcon>
                    <ItemNumber>0</ItemNumber>
                </EachIconPart>

            </NavigationIconWrapper>

        </NavigationWrapper>
    )
}