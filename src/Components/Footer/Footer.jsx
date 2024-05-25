import React from 'react';
import styles from './footer.module.css';
import imgLogo from "../../assets/Images/Group.png"
const Footer = () => {
    return (
        <footer>
            <div className=' container'>
                <div className="row py-5">
                    <div className="col-md-3 ">
                        <p className='fw-bold mb-3' ><img src={imgLogo} alt="" /> RENTCARS</p>
                        <div className=' d-flex flex-column'>
                            < small className='p-1'>
                                <i className="fa-solid fa-location-dot me-2 pt-2"></i>
                                25566 Hc 1, Glenallen, <br /> <span className='ps-3'> Alaska, 99588, USA</span>
                            </small>

                            <small className='p-1'>
                                <i className="fa-solid  fa-phone me-2 pt-1"></i> +603 4784 273 12

                            </small>
                            <small className='p-1'>
                                <i className="fa-regular fa-envelope me-2 pt-1"></i> rentcars@gmail.com

                            </small>

                        </div>



                    </div>

                    <div className="col-md-2  ">
                        <p className=' mb-3' >Our Products </p>
                        <div className='d-flex flex-column '>
                            <small>Career</small>
                            <small>car</small>
                            <small>Packages</small>
                            <small>Features</small>
                            <small>Priceline</small>

                        </div>

                    </div>
                    <div className="col-md-2  ">
                        <p className=' mb-3' >Resources </p>
                        <div className='d-flex flex-column '>
                            <small>Download</small>
                            <small>Help Centre</small>
                            <small>Guides</small>
                            <small>Partner Network</small>
                            <small>Cruises</small>
                            <small>Developer</small>

                        </div>

                    </div>

                    <div className="col-md-2  ">
                        <p className=' mb-3' >About Rentcars </p>
                        <div className='d-flex flex-column '>
                            <small>Download</small>
                            <small>Our Story</small>
                            <small>Investor Relations</small>
                            <small>Press Center</small>
                            <small>Advertise</small>

                        </div>
                    </div>
                    <div className="col-md-2  ">
                        <p className=' mb-3' >Follow Us</p>
                        <div className=''>
                            <i className="fa-brands fa-square-facebook p-2"></i>
                            <i className="fa-brands fa-instagram p-2"></i>
                            <i className="fa-brands  fa-youtube p-2"></i>


                        </div>
                    </div>



                </div>
                <hr />
                <p className='p-3'>Copyright 2023 ・ Rentcars, All Rights Reserved</p>


            </div>



        </footer>
    );
}

export default Footer;
