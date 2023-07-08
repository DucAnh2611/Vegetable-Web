import React, { useEffect, useMemo, useState } from "react";
import {Routes, 
        Route, 
        Outlet,
        useNavigate,
        json,
} from "react-router-dom";
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
import OrderTrackingDefault from "../Page/OrderTracking/OrderTrackingDefault/OrderTracking_Default";
import OrderTrackingInfo from "../Page/OrderTracking/OrderTrackingInfo/OrderTracking";
import Account from "../Page/Profile/Account/Account";
import Orders from "../Page/Profile/Orders/Orders";
import CheckoutMethod from "../Page/Profile/CheckoutMethod/CheckoutMethod";
import { 
    CartGroupWrap, ProfileGroupWrap, ProfileNav
} from "./Approuter_Styled";
import ChangeStateOrder from "../Page/Admin/ChangeStateOrder/ChangeStateOrder";
import AddNewProduct from "../Page/Admin/AddNewProduct/AddNewProduct";
import LoadingPage from "../Component/Loading/PageLoading_Dom";
import NotFound from "../Component/NotFound/NotFound";
import UpdateProduct from "../Page/Admin/UpdateProduct/UpdateProduct";

export default function AppRouter() {

    const navigate = useNavigate();
    const [userType, SetUserType] = useState(0);
    const [wishlistQuan, SetWislistQuan] = useState(0);
    const [cartQuan, SetCartQuan] = useState(0);
    const [update, SetUpdate] = useState(false);

    const getQuantityInCart = () =>{
        if(localStorage.getItem("auth")) {
            fetch(`/navigation/cart?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
            .then(res => res.json())
            .then(data => {
                if(data.status === "accepted") {
                    SetCartQuan(data.field.length);
                }
                else SetCartQuan(0);
            })            
        }

    };

    const getQuantityInWishlist = () =>{
        if(localStorage.getItem("auth")) {
            fetch(`/navigation/wish-list?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
            .then(res => res.json())
            .then(data => {
                if(data.status === "accepted") {
                    SetWislistQuan(data.field.length);
                }
                else SetWislistQuan(0);
            })            
        }

    };

    const PrivateRoute = () => {

        if(localStorage.getItem("auth")  && JSON.parse(localStorage.getItem("auth")).id ) {
            return (
                <Outlet/>
            )
        }
        else {
            return(
                <Login/>
            )
        }

    };

    const HomeNav = () => {
        return (
            <>
                <HomeNavigation cartQuan={cartQuan} wishlistQuan={wishlistQuan} setUpdate={SetUpdate}/>
                <Outlet/>
            </>
        )
    };

    const ProductNav = () => {
        return (
            <>  
                <ProductNavigation cartQuan={cartQuan}/>
                <Outlet/>
            </>
        )
    };
    
    const HaveFooter = () => {
        return (
            <>  
                <Outlet/>
                <Footer/>
            </>
        )
    };

    const CartGroup = () => {
        return (
            <>
                <CartGroupWrap>
                    <a href="/shop-cart">Cart</a>
                    <a href="/shop-checkout">Checkout</a>
                    <a href="/shop-order-tracking">Order tracking</a>
                </CartGroupWrap>
                <Outlet/>
            </>
        )
    };

    const ProfileGroup = () => {

        const logout = () =>{
            localStorage.removeItem("auth");
            navigate("/");
        }

        return (
            <ProfileGroupWrap>

                <ProfileNav>
                    <button onClick={e=> navigate("/my-account")}>Account details</button>
                    <button onClick={ e=> navigate("/my-account/orders")}>Order</button>
                    <button onClick={ e=> navigate("/my-account/method")} >Checkout Method</button>
                    {userType === 1 && (<>
                        <button onClick={e=> navigate("/admin/order/state-change")}>Orders Management</button>
                        <button onClick={ e=> navigate("/admin/product/new")}>Add Product</button>
                        <button onClick={ e=> navigate("/admin/product/update")}>Update Product</button>
                    </>)
                    }
                    <button onClick={logout}>Logout</button>
                </ProfileNav>
                <Outlet/>

            </ProfileGroupWrap>
        )
    };

    const AdminRoute = () => {
        if(userType === 1) {
            return(
                <>
                    <Outlet/>
                </>
            )            
        }
        return(
            <></>
        )

    }

    const getUserType = () => {

        if(localStorage.getItem("auth")) {
        fetch(`/show/user/type?userid=${JSON.parse(localStorage.getItem("auth")).id}`)
        .then(res => res.json())
        .then(data => {
            SetUserType(data.field)
        });
        }
    };

    useEffect(() =>{
        getQuantityInCart();
        getQuantityInWishlist();
    }, [update])

    useEffect(() =>{
        getUserType();
        getQuantityInCart();
        getQuantityInWishlist();
    }, [])

    return (
        <>
            <Routes>

                <Route element={<PrivateRoute/>}>

                    <Route element={<HaveFooter/>}>

                        <Route element={<HomeNav/>}>
                            <Route exact path="/" element={<Home setUpdate={SetUpdate}/>}/>
                        </Route> 
                        
                        <Route element={<ProductNav/>}>

                            <Route exact path="/about-us" element={<AboutUs/>}/>
                            <Route exact path="/shop" element={<Product setUpdate={SetUpdate}/>}/>
                            <Route exact path="/shop/product/:productid" element={<ProductDetail setUpdate={SetUpdate}/>}/>

                            <Route element={<CartGroup/>}>
                                <Route exact path="/shop-cart" element={<Cart setUpdate={SetUpdate}/>}/>
                                <Route exact path="/shop-checkout" element={<Checkout/>}/>
                                <Route exact path="/shop-order-tracking" element={<OrderTrackingDefault/>}/>
                                <Route exact path="/shop-order-tracking/:orderid" element={<OrderTrackingInfo/>}/>
                            </Route>

                            <Route element={<ProfileGroup/>}>
                                <Route element={<AdminRoute/>}>
                                        
                                    <Route exact path="/admin/order/state-change" element={<ChangeStateOrder/>}/>
                                    <Route exact path="/admin/product/new" element={<AddNewProduct/>}/>
                                    <Route exact path="/admin/product/update" element={<UpdateProduct/>}/>

                                </Route>
                                <Route exact path="/my-account" element={<Account/>}/>
                                <Route exact path="/my-account/orders" element={<Orders/>}/>
                                <Route exact path="/my-account/method" element={<CheckoutMethod/>}/>
                            </Route>

                        </Route>

                    </Route>

                </Route>

                <Route exact path="/login" element={<Login/>}></Route>
                <Route exact path="/signup" element={<Signup/>}></Route>

                <Route exact path="/loading" element={<LoadingPage/>}/>

                <Route exact path="/*" element={<NotFound/>}/>
                
            </Routes>     
        </>


    )
}