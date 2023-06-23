import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper";
import { SwiperS_1 } from './SwiperSlide2/SwiperS_1';
import { SwiperS_2 } from './SwiperSlide2/SwiperS_2';
import { SwiperS_3 } from './SwiperSlide2/SwiperS_3';
import { SwiperS_4 } from './SwiperSlide2/SwiperS_4';
import { SwiperS_5 } from './SwiperSlide2/SwiperS_5';
import { SwiperS_6 } from './SwiperSlide2/SwiperS_6';


export const Slider2 = () => {
    return (
        <>
            <div className="swiper-button-prev prev-2">
                <i className="fa-solid fa-circle-chevron-left"></i>
            </div>
            <div className="swiper-button-next next-2">
                <i className="fa-solid fa-circle-chevron-left fa-rotate-180"></i>
            </div>
            <Swiper modules={[Navigation, Autoplay]} className="mySwiper"
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                navigation={{
                    nextEl: '.next-2',
                    prevEl: '.prev-2',
                }}
                breakpoints={{
                    340: {

                        SliderPerView: 1,
                        spaceBetween: 10,
                    },
                    375: {

                        slidesPerView: 2,
                        spaceBetween: 10,
                        delay: 3000,
                    },
                    768: {

                        slidesPerView: 3,
                        spaceBetween: 30,
                        delay: 3000,
                    },
                    992: {

                        slidesPerView: 4,
                        spaceBetween: 30,
                        delay: 3000,
                    },
                    1240: {

                        slidesPerView: 5,
                        spaceBetween: 30,
                        delay: 3000,
                    },
                }}
            >
                <SwiperSlide>
                    <SwiperS_1 />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperS_2 />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperS_3 />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperS_4 />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperS_5 />
                </SwiperSlide>
                <SwiperSlide>
                    <SwiperS_6 />
                </SwiperSlide>
            </Swiper>
        </>
    )
}
