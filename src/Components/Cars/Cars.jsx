import styles from "./car.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";
import { Link } from "react-router-dom";

const Cars = () => {
    const [cars, setCars] = useState([]);
    const [originalCars, setOriginalCars] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };


    const getCars = async () => {
        try {
            let response = await axios.get("https://freetestapi.com/api/v1/cars?limit=4");
            setCars(response.data);
            setOriginalCars(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const searchCar = () => {
        if (inputValue === "") {
            setCars(originalCars);
        } else {
            const filteredResults = originalCars.filter((car) => {
                return (
                    car.make.toLowerCase().includes(inputValue.toLowerCase()) ||
                    car.model.toLowerCase().includes(inputValue.toLowerCase())
                );
            });
            setCars(filteredResults);
        }

    };

    useEffect(() => {
        getCars();
    }, []);

    return (
        <div className="container mt-5">
            <div className={`${styles.inputGroups} input-group container mt-5`}>
                <label className="input-group-text" htmlFor="inputGroupFile04">
                    <i className="fa-solid fa-location-dot"></i>
                </label>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    className="form-control"
                    id="inputGroupFile04"
                    aria-describedby="inputGroupFileAddon04"
                    aria-label="Upload"
                    placeholder="Search By Name or Brand"
                />
                <button onClick={searchCar} className="btn btn-primary" type="button" id="inputGroupFileAddon04">
                    Search
                </button>
            </div>

            <div className="text-center my-1">
                <button className=" mt-3 rounded-2">POPULAR RENTAL DEALS</button>
                <h2 className="my-3">Most popular car rental deals</h2>

                <div className={`${styles.cards} cards m-auto text-start`}>
                    <div className="row">
                        {cars.map((car) => (
                            <div className="col-md-3" key={car.id}>
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div>
                </div>


                <Link to='all-vehicles' className="btn btn-outline-secondary my-5 px-4 text-decoration-none text-muted">Show all vehicles <i className="fa-solid fa-arrow-right"></i></Link>

            </div>
        </div>
    );
};

export default Cars;
