import React from "react";
import { useState, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import FarmlandDataEntry from "./components/FarmlandDataEntry";
import SignupPage from "./components/SignupPage";
import Results from "./components/Results";

function App() {
  const adminUser = {
    name: "admin",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "test" });
  const [error, setError] = useState("");
  const [signupPage, setSignupPage] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(null);
  const [apiData, setApiData] = useState({
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
    air_temperature_min: "10",
    air_temperature_max: "",
  });

  const farmDataItems = {
    air_temperature: "Air Temperature (°C)",
    ground_temperature: "Ground Temperature (°C)",
    sunshine: "Sunshine (%)",
    athmospheric_pressure: "Athmospheric Pressure",
    wind: "Wind speed (km/h)",
    terrain_roughness: "Terrain roughness",
    ilsa: "Ilsa",
    humidity: "Humidity (%)",
    precipiation: "Precipitation (%)",
  };

  const Login = (details) => {
    if (
      details.name === adminUser.name &&
      details.password === adminUser.password
    ) {
      setUser({
        name: details.name,
      });
      setError("");
    } else {
      setError("Please try again!");
    }
  };

  const SubmitFarmData = (farmData) => {
    setApiData({
      ground_temperature_min: farmData.ground_temperature_min,
      ground_temperature_max: farmData.ground_temperature_max,
      sunshine_min: farmData.sunshine_min,
      sunshine_max: farmData.sunshine_max,
      athmospheric_pressure_min: farmData.athmospheric_pressure_min,
      athmospheric_pressure_max: farmData.athmospheric_pressure_max,
      wind_min: farmData.wind_min,
      wind_max: farmData.wind_max,
      terrain_roughness_min: farmData.terrain_roughness_min,
      terrain_roughness_max: farmData.terrain_roughness_max,
      ilsa_min: farmData.ilsa_min,
      ilsa_max: farmData.ilsa_max,
      humidity_min: farmData.humidity_min,
      humidity_max: farmData.humidity_max,
      precipiation_min: farmData.precipiation_min,
      precipiation_max: farmData.precipiation_max,
      air_temperature_min: farmData.air_temperature_min,
      air_temperature_max: farmData.air_temperature_max,
    });
    setDataLoaded("complete");
  };

  useEffect(() => {
    console.log(apiData);
  }, [apiData]);

  const Signup = (newUserData) => {
    if (
      newUserData.name &&
      newUserData.password &&
      newUserData.password === newUserData.passwordConfirm
    ) {
      alert("New user successfully created");
      setSignupPage("");
      setError("");
    } else {
      setError("Please try again");
    }
  };

  // async function SubmitFarmData(farmData) {
  //   let cityname =
  //     "https://api.openweathermap.org/data/2.5/weather?q=" +
  //     searchValues.city +
  //     "&appid=3a6db61ccae0f26e0883affe7aaa929e";
  //   const data = await fetch(cityname)
  //     .then((res) => res.json())
  //     .then((result) => {
  //       setError(null);
  //       setApiData(result);
  //     })
  //     .catch((error) => {
  //       setError(error);
  //     });
  // }

  const Logout = () => {
    setUser({ name: "", email: "" });
  };

  return (
    <div className="App">
      {user.name && dataLoaded == null && signupPage === null && (
        <div id="mainCont">
          <div className="welcome">
            <h2>
              Welcome, <span>{user.name}</span>
            </h2>
            <button onClick={Logout}>Logout</button>
          </div>
          <div className="enterdata">
            <FarmlandDataEntry
              SubmitFarmData={SubmitFarmData}
              error={error}
              setApi={setApiData}
              farmDataItems={farmDataItems}
            />
          </div>
        </div>
      )}
      {user.name === "" && dataLoaded === null && signupPage === null && (
        <LoginForm Login={Login} error={error} setSignupPage={setSignupPage} />
      )}
      {signupPage && (
        <SignupPage
          Signup={Signup}
          error={error}
          setSignupPage={setSignupPage}
        />
      )}
      {dataLoaded && (
        <Results
          apiData={apiData}
          setApiData={setApiData}
          dataLoaded={dataLoaded}
          setDataLoaded={setDataLoaded}
        />
      )}
    </div>
  );
}

export default App;
