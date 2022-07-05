import React, { useState } from "react";
import "../Styles/registration.css";
import { useNavigate, Link } from "react-router-dom";
import helper from "../validation/helper";
const Registration = () => {
  const navigate = useNavigate();

  const [input, setInput] = useState([
    {
      label: "Full name",
      type: "text",
      placeholder: "Full Name",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter  Full name.",
    },

    {
      label: "Email",
      type: "email",
      placeholder: "Email Id",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter email.",
    },
    {
      label: "Latitude",
      type: "text",
      placeholder: "Latitude",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter lattitude.",
    },
    {
      label: "Longitude",
      type: "text",
      placeholder: "longitude",
      value: "",
      error: 0,
      required: 1,
      errorText: "Please enter  longitude.",
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

  const registrationHandle = (e) => {
    e.preventDefault();
    const inputValid = helper(input);
    setInput(() => [...inputValid]);
    if (input.valid) {
      navigate("/");
    }
  };

  return (
    <div className="container">
      <div className="reg_wrapper">
        <h2>Sign up for more :)</h2>
        <form action="" onSubmit={registrationHandle}>
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
            <button type="submit" className="button_reg">
              Sign Up
            </button>
            <br />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
