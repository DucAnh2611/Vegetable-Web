
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as fa from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function CartPane() {
    return (

        <div>

            <div>

                <div>

                    <p>Cart</p>

                    <button><span><FontAwesomeIcon icon={fa.faClose}/></span></button>

                </div>
                                
                <div>

                    <div>

                        <div>

                            <div>

                                <div>
                                    <img src="#" alt="imagePro"/>
                                </div>

                                <div>

                                    <div>
                                        <p>Name</p>
                                    </div>


                                    <div>
                                        
                                        <div>
                                            <button><span><FontAwesomeIcon icon={fa.faMinus}/></span></button>
                                            <input type="number" /> 
                                            <button><span><FontAwesomeIcon icon={fa.faPlus}/></span></button>
                                        </div>

                                    </div>

                                    
                                    <div>
                                        <p>#Price</p>
                                    </div>

                                </div>

                            </div>

                            <div>
                                <button><span><FontAwesomeIcon icon={fa.faClose}/></span></button>
                            </div>

                        </div>

                    </div>

                    <div>

                        <p>Subtotal</p>

                        <p>1000$</p>

                    </div>

                </div>
                                
                <div>   

                    <button>Check out</button>

                    <button>View cart</button>

                </div>

            </div>

        </div>

    )
}