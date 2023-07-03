
import React, { useEffect, useState } from "react";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa1 from "@fortawesome/free-brands-svg-icons";
import * as fa2 from "@fortawesome/free-solid-svg-icons";
import { 
    AboutUsDataBase,
    AboutUsIntroduce,
    AboutUsOurTeam,
    AboutUsTechnology,
    AboutUsWrapper,
    EachMember,
    EachTech
} from "./AbouUs_Styled";
import dbImg from "../../Image/AboutUs/databse.jpg";


export default function AboutUs() {

    const [listMember, SetListMember] = useState([]);

    const fetchListMember = () => {
        fetch("/aboutus/all", {method:"GET"})
        .then(res => res.json())
        .then(data => {
            SetListMember(data.field);
        })
    }

    useEffect(()=> {
        fetchListMember();
    }, []);

    return (

        <AboutUsWrapper>

            <AboutUsIntroduce>

                <div>

                    <div><img src="https://media.istockphoto.com/id/1203599963/photo/food-background-with-assortment-of-fresh-organic-fruits-and-vegetables.jpg?s=612x612&w=0&k=20&c=JKjEfvVa0ZieiyDbvhbUaCRgZ0MQJcx7cf35k-vRftY="/></div>
                    <div><img src="https://livingonthecheap.com/lotc-cms/wp-content/uploads/2016/07/How-to-keep-summer-veggies-fresh-to-avoid-food-waste.jpg"/></div>

                </div>

                <div>

                    <h1>VEGETABLE WEBSITE</h1>
                    <p>With any fruit and vegetable on the market, consumers need to pay attention to the origin, how to identify safe food to ensure the health of their.</p>
                    <button>Shop Now</button>
                                    
                </div>

            </AboutUsIntroduce>

            <AboutUsTechnology>
                
                <div>

                    <h1>Technology</h1>

                </div>

                <div>

                    <EachTech> 

                        <div>
                            
                            <FontAwesomeIcon icon={fa1.faNode}/>
                            
                        </div>

                        <div>

                            <h3>Nodejs</h3>

                            <p>Use express to initialize data processing endpoints on the backend</p>

                            <a href="https://nodejs.org/en/docs" target="_blank">Read more</a>

                        </div>

                    </EachTech>

                    <EachTech> 

                        <div>
                            <FontAwesomeIcon icon={fa2.faDatabase}/>
                        </div>

                        <div>

                            <h3>Sqlite</h3>

                            <p>Store, query data about order information, goods, customers.</p>

                            <a href="https://www.sqlite.org/docs.html" target="_blank">Read more</a>

                        </div>

                    </EachTech>  

                    <EachTech> 

                        <div>
                            <FontAwesomeIcon icon={fa1.faGithub}/>
                        </div>

                        <div>

                            <h3>Github</h3>

                            <p>Service for oftware development and version control using Git.</p>

                            <a href="https://github.com/about" target="_blank">Read more</a>

                        </div>

                    </EachTech> 

                </div>

            </AboutUsTechnology>

            <AboutUsDataBase>

                <div>

                    <h1>Database</h1>

                </div>

                <div>

                    <img src={dbImg} alt="db img"/>

                </div>
            
            </AboutUsDataBase>

            <AboutUsOurTeam>

                <div>

                    <h1>Our Team</h1>

                </div>

                <div>

                        {
                            listMember.map(e => (

                                <EachMember>
                                    <div>
                                        <img src={ConvertToIamge(e.avatar)} alt="person img" width={"200px"}/>
                                    </div>

                                    <div>
                                        <p>{e.fullname}</p>
                                        <p>{e.type}</p>
                                    </div>                                     
                                </EachMember>

                            ))
                        }

                </div>
            
            </AboutUsOurTeam>

        </AboutUsWrapper>

    )

}