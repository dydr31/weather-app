import React, { useCallback, useState, useEffect, useContext } from "react";
import classes from "./Daily.module.scss";
import AverageParametersCard from "./AverageParametersCard";

import { getWeatherDataForTheWeek } from "../../util/getWeatherData";
import { DataContext } from "../../context/DataContext";
import Loading from "../UI/Loading";
import { StateContext } from "../../context/StateContext";

function getAverage(data, n) {
  let avg_temperature_2m = 0;
  let avg_apparent_temperature = 0;
  let precipitation = 0;
  let precipitation_probability = 0;
  let relativehumidity_2m = 0;
  let surface_pressure = 0;
  let winddirection_10m = 0;
  let windspeed_10m = 0;
  for (let key in data) {
    avg_temperature_2m = avg_temperature_2m + data[key].temperature_2m / n;
    avg_apparent_temperature =
      avg_apparent_temperature + data[key].apparent_temperature / n;
    precipitation = precipitation + data[key].precipitation / n;
    precipitation_probability =
      precipitation_probability + data[key].precipitation_probability / n;
    relativehumidity_2m = relativehumidity_2m + data[key].relativehumidity_2m;
    surface_pressure = surface_pressure + data[key].surface_pressure;
    // weathercode: data.hourly.weathercode[key]
    winddirection_10m = winddirection_10m + data[key].winddirection_10m;
    windspeed_10m = data[key].windspeed_10m;
  }
  let averageParameters = {
    avg_temperature_2m: Math.round(avg_temperature_2m),
    avg_apparent_temperature: Math.round(avg_apparent_temperature),
    precipitation: Math.round(precipitation),
    precipitation_probability: Math.round(precipitation_probability),
    relativehumidity_2m: Math.round(relativehumidity_2m / n),
    surface_pressure: Math.round((0.750062 * surface_pressure) / n),
    winddirection_10m: Math.round(winddirection_10m / n),
    windspeed_10m: Math.round((windspeed_10m * 10) / n) / 10,
  };
  // console.log(averageParameters);
  return averageParameters;
}

const Daily = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [morning, setMorning] = useState([]);
  const [day, setDay] = useState([]);
  const [evening, setEvening] = useState([]);
  const [night, setNight] = useState([]);
  const { lat, lon } = useContext(DataContext);
  const {state} = useContext(StateContext)

  useEffect(() => {
    setIsLoading(true);
    const getDetailedData = async () => {
      if (lat !== 0) {
        let detailedData = await getWeatherDataForTheWeek(lat, lon);
        setData(detailedData);
        setMorning(detailedData.slice(0, 8));
        setDay(detailedData.slice(9, 14));
        setEvening(detailedData.slice(15, 20));
        setNight(detailedData.slice(21, 29));
      }
    };
    getDetailedData();
    setIsLoading(false)
  }, [lat]);

  return (
    <>

      {isLoading && state === "daily" &&<Loading/>}
      {!isLoading && state === "daily" && (
        <>
       
        <ul className={classes.averages}>
          <ul className={classes.list}>
            <li>feels like</li>
            <li className={classes.prcp}>precipitations</li>
            <li className={classes.humidity}>humidity</li>
            <li className={classes.pressure}>pressure</li>
            <li className={classes.wind}>wind</li>
          </ul>

          <AverageParametersCard data={getAverage(morning, 8)} time={"Morning"} />
          <AverageParametersCard data={getAverage(day, 5)} time={"Day"} />
          <AverageParametersCard data={getAverage(evening, 5)} time={"Evening"} />
          <AverageParametersCard data={getAverage(night, 8)} time={"Night"} />
        </ul>
        </>
      )}
    </>
  );
};

export default Daily;
