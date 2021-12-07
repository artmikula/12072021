import React, { useState } from "react";
import results from "../styles/results.css";
import CustomMap from "./CustomMap";

function Results({ apiData, setApiData, dataLoaded, setDataLoaded }) {
  const [data, setData] = useState("");

  const sendData = (e) => {
    setData(e.target.value);
    alert("Data " + data + " has been submitted.");
  };

  const clearData = () => {
    setDataLoaded(null);
  };

  return (
    <div className="results">
      <div className="recommendations">
        <div className="title">Recommended Crops</div>
        <div className="recommend-inner">
          <div className="recommend">
            <p>Crop Recommendations :</p>
            <h2>Strawberry</h2>
            <br />
            <p>Suitable Conditions :</p>
            <h3>Temperature : 20-30 C</h3>
            <h3>Air volume : 100 </h3>
            <h3>Terrain rigidity : 50 </h3>
            <br />
            <label htmlFor="text-input">Input</label>
            <br />
            <input
              type="text"
              name="text-input"
              placeholder="Input text here"
              onChange={(e) => {
                setData(e.target.value);
              }}
            />
          </div>
          <div className="buttons">
            <input type="button" value="Cancel" onClick={clearData} />
            <input type="button" value="Submit" onClick={sendData} />
          </div>
        </div>
      </div>
      <div className="recommendations_map">
        <div className="title">Recommended climate zones</div>
        <div className="map">
          <CustomMap />
        </div>
      </div>
    </div>
  );
}

export default Results;
