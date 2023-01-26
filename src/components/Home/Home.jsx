import React from "react";
import CarouselRender from "../Carousel/CarouselRender";
import CarouselProjects from "../CarouselProjects/CarouselProject";
import Information from "../Information/Information";
import NavigationBar from "../NavigationBar/NavigationBar";
import "./Home.module.css";

export default function Home() {
  return (
    <div className="page">
      <NavigationBar />
      <CarouselRender />
      <Information />
      <CarouselProjects />
    </div>
  );
}
