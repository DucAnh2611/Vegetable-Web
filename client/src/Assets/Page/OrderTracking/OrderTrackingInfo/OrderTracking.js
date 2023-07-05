import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ConvertToImage from "../../../AssistsFunc/ConvertBlobToImage";

export default function OrderTrackingInfo() {
  const { orderid } = useParams();
  const [listProduct, SetListProduct] = useState([]);
  const [orderInfo, SetOrderInfo] = useState({});


  const fetchOrder = () => {
    fetch(
      `/order-tracking?orderid=${orderid}&userid=${
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

  useEffect(() => {
    fetchOrder();
  }, []);

  if(Object.keys(orderInfo).length===0) {
	return (
		<div>
			<p>This order might not belong to you or is not exist</p>
		</div>
	)
  }

  return (
    <div>

      <div>

        <div>
          <h1>Billing Details</h1>
        </div>

        <div>

			<div>

				<div>
					<h1>Client Details</h1>
				</div>

				<div>
					<div>
						<p>Order State</p>
						<p>{orderInfo.state}</p>
					</div>

					<div>
						<p>Order ID</p>
						<p>{orderInfo.id}</p>
					</div>
					<div>
						<p>Order Address</p>
						<p>{orderInfo.OrderAdress}</p>
					</div>

					<div>
						<p>Order Date</p>
						<p>{new Date(orderInfo.OrderDate).toLocaleString()}</p>
					</div>

					<div>
						<p>Order Fullname</p>
						<p>{orderInfo.OrderFullname}</p>
					</div>

					<div>
						<p>Order Email</p>
						<p>{orderInfo.OrderEmail}</p>
					</div>

					<div>
						<p>Order number</p>
						<p>{orderInfo.OrderPhoneNum}</p>
					</div>

					<div>
						<p>Note</p>
						<p>{orderInfo.OrderDescription}</p>
					</div>

					<div>
						<p>Checkout Method</p>
						<p>{orderInfo.type}</p>
					</div>
					<div>
						<p>Card Number</p>
						<p>{orderInfo.description}</p>
					</div>
				</div>

			</div>

			<div>
				<p>Total</p>
				<p>{listProduct.reduce((acc, curr) => (acc += curr.price * curr.quantity), 0)}$</p>
			</div>

        </div>

      </div>

      <div>

		<div>
			<h1>Product</h1>
		</div>

		<div>

			{listProduct.map((e) => (
			<div key={e.id}>

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

				</div>

			</div>
			))}

		</div>

      </div>

    </div>
  );
}
