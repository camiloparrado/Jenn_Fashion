import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";

export const Slider = () => {
    
    return (
        <>
            <div className="swiper-button-prev prev">
                <i className="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div className="swiper-button-next next">
                <i className="fa-solid fa-circle-chevron-left fa-rotate-180"></i>
            </div>
            <Swiper modules={[Navigation,Autoplay]} className="mySwiper"  
            autoplay={{
                delay: 6000,
                disableOnInteraction: false
            }}
            navigation={{
                nextEl:'.next',
                prevEl:'.prev',
            }}
            breakpoints={{
                340: {
                    width: 340,
                    SliderPerView: 1,
                    spaceBetween: 10,            
                },
                375: {
                    width: 375,
                    slidesPerView: 2,
                    spaceBetween: 10,
                    delay: 3000,   
                },
                768: {
                    width: 768,
                    slidesPerView: 3,
                    spaceBetween: 30,
                    delay: 3000,   
                },
                992: {
                    width: 920,
                    slidesPerView: 4,
                    spaceBetween: 30,
                    delay: 3000,   
                },
                1240: {
                    width: 1240,
                    slidesPerView: 5,
                    spaceBetween: 30,
                    delay: 3000,   
                },
            }}
        >
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/1.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes bg-transparent">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/12.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/13.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/16.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/23.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/24.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/4F1585A4-8919-4670-AB94-027237584BCB.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="card card-wrapper">
                    <div className="img-wrapper">
                        <img src="/src/assets/img/25.png" alt="..." />
                    </div>
                    <div className="card-body card-body-clothes">
                        <h2 className="card-title">Card title</h2>
                        <p className="card-text">$150.000</p>
                        <div className="products-variant">
                            <ul className="content-variant-list">
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">S</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">M</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">XL</a>
                                </li>
                                <li className="content-variant-item">
                                    <a href="#" className="content-variant-link">L</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
        </>
        
    )
}
