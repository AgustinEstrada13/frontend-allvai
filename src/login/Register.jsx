import React from "react";
import "./login.css";

const Register = ({setLoginOrRegister, setTypeUser}) => {
  return (
    <>
      <div className="img-typeUser"></div>

      <div className="chose-user">
        <div className="img-comerce" onClick={() => setTypeUser('comerce')}></div>
        <div className="img-citizen" onClick={() => setTypeUser('citizen')}></div>
      </div>

      <div className="backViewLogin" onClick={() => setLoginOrRegister(true)}>Volver al incio</div>
    </>
  );
};

export default Register;
