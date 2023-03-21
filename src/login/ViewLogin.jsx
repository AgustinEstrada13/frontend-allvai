import React, { useState } from "react";
import "./login.css";
import Login from "./Login";
import Register from "./Register";
const ViewLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [typeUser, setTypeUser] = useState("");
  const [loginOrRegister, setLoginOrRegister] = useState(true);

  console.log(email, password, typeUser)
//resetear validateClickssss cuandop se guarda
  return (
    <div className="view-login">
      <div className="content-up">
        <div className="img-logo"></div>
      </div>

      <div className="content-mid" >
        {
          loginOrRegister
          ? <Login setEmail={setEmail} setPassword={setPassword} setLoginOrRegister={setLoginOrRegister}/>
          : <Register setLoginOrRegister={setLoginOrRegister} setTypeUser={setTypeUser}/>
        }
      </div>

      <div className="content-down">
        <div className="img-help"></div>
      </div>
    </div>
  );
};

export default ViewLogin;
