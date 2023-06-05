"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
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
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    //   onAutoplayTimeLeft={onAutoplayTimeLeft}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    >
      {eventImagesArray?.map((eventImage, index) => (
        <SwiperSlide key={index} style = {{display:'flex', alignItems:'center',justifyContent:'center',position:'relative'}}>
          <Image src={eventImage} alt = 'eventImage' height={20} width = {1500} style = {{alignSelf:'center',marginTop:'auto',objectFit:'contain'}}/>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PastEventsCarousel;
