import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lists from "../Components/Lists";
import Showmap from "../Components/Showmap";
import "../Styles/dashboard.css";
const Dashboard = () => {
  const navigate = useNavigate();
  const [isMap, setIsMap] = useState(true);

  useEffect(() => {
    let isLogged = localStorage.getItem("isLogged");

    if (isLogged === null) {
      navigate("/login");
    }
  });

  return (
    <div className="dashboardContainer">
      <button className="toggleBtn" onClick={() => setIsMap(!isMap)}>
        {isMap ? "Show List" : "Show Map"}
      </button>
      {isMap ? <Showmap /> : <Lists />}
    </div>
  );
};

export default Dashboard;
