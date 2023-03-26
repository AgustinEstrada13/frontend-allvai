import React from "react";
import ContentCarousel from "./ContentCarousel";


const Carousel = ({slides, titleCarousel, height, width, heightMid, hasText}) => {
  return (
    <ContentCarousel
      slides={slides}
      titleCarousel={titleCarousel}
      height={height}
      width={width}
      heightMid={heightMid}
      hasText={hasText}
    ></ContentCarousel>
  );
};

export default Carousel;
