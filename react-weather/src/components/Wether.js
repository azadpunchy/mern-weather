import React, { useState } from "react";
import ClearDay from "../images/day/clear_day.png";

const Weather = () => {
  const [search, setSearch] = useState("Faisalabad");
  // const [city, setCity] = useState(null);

  return (
    <>
      <div className="background_img"></div>
      <div className="container">
        <div className="main">
          <div className="search">
            <input
              type="search"
              placeholder="&#128269; Search City"
              value={search === "Faisalabad" ? "" : search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            {/* onChange city will be selected */}
          </div>
          <div className="weatherIcon">
            <img src={ClearDay} width="60px" alt="clear day" />
          </div>
          <div className="temprature">
            {/* this value is use to display degree Celcius &#8451;  */}
            <h3>37&#8451; </h3>
            <h2>Faisalabad</h2>
            <p>
              <span>max : 40&#8451; </span> || <span>min : 35&#8451; </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Weather;
