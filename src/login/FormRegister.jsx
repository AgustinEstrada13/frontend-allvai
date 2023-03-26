import React, { useRef } from 'react'
import './login.css';

const FormRegister = ({setEmail, setPassword, setLoginOrRegister}) => {
    const inputRef = useRef(null);
    const inputPasswordRef = useRef(null);
    
  return (
    <>
    <div className='title-form-register'></div>
    <div className="inputs">
        <input
              className="input"
              type="email"
              style={{ backgroundColor: "transparent" }}
              ref={inputRef}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ingrese su email..."/>

    </div>

    <div className="inputs">
        <input
                className="input"
                type="password"
                style={{ backgroundColor: "transparent" }}
                ref={inputPasswordRef}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Ingrese su contrasenia ..."/>
    </div>


    <div className="register">Registrate!</div>    

    <div className="backViewLogin" onClick={() => setLoginOrRegister(true)}>Volver al incio</div>
  </>
  )
}

export default FormRegister