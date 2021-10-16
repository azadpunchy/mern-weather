import React, { useState, useEffect } from "react";
import Api from "../components/api/Api";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("faisalabad");

  // only contain main data from api
  const [res, setRes] = useState({});
  const [err, setErr] = useState();
  const [data, setData] = useState({});
  const [toggle, setToggle] = useState();

  useEffect(() => {
    try {
      const fetchapi = async () => {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=675a0dbdd9e7aaf0ec4db2b587eb87aa`;
        const response = await fetch(URL);
        const resJson = await response.json();
        setRes(resJson.main);
        setErr(resJson);

        // console.log(resJson.weather[0].main);
        if (response.status === 200) {
          setData(resJson.weather[0]);

          const icons = data.icon;

          switch (icons) {
            case "01d":
              setToggle(Api.dclear);
              break;
            case "02d":
              setToggle(Api.dfewClouds);
              break;
            case "03d":
              setToggle(Api.cloudy);
              break;
            case "04d":
              setToggle(Api.dbrokenClouds);
              break;
            case "09d":
              setToggle(Api.showerRain);
              break;
            case "10d":
              setToggle(Api.drain);
              break;
            case "11d":
              setToggle(Api.dthunderStorm);
              break;
            case "13d":
              setToggle(Api.dsnow);
              break;
            case "50d":
              setToggle(Api.dmist);
              break;
            case "01n":
              setToggle(Api.nclear);
              break;
            case "02n":
              setToggle(Api.nfewClouds);
              break;
            case "03n":
              setToggle(Api.cloudy);
              break;
            case "04n":
              setToggle(Api.nbrokenClouds);
              break;
            case "09n":
              setToggle(Api.showerRain);
              break;
            case "10n":
              setToggle(Api.nrain);
              break;
            case "11n":
              setToggle(Api.nthunderStorm);
              break;
            case "13n":
              setToggle(Api.nsnow);
              break;
            case "50n":
              setToggle(Api.nmist);
              break;
            default:
              break;
          }
        }
      };

      fetchapi();
    } catch (error) {
      console.log(error.message);
    }
  }, [city, data.icon]);

  // console.log(err);
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
            <button
              className="btn"
              onClick={() => {
                setCity(search);
                setSearch("");
              }}
            >
              Search
            </button>
            {/* tooltip on icon */}
          </div>
          {res ? (
            <>
              <div className="weatherIcon">
                <img src={toggle} width="60px" alt="clear day" />
                <span> {data.description} </span>
              </div>
              <div className="temprature">
                {/* this value is use to display degree Celcius &#8451;  */}

                <h3>
                  {res.temp}
                  &#8451;
                </h3>

                <h2>
                  <span className="feel">City : </span>
                  {city}
                </h2>
                <p>
                  <span>max : {res.temp_max}&#8451; </span> ||{" "}
                  <span>min : {res.temp_min}&#8451; </span>
                </p>
                <p>
                  <span className="feel">
                    Feels Like : {res.feels_like}&#8451;
                  </span>{" "}
                  || <span className="feel">Humidity : {res.humidity}</span>
                </p>
              </div>
            </>
          ) : err.cod === "404" ? (
            <p> {err.message} </p>
          ) : (
            "data not found"
          )}
        </div>
      </div>
    </>
  );
};

export default Weather;
