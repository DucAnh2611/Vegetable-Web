
import React, { useEffect, useState } from "react";
import ConvertToIamge from "../../AssistsFunc/ConvertBlobToImage";

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

        <div>

            <div>

                <div>


                </div>

                <div>

                    <h1>VEGETABLE WEBSITE</h1>
                    <p>With any fruit and vegetable on the market, consumers need to pay attention to the origin, how to identify safe food to ensure the health of their…</p>
                    <button>Shop Now</button>
                                    
                </div>

            </div>

            <div>
                
                <div>

                    <h1>Technology</h1>

                </div>

                <div>

                    <div> 

                        <div>
                            <img alt="Techuse"/>
                        </div>

                        <div>

                            <h3>Nodejs</h3>

                            <p></p>

                            <a href="#">Read more</a>

                        </div>

                    </div>

                    <div> 

                        <div>
                            <img alt="Techuse"/>
                        </div>

                        <div>

                            <h3>Nodejs</h3>

                            <p></p>

                            <a href="#">Read more</a>

                        </div>

                    </div>  

                </div>

            </div>

            <div>

                <div>

                    <h1>Database</h1>

                </div>

                <div>

                    <div></div>

                </div>
            
            </div>

            <div>

                <div>

                    <h1>Our Team</h1>

                </div>

                <div>

                        {
                            listMember.map(e => (

                                <div>
                                    <div>
                                        <img src={ConvertToIamge(e.avatar)} alt="person img"/>
                                    </div>

                                    <div>
                                        <p>{e.fullname}</p>
                                        <p>{e.type}</p>
                                    </div>                                     
                                </div>

                            ))
                        }

                </div>
            
            </div>

        </div>

    )

}