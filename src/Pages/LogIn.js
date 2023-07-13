import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Component/InputField/InputField";
import logIn_logo from "../Component/assets/img/Logo.svg";
import AuthService from "../Service/AuthService";

function LogIn() {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState(null);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlepassChange = (event) => {
    setPass(event.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const res = await AuthService.login(name, pass);
    if (res?.status === 203) {
      setError(res?.message);
    } else if (res?.status === 200) {
      setError(null);
      window.location.href = "/release-audio";
    }
  };
  return (
    <div className="logIn_from">
      <div className="logIn_logo mb-5">
        <img src={logIn_logo} alt="" />
        <h1>Dream Records</h1>
      </div>
      <form action="" className="input_form">
        <InputField
          label="User Name"
          value={name}
          star="*"
          onChange={handleNameChange}
        />
        <InputField
          label="Password"
          value={pass}
          star="*"
          onChange={handlepassChange}
        />
        {error && (
          <div className="validateStatus">
            <p className="text-danger">{error}</p>
          </div>
        )}

        <Link to="#" className="mt-3">
          Forget your password?
        </Link>
        <Link className="mt-3" onClick={handleLogin}>
          <button className="btn">Log In</button>
        </Link>
      </form>
    </div>
  );
}

export default LogIn;
