import React from "react";
import CarouselRender from "../Carousel/CarouselRender";
import Projects from "../Projects/Project";
import Footer from "../Footer/Footer";
import Information from "../Information/Information";
import NavigationBar from "../NavigationBar/NavigationBar";

//import Navigation from "../NavigationBar/Navigation";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <NavigationBar />
      <CarouselRender />
      <Information />
      <Projects />
      <Footer />
    </div>
  );
}
