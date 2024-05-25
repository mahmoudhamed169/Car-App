// import React from 'react';

import logo from "../../assets/Images/logo.png";
import styles from "./NavBar.module.css"


const NavBar = () => {

    return (
        <div className=" container">
            <nav className={`${styles.navbar} navbar navbar-expand-lg  bg-transparent`}   >
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src={logo} alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <button className="btn bold">Become a renter</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn bold">Rental deals</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn bold">How it work</button>
                            </li>
                            <li className="nav-item">
                                <button className="btn bold">Why choose us</button>
                            </li>


                        </ul>

                    </div>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <button className="btn bold">Sign in</button>
                            <button className="btn bold btn-primary">Sgin up</button>
                        </ul>

                    </div>
                </div>
            </nav>


        </div>
    );
}

export default NavBar;
