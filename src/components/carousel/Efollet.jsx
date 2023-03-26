import React from "react";
import "./styles/carousel.css";

const Efollet = ({ slides, height, heightMid, width, hasText }) => {
  return (
    <>
      <div className="content-efollet">
        <div
          style={{
            backgroundImage: `url(${slides[0].url})`,
            height: height,
            width: width,
          }}
          className="img-efollets"
        >
          {hasText && <div className="text-img-efollet">{slides[0].text}</div>}
        </div>
      </div>

      <div className="content-efollet">
        <div
          style={{
            backgroundImage: `url(${slides[1].url})`,
            height: heightMid,
            width: width,
          }}
          className="img-efollets"
        >
          {hasText && <div className="text-img-efollet">{slides[0].text}</div>}
        </div>
      </div>

      <div className="content-efollet">
        <div
          style={{
            backgroundImage: `url(${slides[2].url})`,
            height: height,
            width: width,
          }}
          className="img-efollets"
        >
          {hasText && <div className="text-img-efollet">{slides[0].text}</div>}
        </div>
      </div>
    </>
  );
};

export default Efollet;
