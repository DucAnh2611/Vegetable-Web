
import React, { useEffect, useRef, useState } from "react";
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
} from "./AddNewProduct_Styled";

export default function AddNewProduct() {

    const listTypeRef = useRef();
    const [newProduct, SetNewProduct] = useState({
        typeid: 0, 
        productname: "", 
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
        productname: /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂẾưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\s]{5,30}$/,
        price: /^[-+]?[0-9]+(\.[0-9]+)?$/,
        quantity: /^[-+]?[0-9]+$/,
        unit: /^[A-Za-z]+$/
    };

    const handleChangeData = (type, data) => {

        SetNewProduct(form => ({...form, [type]: data}));
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
        console.log(newProduct,Object.keys(regEx).map(e => (
            regEx[e].test(newProduct[e])
        )) )
        if( newProduct.typeid !==0 &&
            (newProduct.description.length >=0 && newProduct.description.length <= 150) && 
            newProduct.image !== "" &&
            newProduct.price > 0 &&
            newProduct.quantity > 0
            ) {
            return Object.keys(regEx).map(e => (
                regEx[e].test(newProduct[e])
            )).filter(e => e === false).length !==0            
        }
        else {
            return false;
        }

    }

    const addNewProd = () => {
        if(!verifyInput()) {
            fetch(`/create/product?userid=${JSON.parse(localStorage.getItem("auth")).id}`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify(newProduct),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    window.location.reload();
                }
                else {
                    SetFail(data.field);
                }

            }) ;             
        }
 
    };

    useEffect(() => {
        getAllListTypeItem();
        document.title = 'Vegetable - Add new product';

        const handleClickOutside = (event) => {
            if (listTypeRef.current && !listTypeRef.current.contains(event.target)) {
                SetOpenListType(false);
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
                            src={ newProduct.image === "" ? DefImg : ConvertToImage(newProduct.image)} alt="user preview"/>
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
                        value={newProduct.productname}
                        onChange= {e => handleChangeData("productname", e.target.value)}
                        />
                        <ul>
                            {<li className={newProduct.productname.length >= 5 ? "ok" : "not"}>At least 5 characters</li>}
                            {<li className={newProduct.productname.length <=30 ? "ok" : 'not'}>Maximum 30 characters</li>}
                            {<li className={!new RegExp("[0-9!@#\$%\^\&*\)\(+=._-]", "g").test(newProduct.productname) ? "ok" : 'not'}>Do not contain special characters or number</li>}
                        </ul>
                    </InputText>

                    <InputSelect>

                        <label for="type">Product type</label>
                        <button onClick={() => SetOpenListType(true)}>{newProduct.typeid !== 0 ? listTypePoduct[newProduct.typeid-1].type : "Select type"}</button>
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
                        value={newProduct.price}
                        onChange= {e => handleChangeData("price", e.target.value)}
                        />
                        <ul>
                            {<li className={newProduct.price > 0 ? "ok" : "not"}>Price must greater than 0</li>}
                            {<li className={new RegExp("^[-+]?[0-9]+(\.[0-9]+)?$").test(newProduct.price) ? "ok" : 'not'}>Only contain number</li>}
                        </ul>
                    </InputText>

                    <InputText>
                        <label for="quantity">Quantity</label>
                        <input 
                        id="quantity" 
                        type="text"
                        placeholder="00"
                        value={newProduct.quantity}
                        onChange= {e => handleChangeData("quantity", e.target.value)}
                        />
                        <ul>
                            {<li className={newProduct.quantity > 0 ? "ok" : "not"}>Quantity must greater than 0</li>}
                            {<li className={new RegExp("^[-+]?[0-9]+$").test(newProduct.quantity) ? "ok" : "not"}>Only contain integer number</li>}
                        </ul>
                    </InputText>

                    <InputText>
                        <label for="unit">Product Unit</label>
                        <input 
                        id="unit" 
                        type="text" 
                        placeholder="Unit"
                        value={newProduct.unit}
                        onChange= {e => handleChangeData("unit", e.target.value)}
                        />
                        <ul>
                            {<li className={newProduct.unit.length >= 1 ? "ok" : "not"}>At least 1 characters</li>}
                            {<li className={new RegExp("^[A-Za-z]+$").test(newProduct.unit) ? "ok" : "not"}>Do not contain special character, space, number</li>}
                        </ul>
                    </InputText>

                    <InputTextArea>
                        <label for="description">Description</label>
                        <textarea 
                        id="description" 
                        type="text" 
                        placeholder="Description"
                        value={newProduct.description}
                        onChange= {e => handleChangeData("description", e.target.value)}
                        />
                        <ul>
                            {<li className={newProduct.description.length <= 150  ? "ok" : "not"}>Maximum 150 characters</li>}
                        </ul>
                    </InputTextArea>

                    <InputButton>
                        <button onClick={addNewProd} disabled={verifyInput()}>Add new poduct</button>
                    </InputButton>

                </SectionContent>     

            </SectionPart>

        </PartWrap>
    )
}