import React, { useEffect, useState } from "react";
import {Routes, 
        Route, 
        Outlet} from "react-router-dom";
import HomeNavigation from "../Component/Navigation Bar/Home Navigation/HomeNavigation";
import Home from "../Page/Home/Home";
import ProductNavigation from "../Component/Navigation Bar/Product Navigation/ProductNavigation";
import AboutUs from "../Page/AboutUs/AboutUs";
import Footer from "../Component/Footer/Footer";
import Product from "../Page/Product/Product";
import ProductDetail from "../Page/Product_Details/ProductDetails";
import Login from "../Component/Login/Login";
import Signup from "../Component/Signup/Signup";
import Cart from "../Page/Cart/Cart";
import Checkout from "../Page/CheckOut/CheckOut";

export default function AppRouter() {

    const PrivateRoute = () => {

        if(localStorage.getItem("auth")) {
            return (
                <Outlet/>
            )
        }
        else {
            return(
                <Login/>
            )
        }

    }

    const HomeNav = () => {
        return (
            <>
                <HomeNavigation />
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
    
    const HaveFooter = () => {
        return (
            <>  
                <Outlet/>
                <Footer/>
            </>
        )
    }

    return (
        <>
            <Routes>

                <Route element={<PrivateRoute/>}>

                    <Route element={<HaveFooter/>}>

                        <Route element={<HomeNav/>}>
                            <Route exact path="/" element={<Home></Home>}/>
                        </Route> 
                        
                        <Route element={<ProductNav/>}>
                            <Route exact path="/about-us" element={<AboutUs/>}/>
                            <Route exact path="/shop" element={<Product/>}/>
                            <Route exact path="/shop/product/:productid" element={<ProductDetail/>}/>
                            <Route exact path="/shop-cart" element={<Cart/>}/>
                            <Route exact path="/shop-checkout" element={<Checkout/>}/>
                            <Route exact path="/shop-order-tracking" element={<p>Order State</p>}/>
                        </Route>

                    </Route>

                </Route>

                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<Signup/>}></Route>
                
            </Routes>     
        </>


    )
}