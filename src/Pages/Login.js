import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate, Link } from "react-router-dom";
import helper from "../validation/helper";
const Login = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState([
    {
      label: "Email",
      type: "email",
      placeholder: "Email",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter Email.",
    },
    {
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter valid password.",
    },
  ]);

  const onChangeText = (key, value) => {
    if (key !== undefined) {
      input[key].value = value;
      setInput(() => [...input]);
    }
  };

  const loginHandle = (e) => {
    e.preventDefault();
    const inputValid = helper(input);
    setInput(() => [...inputValid]);

    if (input.valid) {
      localStorage.setItem("isLogged", true);
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="login_wrapper">
        <h2>Login for more :)</h2>
        <h5>Enter any email id or password validation is working</h5>
        <form action="" onSubmit={loginHandle}>
          <div className="inputs">
            {input.map((item, key) => (
              <>
                <input
                  type={item.type}
                  placeholder={item.placeholder}
                  value={item.value}
                  onChange={(e) => onChangeText(key, e.target.value)}
                />
                <br />
                <span className="errMsg">
                  {item.error ? item.errorText : null}
                </span>
                <br />
              </>
            ))}
            <button type="submit" className="button">
              Login
            </button>
            <br />
            <Link to="/registration">
              <p className="registrationBtn">Need Registration?</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
