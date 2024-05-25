import React, { useState } from 'react';
import appStore from "../../assets/Images/appStore.png"
import googlePlay from "../../assets/Images/googlePlay.png"
import iphoneImg from "../../assets/Images/iPhone-14.png"
import styles from "./download.module.css"
import axios from 'axios';




const Download = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');





    const handleSubmit = async (e) => {
        e.preventDefault();

        try {

            const response = await axios.post('http://upskilling-egypt.com:3001/contact', {
                name,
                phone,
                email
            });


            setName('');
            setPhone('');
            setEmail('');
            setMessage('Form submitted successfully!');
        } catch (error) {

            setMessage('Failed to submit form. Please try again later.');
        }
    };






    return (
        <div className=' container p-5 '>
            <div className="row">
                <div className="col-md-6 mb-4">
                    <h2>Download Rentcars
                        App for <span className='text-primary'>FREE</span></h2>
                    <p className='text-muted'>For faster, easier booking and exclusive deals.</p>

                    <img className='btn mt-1   ' src={googlePlay} alt="" />
                    <img className='btn mt-1  ' src={appStore} alt="" />

                    <div className={`${styles.formContainer}`}>
                        <form className='w-100  my-4'>
                            <div className='mb-2'>
                                <input type="text" className=' form-control rounded-5 bg-primary-subtle' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} />

                            </div>
                            <div className='mb-2'>
                                <input type="tel" className=' form-control rounded-5 bg-primary-subtle' placeholder='Phone Number' value={phone} onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            <div className='mb-2'>
                                <input type="email" className=' form-control rounded-5 bg-primary-subtle' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className='text-center'>
                                <button type='submit' className='btn btn-primary px-5 py-2' onClick={handleSubmit}>Send</button>

                            </div>

                        </form>

                        {message && <p className="text-center">{message}</p>}




                    </div>



                </div>


                <div className="col-md-6">
                    <div className='d-flex justify-content-center align-items-end  h-100'>
                        <img src={iphoneImg} className="w-50" alt="" />

                    </div>
                </div>

            </div>

        </div>
    );
}

export default Download;
