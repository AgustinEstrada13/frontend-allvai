import React from "react";
import "./styles/carousel.css";

const Efollet = ({ slides }) => {
  return (
    <>
      <div className="content-efollet">
        <div
          style={{ backgroundImage: `url(${slides[0].url})` }}
          className="img-efollets"
        >
         
        </div>
      </div>

      <div className="content-efollet">
        <div
          id="p-efollet"
          style={{ backgroundImage: `url(${slides[1].url})` }}
          className="img-efollets"
        ></div>
      </div>

      <div className="content-efollet">
        <div
          style={{ backgroundImage: `url(${slides[2].url})` }}
          className="img-efollets"
        ></div>
      </div>
    </>
  );
};

export default Efollet;
