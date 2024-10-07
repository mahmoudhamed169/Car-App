// import React from 'react';
// import carImage from "../../assets/Images/homeCar.png"
import car1Image from "../../assets/Images/car4.png";
import car2Image from "../../assets/Images/car2.png";
import car3Image from "../../assets/Images/car3.png";
import { Link, useLocation } from "react-router-dom";
import styles from "./carCard.module.css"

const CarCard = ({ car }) => {
    console.log(car);
    const getRandomImage = () => {
        const images = [car1Image, car2Image, car3Image];
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    };
    const location = useLocation();


    let { id, make, model, transmission, price, year } = car
    return (
        <div>
            <div className={`${styles.car} p-3 mx-1 mt-4`} id={id}>
                <div className="m-auto w-100">
                    <img src={getRandomImage()} className={`${styles.cardImg} w-100  `} alt="" />

                </div>
                <div className="card-body">
                    <h5 className="card-title">{`${make} ${model}`}</h5>
                    <h6 className="mt-2"><i className="fa-solid fa-star text-warning"></i> 4.8  <span className=" text-muted">(1345 reviews)</span></h6>
                    <div className="car-info my-3">
                        <div className=" d-flex justify-content-between">
                            <p className="text-muted"> <i className="fa-regular fa-user me-1 "></i> 2 Passanger</p>
                            <p className="text-muted"> <i className="fa-solid fa-calendar-days me-1"></i>{year}</p>
                        </div>
                        <div className=" d-flex justify-content-between">
                            <p className=" text-muted"> <i className="fa-solid fa-snowflake me-1"></i> Air conditioning</p>
                            <p className="text-muted"> <i className="fa-solid fa-gear me-1"></i> {transmission}</p>
                        </div>
                    </div>
                    <hr />
                    <div className=" car-price d-flex justify-content-between">
                        <p>Price</p>
                        <p> <span className="fw-bold">${price}</span>/day</p>
                    </div>


                    <Link to={`all-vehicles/${id}`} className=" btn btn-primary w-100 text-decoration-none text-white "> View details  <i className="fa-solid fa-arrow-right"></i></Link>



                </div>

            </div>


        </div>
    );
}

export default CarCard;
