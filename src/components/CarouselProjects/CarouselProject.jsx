import React from "react";

import "./CarouselProject.module.css";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

export default function CarouselProjects() {
  return (
    <div>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={5}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        loop={true}
      >
        <SwiperSlide>
          <img
            className="imagen"
            src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
            alt=""
            width={"400px"}
            height={"300px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imagen"
            src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
            alt=""
            width={"400px"}
            height={"300px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imagen"
            src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
            alt=""
            width={"400px"}
            height={"300px"}
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="imagen"
            src="https://stillframerender.com/wp-content/uploads/2020/03/01Privada-Parque-Natura-DIse%C3%B1o-Arquitectonico-Fachada-Principal-Contemporanea.jpg"
            alt=""
            width={"400px"}
            height={"300px"}
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
}
