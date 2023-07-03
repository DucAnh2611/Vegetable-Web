
import React, { useEffect, useState } from "react";
import { SectionTitle } from "../HomeEachBenefit/HomeEachBenefit_Styled";
import ConvertToImage from "../../AssistsFunc/ConvertBlobToImage";
import { 
    EachReview,
    ReviewContent,
    ReviewHeader,
    ReviewPartWrapper,
    ReviewSlider
} from "./HomeReview_Styled";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as faSolid from "@fortawesome/free-solid-svg-icons";
import * as faRegular from "@fortawesome/free-regular-svg-icons";

export default function Review() {

    const [ListReview, SetListReview] = useState([]);

    const fetchListReview = () =>{
        fetch(`/home/list-review?amount=10`)
        .then(res => res.json())
        .then(data => {
            if(data.status ==="accepted") {
                SetListReview(data.field);
            }
            else {
                SetListReview([]);
            }
        })
    }

    useEffect(()=>{
        fetchListReview();
    }, []);

    return (

        <ReviewPartWrapper>

            <ReviewHeader>

                <SectionTitle>Review</SectionTitle>
                <p>Customer reviews about food!</p>

            </ReviewHeader>

            <ReviewContent>

                <ReviewSlider>

                    {
                        ListReview.length !==0
                        ?  ListReview.map(e => (
                            <EachReview>

                                <div>
                                    <img alt="user" src={ConvertToImage(e.user_avatar)}></img>
                                </div>

                                <div>

                                    <div>
                                        <img alt="product" src={ConvertToImage(e.product_image)}></img>
                                    </div>

                                    <div>

                                        <div style={{height: "20%"}}>
                                            <p style={{fontSize: "1.5vh"}}><b>{e.username}</b></p>
                                            <p style={{fontSize: "1.2vh"}}>{e.fullname}</p>
                                        </div>

                                        <div style={{height: "10%"}}>
                                            <p style={{fontSize: "2vh"}}><b>{e.PdName}</b></p>
                                        </div>

                                        <div style={{height: "10%"}}>
                                        {
                                            new Array(5).fill('').map((_, idx) => (
                                                idx +1 <= e.rating
                                                ? <FontAwesomeIcon icon={faSolid.faStar}/>
                                                : e.rating - idx >= 0.5 
                                                    ? <FontAwesomeIcon icon={faRegular.faStarHalfAlt}/>
                                                    : <FontAwesomeIcon icon={faRegular.faStar}/>
                                            ))
                                        }

                                        </div>

                                        <div style={{height: "60%"}}>
                                            <p><b>{e.title}</b></p>
                                            <p>{e.description}</p>
                                        </div>
                                            
                                    </div>

                                </div>

                            </EachReview>
                            ))
                        : <p>Nothing in Review</p>
                    }


                    
                </ReviewSlider>

            </ReviewContent>

        </ReviewPartWrapper>

    )
}