import React from "react";
import "./styles/homeStyle.css";
import NavBar from "../components/navbar/NavBar";
import SocialPromotion from "../components/social-promotion/SocialPromotion";
import Carrousel from "../components/carousel/Carousel";
import Header from "../components/header/Header";
import { slides, slides2 } from "../components/carousel/assets/exporters";
import titleCarousel from "../components/carousel/assets/titulo-efollets-premium.png";
import titleCarousel2 from "../components/carousel/assets/titulo-nuevos-beneficios.png";
const ViewHome = () => {
  return (
    <div className="content-home">
        <Header />
      <div className="sub-background">
        <Carrousel
          slides={slides2}
          titleCarousel={titleCarousel2}
          height={"100px"}
          width={"100px"}
          heightMid={"115px"}
          hasText={true}
        />
        <Carrousel
          slides={slides}
          titleCarousel={titleCarousel}
          heightMid={"190px"}
        />
        <SocialPromotion />
        <NavBar />
      </div>
    </div>
  );
};

export default ViewHome;
