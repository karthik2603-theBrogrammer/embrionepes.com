"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const PastEventsCarousel = ({ eventImagesArray }) => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
      autoplay={true}
    >
      {eventImagesArray?.map((eventImage, index) => (
        <SwiperSlide>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            optio laudantium est aliquid, accusantium doloremque? Blanditiis,
            voluptatum, voluptate ut velit deleniti ducimus magni laboriosam
          </p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PastEventsCarousel;
