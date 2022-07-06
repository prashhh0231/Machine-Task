import React from "react";
import "../Styles/list.css";
const Lists = ({ markers }) => {
  return (
    <div className="list_container">
      <div>
        <div className="tablewrapper">
          <h2>Latitude</h2>
          <h2>Longitude</h2>
        </div>
        <div style={{ border: "1px solid black" }}>
          {markers.map((val) => {
            return (
              <div className="table_data">
                <p className="p1">{val.lat}</p>
                <p className="p1">{val.lng}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lists;
