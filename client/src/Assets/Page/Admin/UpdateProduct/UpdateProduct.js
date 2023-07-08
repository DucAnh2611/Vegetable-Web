
import React, { useEffect, useMemo, useRef, useState } from "react";
import { 
    InputButton, 
    InputImage, 
    InputText, 
    PartWrap, 
    SectionContent, 
    SectionHeader, 
    SectionPart 
} from "../../Profile/Account/Account_Styled";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";
import ConvertImageToBuffer from "../../../AssistsFunc/ConvertImageToBuffer";
import { InputTextArea } from "../../CheckOut/CheckOut_Styled";
import { ListTypeWarp } from "../../Profile/CheckoutMethod/CheckoutMethod_Styled";
import DefImg from "../../../Image/SVG/Default-goods.png";
import { 
    InputSelect, 
    Notification 
} from "../AddNewProduct/AddNewProduct_Styled";
import { debounce } from "lodash";
import { PNSearchInput, PNSearchInputWrapper, SearchResPane } from "../../../Component/Navigation Bar/Product Navigation/ProductNavigation_Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as faSolid from "@fortawesome/free-solid-svg-icons";

export default function UpdateProduct() {

    const listTypeRef = useRef();
    const searchRef = useRef(null);
    const [changeProduct, SetChangeProduct] = useState({
        id: 0,
        typeid: 0, 
        PdName: "", 
        price: 0, 
        image: "", 
        unit: "", 
        description: "", 
        quantity: 0, 
    });
    const [listTypePoduct, SetListTypeProduct] = useState([]);
    const [openListType, SetOpenListType] = useState(false);
    const [fail, SetFail] = useState({});
    const regEx = {
        PdName: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{5,30}$/,
        price: /^[-+]?[0-9]+(\.[0-9]+)?$/,
        quantity: /^[-+]?[0-9]+$/,
        unit: /^[A-Za-z]+$/
    };
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


    const handleChangeData = (type, data) => {

        SetChangeProduct(form => ({...form, [type]: data}));
    };

    const getAllListTypeItem = () =>{
        fetch("/product/type")
        .then(res => res.json())
        .then(data => {
            if(data.status === "accepted") {
                SetListTypeProduct(data.field);
            }
        })
    };

    const verifyInput = () => {
        if(Object.keys(regEx).map(e => (regEx[e].test(changeProduct[e]))).filter(e => e === false).length ===0 ){
            if( changeProduct.typeid !==0 &&
                (changeProduct.description.length >=0 && changeProduct.description.length <= 250) && 
                changeProduct.image !== "" &&
                changeProduct.price > 0 &&
                changeProduct.quantity > 0
                ) {
                    return true
            }    
            else {
                return false
            }        
        }

        else {
            return false;
        }

    }

    const changeProductClick = () => {
        if(verifyInput()) {
            fetch(`/change/product`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...changeProduct,
                    userid: JSON.parse(localStorage.getItem("auth")).id
                }),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    window.location.reload();
                }
            }) ;             
        }
 
    };

    useMemo(()=> {
        searchSomeThing();
    }, [searchPage, searchKey]);

    useEffect(() => {
        getAllListTypeItem();
        document.title = 'Vegetable - Add new product';

        const handleClickOutside = (event) => {
            if (listTypeRef.current && !listTypeRef.current.contains(event.target)) {
                SetOpenListType(false);
            }
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                SetOpenSearchPane(false);
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return(
        <PartWrap>

            <SectionPart>

                <SectionHeader>
                    <h1>Search Product</h1>
                </SectionHeader>

                <SectionContent style={{position: "relative", padding:"15px 0", zIndex: "1"}}>

                    <PNSearchInputWrapper style={{border: "1px solid var(--Primary_Green)", borderRadius: "50px", height: "fit-content"}}>
                        <PNSearchInput type="text" placeholder="Search now..."  maxLength={30} onChange={e=> {
                            SetSearchKey(e.target.value);
                            SetChangeSearchKey(true);
                        }}
                        onFocus={handleOpenSearchPane}
                        style={{
                            boxSizing: "border-box",
                            padding: "0 20px",
                            height: "50px"
                        }}
                        />
                    </PNSearchInputWrapper>

                    {
                        openSearchPane
                        && (
                            <SearchResPane onScroll={e => scrollToFetchMore(e)} ref={searchRef} style={{width: "50%", left: "0", boxShadow: "0 0 50px var(--Primary_Green)"}}> 
                                {
                                    listSearch.length !==0
                                    ? listSearch.map(e=> (
                                    <div 
                                    key={e.id}
                                    onClick={ev => {SetChangeProduct(e); SetOpenSearchPane(false)}}>

                                        <div>
                                            <img src={ConvertToImage(e.image)} alt="search item"/>
                                        </div>

                                        <div>
                                            <p>{e.PdName}</p>
                                            <p><FontAwesomeIcon icon={faSolid.faDollar}/>{e.price} / {e.unit}</p>
                                        </div>

                                    </div>) )
                                    :<p>Nothing in list</p>
                                }
                            </SearchResPane>
                        )
                    }

                </SectionContent>   

            </SectionPart>

            {
                changeProduct.id !== 0 
                && (
                <SectionPart>

                    <SectionHeader>
                        <h1>Product Details</h1>
                    </SectionHeader>

                    <SectionContent>

                        {Object.keys(fail).length !== 0 && (
                            <Notification>
                                <p>Product name already exist in stock</p>
                            </Notification>
                        )}

                        <InputImage style={{height: "fit-content", padding:"20px 0"}}>

                            <div style={{height: "150px", width: "150px", borderRadius: "0"}}>
                                <img 
                                src={ changeProduct.image === "" ? DefImg : ConvertToImage(changeProduct.image)} alt="user preview"/>
                            </div>

                            <div>
                                <label for="selectimg">Change picture</label>
                                <input 
                                id="selectimg"
                                type="file" 
                                accept=".jpg, .jpeg, .png" 
                                onInput={e => ConvertImageToBuffer(e.target.files[0]).then(buf => {
                                    handleChangeData("image", {
                                        type: "Buffer", 
                                        data: Array.from(new Uint8Array(buf))
                                    }) ;

                                } )}/>
                            </div>

                        </InputImage>

                        <InputText>
                            <label for="name">Product Name</label>
                            <input 
                            id="name" 
                            type="text" 
                            placeholder="Product name"
                            value={changeProduct.PdName}
                            onChange= {e => handleChangeData("PdName", e.target.value)}
                            />
                            <ul>
                                {<li className={changeProduct.PdName.length >= 5 ? "ok" : "not"}>At least 5 characters</li>}
                                {<li className={changeProduct.PdName.length <=30 ? "ok" : 'not'}>Maximum 30 characters</li>}
                                {<li className={!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(changeProduct.PdName) ? "ok" : 'not'}>Do not contain special characters or number</li>}
                            </ul>
                        </InputText>

                        <InputSelect>

                            <label for="type">Product type</label>
                            <button onClick={() => SetOpenListType(true)}>{changeProduct.typeid !== 0 ? listTypePoduct[changeProduct.typeid-1].type : "Select type"}</button>
                            {
                                openListType && 
                                (
                                    <ListTypeWarp ref={listTypeRef}>
                                        {
                                            listTypePoduct.map(e => (
                                                <div key={e.id} onClick={ ev => {handleChangeData("typeid", e.id); SetOpenListType(false)}}>
                                                    <p>{e.type}</p>
                                                </div>
                                            ))
                                        }   
                                    </ListTypeWarp>                                
                                )
                            }


                        </InputSelect>
                        
                        <InputText>
                            <label for="price">Price</label>
                            <input 
                            id="price" 
                            type="text" 
                            placeholder="0.0"
                            value={changeProduct.price}
                            onChange= {e => handleChangeData("price", e.target.value)}
                            />
                            <ul>
                                {<li className={changeProduct.price > 0 ? "ok" : "not"}>Price must greater than 0</li>}
                                {<li className={new RegExp("^[-+]?[0-9]+(\.[0-9]+)?$").test(changeProduct.price) ? "ok" : 'not'}>Only contain number</li>}
                            </ul>
                        </InputText>

                        <InputText>
                            <label for="quantity">Quantity</label>
                            <input 
                            id="quantity" 
                            type="text"
                            placeholder="00"
                            value={changeProduct.quantity}
                            onChange= {e => handleChangeData("quantity", e.target.value)}
                            />
                            <ul>
                                {<li className={changeProduct.quantity > 0 ? "ok" : "not"}>Quantity must greater than 0</li>}
                                {<li className={new RegExp("^[-+]?[0-9]+$").test(changeProduct.quantity) ? "ok" : "not"}>Only contain integer number</li>}
                            </ul>
                        </InputText>

                        <InputText>
                            <label for="unit">Product Unit</label>
                            <input 
                            id="unit" 
                            type="text" 
                            placeholder="Unit"
                            value={changeProduct.unit}
                            onChange= {e => handleChangeData("unit", e.target.value)}
                            />
                            <ul>
                                {<li className={changeProduct.unit.length >= 1 ? "ok" : "not"}>At least 1 characters</li>}
                                {<li className={new RegExp("^[A-Za-z]+$").test(changeProduct.unit) ? "ok" : "not"}>Do not contain special character, space, number</li>}
                            </ul>
                        </InputText>

                        <InputTextArea>
                            <label for="description">Description</label>
                            <textarea 
                            id="description" 
                            type="text" 
                            placeholder="Description"
                            value={changeProduct.description}
                            onChange= {e => handleChangeData("description", e.target.value)}
                            />
                            <ul>
                                {<li className={changeProduct.description.length <= 250  ? "ok" : "not"}>Maximum 250 characters</li>}
                            </ul>
                        </InputTextArea>

                        <InputButton>
                            <button onClick={changeProductClick} disabled={!verifyInput()}>Update product</button>
                        </InputButton>

                    </SectionContent>     

                </SectionPart>                    
                )
            }



        </PartWrap>
    )
}