import styles from "./whyus.module.css"
import React from 'react';
import car1 from "../../assets/Images/Audi 1.png"

const WhyUs = () => {
    return (
        <div className="container">
            <div className="row  ">
                <div className="col-md-6   ">
                    <div className=" w-100 mt-5 d-flex align-items-center">
                        <img src={car1} className={`${styles.whyUsImage} w-75  my-5`} />
                    </div>
                </div>
                <div className="col-md-6  p-2  m-auto">
                    <button className=" text-uppercase">why choose us</button>
                    <h4 className="my-4">We offer the best experience with our rental deals
                    </h4>
                    <div className="services">
                        <div className="service d-flex m-3 ">
                            <div>
                                <i className="fa-solid fa-sack-dollar text-primary p-3  rounded-3 " style={{ background: "#ECF5FF" }}></i>
                            </div>
                            <div className="p-1 ms-2">
                                <h6>Best price guaranteed</h6>
                                <p className="text-muted">Find a lower price? We’ll refund you 100% of the difference.</p>
                            </div>

                        </div>
                        <div className="service d-flex m-3 ">
                            <div>
                                <i className="fa-solid fa-user-check text-primary p-3  rounded-3 " style={{ background: "#ECF5FF" }}></i>
                            </div>
                            <div className="p-1 ms-2">
                                <h6>Experience driver</h6>
                                <p className="text-muted" >Don’t have driver? Don’t worry, we have many
                                    experienced driver for you.</p>
                            </div>

                        </div>

                        <div className="service d-flex m-3 ">
                            <div>
                                <i className="fa-solid  fa-car text-primary p-3  rounded-3 " style={{ background: "#ECF5FF" }}></i>
                            </div>
                            <div className="p-1 ms-2">
                                <h6>24 hour car delivery</h6>
                                <p className="text-muted" >Book your car anytime and we will deliver it
                                    directly to you.</p>
                            </div>

                        </div>

                        <div className="service d-flex m-3 ">
                            <div>
                                <i className="fa-solid  fa-message text-primary p-3  rounded-3 " style={{ background: "#ECF5FF" }}></i>
                            </div>
                            <div className="p-1 ms-2">
                                <h6>24/7 technical support</h6>
                                <p className="text-muted" >Have a question? Contact Rentcars support
                                    any time when you have problem.</p>
                            </div>

                        </div>


                    </div>

                </div>



            </div>

        </div>
    );
}

export default WhyUs;
