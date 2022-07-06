import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Lists from "../Components/Lists";
import Showmap from "../Components/Showmap";
import "../Styles/dashboard.css";
const Dashboard = () => {
  const [markers1, setMarkers1] = useState([
    { lat: 22.7196, lng: 75.8577 },
    { lat: 28.8955, lng: 76.6066 },
    { lat: 19.076, lng: 72.8777 },
  ]);

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

      {isMap ? <Showmap markers={markers1} /> : <Lists markers={markers1} />}
    </div>
  );
};

export default Dashboard;
