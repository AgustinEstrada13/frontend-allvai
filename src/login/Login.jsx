import React, { useState, useRef, useEffect } from "react";
import "./login.css";

const Login = ({setEmail, setPassword, setLoginOrRegister}) => {
  const [validateClick, setValidateClick] = useState(false);
  const [validateClickPassword, setValidateClickPassword] = useState(false);
  const inputRef = useRef(null);
  const inputPasswordRef = useRef(null);

  useEffect(() => {
    if (validateClick && inputRef.current) {
      inputRef.current.focus();
    }
  }, [validateClick]);

  useEffect(() => {
    if (validateClickPassword && inputPasswordRef.current) {
      inputPasswordRef.current.focus();
    }
  }, [validateClickPassword]);

  const handleInputEmailClick = () => {
    setValidateClick(true);
  };
  const handleInputPasswordClick = () => {
    setValidateClickPassword(true);
  };

  return (
    <>
      <div className="img-login-google"></div>
      <div className="form-login">
        <div className="inputs" onClick={handleInputEmailClick}>
          {!validateClick ? (
            <p className="input-text">E-MAIL</p>
          ) : (
            <input
              className="input"
              type="email"
              style={{ backgroundColor: "transparent" }}
              ref={inputRef}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email..."
            />
          )}
        </div>

        <div className="inputs" onClick={handleInputPasswordClick}>
          {!validateClickPassword ? (
            <p className="input-text">CONTRASEÑA</p>
          ) : (
            <input
              className="input"
              type="password"
              style={{ backgroundColor: "transparent" }}
              ref={inputPasswordRef}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese su contraseña..."
            />
          )}
        </div>
        <div className="register-login">
          <div className="box-register-login input-text">Iniciar sesión</div>
          <div className="box-register-login input-text" onClick={() => setLoginOrRegister(false)}>Registrarse</div>
        </div>
      </div>
    </>
  );
};

export default Login;
