import React from "react";

import styles from "./CarouselRender.module.css";

import Carousel from "react-bootstrap/Carousel";

export default function CarouselRender() {
  return (
    <Carousel className={styles.containerCarousel}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Electiva/DT/Imagen9_002.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Taller/NR/aerea 3.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/Electiva/DT/RenderNocturno1.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}
