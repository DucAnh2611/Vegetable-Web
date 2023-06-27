
import React from "react";  
import Home_Slider from "../../Component/HomeEachSlide/HomeEachSlide";
import BestSellerSection from "../../Component/Home-Item-Bestseller/HomeItemBestSeller";

const Home = () =>{
    return(
        <div>
            <Home_Slider/>
            <BestSellerSection/>
        </div>
    )
}

export default Home;