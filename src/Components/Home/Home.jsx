// import React from 'react';
import "./home.css"
import homeImage from "../../assets/Images/homeCar.png"

const Home = () => {
    return (
        <>
            <div className="container mb-5 ">
                <div className='row '>
                    <div className='home-caption p-5 col-md-4 d-flex  flex-column justify-content-center  '>
                        <h1 className=" fw-bolder">
                            Find, book and  rent a car <span className=' text-primary'>Easily </span>
                        </h1>
                        <p>
                            Get a car wherever and whenever you need it with
                            your IOS and Android device.
                        </p>
                    </div>
                    <div className='col-md-8'>
                        <div className="home-img">
                            <img src={homeImage} alt="" />

                        </div>


                    </div>

                </div>
            </div>
        </>

    );
}

export default Home;
