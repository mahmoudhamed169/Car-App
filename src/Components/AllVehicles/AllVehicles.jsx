import styles from "./vehicles.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CarCard from "../CarCard/CarCard";
import { Link } from "react-router-dom";

const AllVehicles = () => {
    const [cars, setCars] = useState([]);
    const [originalCars, setOriginalCars] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [carsPerPage] = useState(12);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const getCars = async () => {
        try {
            let response = await axios.get("https://freetestapi.com/api/v1/cars");
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
        const indexOfLastCar = currentPage * carsPerPage;
        const indexOfFirstCar = indexOfLastCar - carsPerPage;
        setCars(originalCars.slice(indexOfFirstCar, indexOfLastCar));
    }, [currentPage, originalCars, carsPerPage]);

    useEffect(() => {
        getCars();
    }, []);

    return (
        <div className="container mt-5">
            <nav aria-label="breadcrumb" className="mt-5">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/home">Home</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Cars</li>
                </ol>
            </nav>


            <div className="text-center my-1 ">
                <button className=" mt-3 rounded-2">POPULAR RENTAL DEALS</button>
                <h4 className="my-3">Most popular car rental deals</h4>

                <div className="input-group container mt-5">
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

                <div className={`${styles.cars}  m-auto text-start`}>
                    <div className="row">
                        {cars.map((car) => (
                            <div className="col-md-3" key={car.id}>
                                <CarCard car={car} />
                            </div>
                        ))}
                    </div>
                </div>

                <nav aria-label="Page navigation example ">
                    <ul className="pagination justify-content-center  py-5">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
                        </li>
                        {Array.from({ length: Math.ceil(originalCars.length / carsPerPage) }, (_, i) => (
                            <li key={i + 1} className={`page-item ${i + 1 === currentPage ? 'active' : ''}`}>
                                <button className="page-link" onClick={() => setCurrentPage(i + 1)}>{i + 1}</button>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === Math.ceil(originalCars.length / carsPerPage) ? 'disabled' : ''}`}>
                            <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default AllVehicles;
