import React from "react";
import "../Styles/list.css";
const Lists = () => {
  let arr = [1, 2, 3, 4, 5];
  return (
    <div className="list_container">
      <div>
        <div className="tablewrapper">
          <h2>Latitude</h2>
          <h2>Longitude</h2>
        </div>
        <div style={{ border: "1px solid black" }}>
          {arr.map((val) => {
            return (
              <div className="table_data">
                <p className="p1">Latitude</p>
                <p className="p1">Longitude</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Lists;
