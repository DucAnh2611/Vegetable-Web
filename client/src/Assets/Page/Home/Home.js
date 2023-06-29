
import React from "react";  
import Home_Slider from "../../Component/HomeEachSlide/HomeEachSlide";
import BestSellerSection from "../../Component/Home-Item-Bestseller/HomeItemBestSeller";
import Benefit from "../../Component/HomeEachBenefit/HomeEachBenefit";
import ShopNow from "../../Component/HomeEachShopNow/HomeEachShopNow";
import Review from "../../Component/HomeEachReview/HomeEachReview";
import Footer from "../../Component/Footer/Footer";

const Home = () =>{
    return(
        <div>

            <Home_Slider/>
            <Benefit/>
            <ShopNow/>
            <BestSellerSection/>
            <Review/>

        </div>
    )
}

export default Home;