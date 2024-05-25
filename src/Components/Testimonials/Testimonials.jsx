import './Testimonials.css';
import person1 from "../../assets/Images/person1.png";
import person2 from "../../assets/Images/girl.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
    return (
        <div style={{ background: "#F7FBFF" }} className="py-5">
            <div className='text-center'>
                <button className='mt-5 rounded-2 '>TESTIMONIALS</button>
                <h3 className='mt-2 mb-5'>What people say about us?</h3>
            </div>
            <Swiper
                spaceBetween={25}
                slidesPerView={3}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                }}
                pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                modules={[Pagination]}
                className="swiper-container-custom"
            >

                <SwiperSlide className="swiper-slide-custom rounded-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={person2} className="w-100 h-100" alt="Person 1" />
                        </div>
                        <div className="col-md-6 p-3">
                            <h2>5.0 <span className='fs-6'>stars</span></h2>
                            <p className=' text-warning'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </p>
                            <p>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                            <div className='mt-2'>
                                <h5>Charlie Johnson</h5>
                                <p className="text-muted">From New York, US</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom rounded-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={person2} className="w-100 h-100" alt="Person 1" />
                        </div>
                        <div className="col-md-6 p-3">
                            <h2>5.0 <span className='fs-6'>stars</span></h2>
                            <p className=' text-warning'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </p>
                            <p>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                            <div className='mt-2'>
                                <h5>Charlie Johnson</h5>
                                <p className="text-muted">From New York, US</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom rounded-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={person2} className="w-100 h-100" alt="Person 1" />
                        </div>
                        <div className="col-md-6 p-3">
                            <h2>5.0 <span className='fs-6'>stars</span></h2>
                            <p className=' text-warning'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </p>
                            <p>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                            <div className='mt-2'>
                                <h5>Charlie Johnson</h5>
                                <p className="text-muted">From New York, US</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide-custom rounded-3">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={person2} className="w-100 h-100" alt="Person 1" />
                        </div>
                        <div className="col-md-6 p-3">
                            <h2>5.0 <span className='fs-6'>stars</span></h2>
                            <p className=' text-warning'>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                            </p>
                            <p>“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”</p>
                            <div className='mt-2'>
                                <h5>Charlie Johnson</h5>
                                <p className="text-muted">From New York, US</p>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper>
        </div>
    );
}

export default Testimonials;
