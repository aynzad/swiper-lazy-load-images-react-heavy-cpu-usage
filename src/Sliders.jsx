import React from "react";
// Core modules imports are same as usual
import { Navigation, Lazy } from "swiper";
// Direct React component imports
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";

// Styles must use direct files imports
import "swiper/swiper.min.css"; // core Swiper
import "swiper/modules/navigation/navigation.min.css"; // Navigation module
import "swiper/modules/lazy/lazy.min.css"; // Pagination module

export default function Sliders({ images }) {
  return (
    <div className="swiper-container">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff"
        }}
        modules={[Navigation, Lazy]}
        lazy
        navigation
        height={200}
        className="swiper"
      >
        {images.map((image, i) => (
          <SwiperSlide key={i}>
            <img data-src={image} className="image swiper-lazy" alt="" />
            <div className="swiper-lazy-preloader swiper-lazy-preloader-black"></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
