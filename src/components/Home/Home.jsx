import React from "react";
import CarouselRender from "../Carousel/CarouselRender";
import CarouselProjects from "../CarouselProjects/CarouselProjects";
import Navigation_Bar from "../NavigationBar/Navigation_Bar";

export default function Home() {
  return (
    <div>
      <Navigation_Bar />
      <CarouselRender />
      <CarouselProjects />
    </div>
  );
}
