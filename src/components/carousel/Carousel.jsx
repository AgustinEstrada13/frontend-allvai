import React from "react";
import ContentCarousel from "./ContentCarousel";


const Carousel = ({slides, titleCarousel, height, width, heightMid}) => {
  return (
    <ContentCarousel
      slides={slides}
      titleCarousel={titleCarousel}
      height={height}
      width={width}
      heightMid={heightMid}
    ></ContentCarousel>
  );
};

export default Carousel;
