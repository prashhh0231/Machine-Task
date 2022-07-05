import React from "react";
import "../Styles/headers.css";
import { useNavigate } from "react-router-dom";
const Headers = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("isLogged");
    navigate("/login");
  };

  return (
    <div className="header_contaier">
      <h1>Given Task</h1>
      <button className="logoutBtn" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
};

export default Headers;
