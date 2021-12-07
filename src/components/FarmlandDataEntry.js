import React from "react";
import { useState } from "react";

function FarmlandDataEntry({ SubmitFarmData, error, farmDataItems }) {
  const [farmData, setFarmData] = useState({
    air_temperature_min: "",
    air_temperature_max: "",
    ground_temperature_min: "",
    ground_temperature_max: "",
    sunshine_min: "",
    sunshine_max: "",
    athmospheric_pressure_min: "",
    athmospheric_pressure_max: "",
    wind_min: "",
    wind_max: "",
    terrain_roughness_min: "",
    terrain_roughness_max: "",
    ilsa_min: "",
    ilsa_max: "",
    humidity_min: "",
    humidity_max: "",
    precipiation_min: "",
    precipiation_max: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    SubmitFarmData(farmData);
  };

  const farmDataEntryList = Object.entries(farmDataItems).map((key) => {
    let item = key[0];
    let name = key[1];
    let item_min = item + "_min";
    let item_max = item + "_max";
    let displayValue = "farmData." + item_max;

    return (
      <li className="farmList">
        <label htmlFor={item}>{name}</label>
        <input
          type="number"
          placeholder="0"
          name={item_min}
          onChange={(e) =>
            setFarmData({
              ...farmData,
              item: e.target.value,
            })
          }
        />
        <div>
          <p>-</p>
        </div>
        <input
          type="number"
          placeholder="0"
          name={item_max}
          onChange={(e) =>
            setFarmData({
              ...farmData,
              item_max: e.target.value,
            })
          }
        />
      </li>
    );
  });

  return (
    <div className="container">
      <div className="dataEntryTitle">
        <p>Farmland Data Entry</p>
      </div>
      <form id="farm-data-form" autoComplete="off" onSubmit={submitHandler}>
        {error !== "" ? <div className="error">{error}</div> : ""}
        <ul id="farm-data-table">{farmDataEntryList}</ul>
        <div className="row">
          <input type="submit" value="Search" />
        </div>
      </form>
    </div>
  );
}

export default FarmlandDataEntry;
