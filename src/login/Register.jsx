import React, { useState } from "react";
import "./login.css";
import FormRegister from "./FormRegister";
const Register = ({setLoginOrRegister, setTypeUser, setEmail, setPassword}) => {
  const [hasSelectType, setHasSelectType] = useState(false);

  const handleNextStep = (type) => {
    setTypeUser(type);
    setHasSelectType(true);
  }
  
  return (
    <>
    {!hasSelectType  ?
      <>
        <div className="img-typeUser"></div>

        <div className="chose-user">
          <div className="img-comerce" onClick={() => handleNextStep('comerce')}></div>
          <div className="img-citizen" onClick={() => handleNextStep('citizen')}></div>
        </div>

        <div className="backViewLogin" onClick={() => setLoginOrRegister(true)}>Volver al incio</div>
      </
      >
    : <FormRegister setEmail={setEmail} setPassword={setPassword} setLoginOrRegister={setLoginOrRegister}/>
    }
    </>
  );
};

export default Register;
