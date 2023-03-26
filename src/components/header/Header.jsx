import React from "react";
import "./styles/header.css";
const Header = () => {
  return (
    <div className="header">

      <div className="header-content content-left-home">
        <div id="img-left"></div>
      </div>

      <div className="content-mid-home">
        <div id="img-mid"></div>
        <select name="frutas" className="select">
          <option value="manzana">Villa Allende</option>
          <option value="banana">Valle escondido</option>
          <option value="naranja">Cerro de las rosas</option>
          <option value="pera">Nueva Cordoba</option>
        </select>
      </div>

      <div className="header-content content-right-home">
        <div id="img-right"></div>
      </div>
      
    </div>
  );
};

export default Header;
