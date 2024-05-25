import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import carImage from "../../assets/Images/Audi 1.png"
import styles from "./CarDetails.module.css"

const CarDetails = () => {
    const { id } = useParams();
    const [carInfo, setCarInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getCarInfo = async () => {
            try {
                const response = await axios.get(`https://freetestapi.com/api/v1/cars/${id}`);
                setCarInfo(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getCarInfo();


        return () => {

        };
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container">
            <nav aria-label="breadcrumb" className="mt-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/home/all-vehicles">Cars</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Car Details</li>
                    <li className="breadcrumb-item active" aria-current="page">{`${carInfo.make} ${carInfo.model}`}</li>
                </ol>
            </nav>
            <div className="row vh-100">
                <div className="col-md-6 mt-5">
                    <div className={`${styles.carImgContainer} d-flex mt-5 pt-5`}>
                        <img src={carImage} alt="" />
                    </div>
                </div>
                <div className="col-md-6 mt-5">
                    <div className="car-info mt">
                        <button>WHY CHOOSE US</button>
                        <h4 className="mt-3 fw-semibold">We offer the best experience with our rental deals</h4>
                        <div className="mt-5">
                            <p className="text-muted"><i className="fa-solid fa-snowflake me-1"></i> Air conditioning</p>
                            <p className="text-muted"><i className="fa-solid fa-gear me-1"></i> Transmission: {carInfo.transmission}</p>
                            <p className="text-muted"><i className=" fa-solid fa-palette me-1"></i> Color: {carInfo.color}</p>
                            <p className="text-muted"><i className="fa-solid fa-calendar-days me-1"></i> Year: {carInfo.year}</p>
                            <p className="text-muted"><i className="fa-regular fa-user me-1 "></i> 2 Passengers</p>
                            <p className="text-muted"><i className="fa-solid fa-car me-1 "></i> Horsepower: {carInfo.horsepower}</p>
                            <p className="text-muted"><i className="fa-solid fa-list me-1 "></i> Features: {carInfo.features && carInfo.features.length > 0 ? `${carInfo.features[0]}, ${carInfo.features[1]} and ${carInfo.features[2]}` : ''}</p>
                            <p className="text-muted fw-bolder"><i className="fa-solid fa-sack-dollar me-1 "></i> Price: {`${carInfo.price} $`}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarDetails;
