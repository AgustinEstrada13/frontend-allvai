import React from "react";
import "./styles/carousel.css";

const Efollet = ({ slides, height, heightMid, width }) => {
  console.log(heightMid)
  return (
    <>
      <div className="content-efollet">
        <div
          style={{ backgroundImage: `url(${slides[0].url})`, height: height, width: width }}
          className="img-efollets"
        ></div>
      </div>

      <div className="content-efollet">
        <div
          style={{ backgroundImage: `url(${slides[1].url})`, height: heightMid, width: width }}
          className="img-efollets"
        ></div>
      </div>

      <div className="content-efollet">
        <div
          style={{ backgroundImage: `url(${slides[2].url})`, height: height, width: width }}
          className="img-efollets"
        ></div>
      </div>
    </>
  );
};

export default Efollet;
