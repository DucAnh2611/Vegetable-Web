
import React, { useEffect } from "react";  
import Home_Slider from "../../Component/HomeEachSlide/HomeEachSlide";
import BestSellerSection from "../../Component/Home-Item-Bestseller/HomeItemBestSeller";
import Benefit from "../../Component/HomeEachBenefit/HomeEachBenefit";
import ShopNow from "../../Component/HomeEachShopNow/HomeEachShopNow";
import Review from "../../Component/HomeEachReview/HomeEachReview";

const Home = () =>{

    useEffect(() => {
        document.title = "Vegetable - Home";
    }, []);

    return(
        <div style={{display: "flex", flexDirection: "column", gap: "100px"}}>

            <Home_Slider/>
            <Benefit/>
            <ShopNow/>
            <BestSellerSection/>
            <Review/>

        </div>
    )
}

export default Home;