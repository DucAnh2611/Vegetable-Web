import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import * as faBrand from "@fortawesome/free-brands-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";
import { InputText } from "../../Profile/Account/Account_Styled";
import { InputTextArea } from "../../CheckOut/CheckOut_Styled";
import { 
	AddReViewContent,
	AddReviewHeader,
	AddReviewMain,
	AddReviewWrap,
	BillingContent,
	BillingDetailsWrap,
	CurrentState,
	EachProduct,
	EachState,
	InputBtn,
	InputStar,
	OrderTrackingMain,
	OrderTrackingWrap,
	ProductListContent,
	ProductListHeader,
	ProductListWrap
} from "./OrderTracking_Styled";

export default function OrderTrackingInfo() {

	const { orderid } = useParams();
	const reviewRef = useRef();
	const [openReview, SetOpenReview] = useState(false);
	const [listProduct, SetListProduct] = useState([]);
	const [orderInfo, SetOrderInfo] = useState({});
	const [listState, SetListState] = useState([]);
	const iconDict = {
        "visa": faBrand.faCcVisa,
        "master card": faBrand.faCcMastercard,
        "paypal" : faBrand.faPaypal,
        "cash": fa.faMoneyBill
    };
	const [reviewForm, SetListReviewForm] = useState({
		orderid: 0,
		productid: 0,
		rating: 0,
		title: "",
		description: ""
	});

	const handleOpenReview = (productid) =>{
		SetListReviewForm(form => ({
			orderid: orderid,
			productid: productid,
			rating: 0,
			title: "",
			description: ""
		}));
		SetOpenReview(true);
	};

	const handleChangeData = (type, data) => {
		SetListReviewForm(form => ({
			...form,	
			[type]: data
		}));
	}

	const fetchOrder = () => {
		fetch(
		`/order-tracking/${orderid}?userid=${
			JSON.parse(localStorage.getItem("auth")).id
		}`
		)
		.then((res) => res.json())
		.then((data) => {
			if (data.status === "accepted") {
			SetOrderInfo(data.field.OrderState);
			SetListProduct(data.field.OrderProduct);
			} else {
			SetOrderInfo({});
			SetListProduct([]);
			}
		});
	};

	const fetchAllState = () => {
		fetch("/order-tracking/view/state")
		.then(res => res.json())
		.then(data => {
			if(data.status === "accepted") {
				SetListState(data.field);
			}
		})
	};

	const addReview = () => {
		if(reviewForm.title.length >=10 && reviewForm.productid !==0 && reviewForm.orderid !== 0 && reviewForm.rating !==0) {
           fetch(`/order-tracking/review/add`, {
                method: "POST",
                headers: {
                "Content-Type": "application/json",
                },
                body: JSON.stringify({
					userid: JSON.parse(localStorage.getItem("auth")).id,
					...reviewForm
				}),
            })
            .then((res) => res.json())
            .then((data) => {
                if(data.status === "accepted") {
                    window.location.reload();
                }
            }) ;  			
		}
           
	}

	useEffect(() => {
		fetchOrder();
		fetchAllState();
		document.title = `Vegetable - Order Tracking - ${orderid}`;

		const handleClickOutside = (event) => {
            if(reviewRef.current && !reviewRef.current.contains(event.target)) {
                SetOpenReview(false);
            }
        };
      
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
	}, []);

	if(Object.keys(orderInfo).length===0) {
		return (
			<div>
				<p>This order might not belong to you or is not exist</p>
			</div>
		)
	}

	return (

	<OrderTrackingWrap>

		<CurrentState>
			{
				listState.map(e => (
					<EachState className={orderInfo.StateId === e.id ? "ok" : "not"}>
						<p>{e.id}</p>
						<p>{e.state}</p>
					</EachState>
				))
			}
			<span className="base"></span>
			<span className="real" style={{width: `${(parseInt(orderInfo.StateId)/listState.length)*100 -10}%`}}></span>
		</CurrentState>

		<OrderTrackingMain>

			<ProductListWrap>

				<ProductListHeader>
					<h1>Product</h1>
					<h1>Total: {listProduct.reduce((acc, cur) => acc += cur.quantity * cur.price, 0)}$</h1>
				</ProductListHeader>

				<ProductListContent>

					{listProduct.map((e) => (
					<EachProduct key={e.id}>

						<div>
							<img src={ConvertToImage(e.image)} alt="order tracking item" />
						</div>

						<div>

							<div>
								<p>{e.PdName}</p>
								<p>
								{e.price} / {e.unit}
								</p>
							</div>

							<div>
								<p>QTY: {e.quantity}</p>
							</div>
							{e.reviews === 0 && orderInfo.StateId  === listState.length -1  &&(
								<div>

									<button onClick={ev => handleOpenReview(e.id)}>Review</button>

								</div>								
							)}


						</div>

					</EachProduct>
					))}

				</ProductListContent>

			</ProductListWrap>	

			<BillingDetailsWrap>
			
				<ProductListHeader>
					<h1>Billing Details</h1>
				</ProductListHeader>

				<BillingContent	>

					<div>
						<p>OrderID: </p>
						<p>{orderInfo.OrderId}</p>
					</div>

					<div>
						<p>Fullname: </p>
						<p>{orderInfo.OrderFullname}</p>
					</div>

					
					<div>
						<p>Address: </p>
						<p>{orderInfo.OrderAdress}</p>
					</div>

					
					<div>
						<p>Phone number: </p>
						<p>{orderInfo.OrderPhoneNum}</p>
					</div>

					
					<div>
						<p>Email: </p>
						<p>{orderInfo.OrderEmail}</p>
					</div>

					
					<div>
						<p>Notes: </p>
						<p>{orderInfo.OrderDescription}</p>
					</div>

					
					<div>
						<p>Method: </p>
						<p style={{textTransform: "capitalize"}}><FontAwesomeIcon icon={iconDict[orderInfo.type]}/>{orderInfo.type}</p>
						<p>{orderInfo.description}</p>
					</div>

				</BillingContent>

			</BillingDetailsWrap>	

		</OrderTrackingMain>

		{openReview &&
		(
		<AddReviewWrap>
			<AddReviewMain ref={reviewRef}>

				<AddReviewHeader>
					<p>Add review</p>
				</AddReviewHeader>

				<AddReViewContent>

					<InputStar>
						{
							new Array(5).fill('').map((e, idx) => (
								<button
								onClick={e => handleChangeData("rating", idx+1)}><FontAwesomeIcon icon={ idx+1 <= reviewForm.rating 
									? fa.faStar 
									: faRegular.faStar
								}/></button>
							))
						}

					</InputStar>

					<InputText>
						<label for="title">Title</label>
						<input 
						id="title" 
						type="text" 
						placeholder="Title"
						min={10} 
						value={reviewForm.title}
						onChange= {e => handleChangeData("title", e.target.value)}
						/>
						<ul>
							{<li className={reviewForm.title.length >= 10 ? "ok" : "not"}>At least 10 characters</li>}
							{<li className={reviewForm.title.length <=30 ? "ok" : 'not'}>Maximum 30 characters</li>}
						</ul>
					</InputText>

					<InputTextArea>
						<label for="description">Description</label>
						<textarea 
						id="description"
						placeholder="Note something about your order"
						min={0} 
						value={reviewForm.description}
						onChange= {e => handleChangeData("description", e.target.value)}
						/>
						<ul>
							{<li className={reviewForm.description.length <=150 ?"ok": "not"}>Maximum 150 characters</li>}
						</ul>
					</InputTextArea>
				</AddReViewContent>

				<InputBtn>
					<button 
					onClick={addReview}
					disabled={!(reviewForm.title.length >=10 && reviewForm.productid !==0 && reviewForm.orderid !== 0 && reviewForm.rating !==0)}
					>Add review</button>
				</InputBtn>

			</AddReviewMain>				
		</AddReviewWrap>
		)}

	</OrderTrackingWrap>

  );
}
