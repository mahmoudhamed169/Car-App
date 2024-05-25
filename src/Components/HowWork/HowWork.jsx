import "./howWork.css"
import React from 'react';
import nissan from "../../assets/Images/nissan.png"
import jaguar from "../../assets/Images/jaguar.png"
import volvo from "../../assets/Images/volvo.png"
import audi from "../../assets/Images/audi.png"

const HowWork = () => {
    return (
        <div className="container my-5 ">
            <div className="text-center" >
                <button className=" rounded-2">HOW IT WORK </button>
                <h3 className="my-3">Rent with following 3 working steps</h3>
                <div className=" w-50 m-auto row  mt-5">
                    <div className="col-md-4" >
                        <i className="fa-solid fa-location-dot mb-3  p-5 rounded-3 text-primary fs-2 " style={{ background: "#ECF5FF" }}></i>

                        <h6>Choose location</h6>
                        <p className="text-muted text">Choose your and find <br />
                            your best car</p>

                    </div>
                    <div className="col-md-4" >
                        <i className="fa-solid  fa-calendar-days mb-3  p-5 rounded-3 text-primary fs-2 " style={{ background: "#ECF5FF" }}></i>

                        <h6>Pick-up date</h6>
                        <p className="text-muted text">Select your pick up date and <br />
                            time to book your car</p>

                    </div>
                    <div className="col-md-4" >
                        <i className="fa-solid fa-car mb-3  p-5 rounded-3 text-primary fs-2 " style={{ background: "#ECF5FF" }}></i>
                        <h6>Book your car</h6>
                        <p className="text-muted text">Book your car and we will deliver <br />
                            it directly to you</p>
                    </div>
                </div>
                <div className="brandscontainer px-4 d-flex justify-content-around flex-wrap my-5">
                    <img src={jaguar} alt="" />
                    <img src={nissan} alt="" />
                    <img src={volvo} alt="" />
                    <img src={audi} alt="" />
                </div>
            </div >
        </div >
    );
}

export default HowWork;
