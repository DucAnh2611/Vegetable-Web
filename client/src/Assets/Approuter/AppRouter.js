import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";
import HomeNavigation from "../Component/Navigation Bar/Home Navigation/HomeNavigation";
import ProductNavigation from "../Component/Navigation Bar/Product Navigation/ProductNavigation";

export default function AppRouter() {
    const HomeNav = () => {
        return (
            <>
                <HomeNavigation/>
                <Outlet/>
            </>
        )
    }

    const ProductNav = () => {
        return (
            <>  
                <ProductNavigation/>
                <Outlet/>
            </>
        )
    }

    return (

        <Routes>
            <Route element={<HomeNav/>}>
                <Route exact path="/" element={<p>Home</p>}/>
            </Route>
            <Route element={<ProductNav/>}>
                <Route exact path="/shop" element={<p>Shop</p>}/>
                <Route exact path="/shop/product/:productid" element={<p>Product detail</p>}/>
                <Route exact path="/shop-cart" element={<p>Your cart</p>}/>
                <Route exact path="/shop-checkout" element={<p>Checkout</p>}/>
                <Route exact path="/shop-order-tracking/:orderid" element={<p>Order State</p>}/>
            </Route>
            {
                //export xong import page vao element
            }
        </Routes>
    )
}