import React from "react";
import ContentCarousel from "./ContentCarousel";
import { slides } from "./assets/exporters";
import titleCarousel from "./assets/efollets-premium.png";

const Carousel = () => {
  return (
    <ContentCarousel
      slides={slides}
      titleCarousel={titleCarousel}
    ></ContentCarousel>
  );
};

export default Carousel;
