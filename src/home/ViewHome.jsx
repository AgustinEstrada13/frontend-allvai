import React from "react";
import "./styles/homeStyle.css";
import NavBar from "../components/navbar/NavBar";
import SocialPromotion from "../components/social-promotion/SocialPromotion";
import Carrousel from "../components/carousel/Carousel";
const ViewHome = () => {
  return (
    <div className="content-home">
      <div className="sub-background">
        <Carrousel />
        <SocialPromotion />
        <NavBar />
      </div>
    </div>
  );
};

export default ViewHome;
