import React, { useState } from "react";
import "./styles/carousel.css";
import arrowLeft from "./assets/flecha-izquierda.png";
import arrowRight from "./assets/flecha-derecha.png";
import Efollet from "./Efollet";
const ContentCarousel = ({ slides, titleCarousel, height, width, heightMid, hasText }) => {
  const images = slides;
  const [firstIndex, setFirstIndex] = useState(0);
  const [sliceIndex, setSliceIndex] = useState(3);
  const lastIndex = images == null ? 0 : images.length;

  function handleClick(direction) {
    if (direction === "left") {
      if (firstIndex !== 0) {
        setFirstIndex(firstIndex - 1);
        setSliceIndex(sliceIndex - 1);
      }
    } else {
      if (sliceIndex < lastIndex) {
        setFirstIndex(firstIndex + 1);
        setSliceIndex(sliceIndex + 1);
      }
    }
  }

  return (
    <>
      <div className="carousel-title">
        <img src={titleCarousel} alt="title" id="title" />
      </div>
      {
        <div className="box-content">
          <div className="arrow" onClick={() => handleClick("left")}>
            <img src={arrowLeft} alt="arrow" className="arrows" />
          </div>

          <div className="component-mid">
            <Efollet
              slides={slides.slice(firstIndex, sliceIndex)}
              height={height}
              width={width}
              heightMid={heightMid}
              hasText={hasText}
            />
          </div>

          <div className="arrow">
            <img
              src={arrowRight}
              alt="arrow"
              className="arrows"
              onClick={() => handleClick("right")}
            />
          </div>
        </div>
      }

    </>
  );
};

export default ContentCarousel;
