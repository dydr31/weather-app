import React, { useCallback, useState, useEffect } from "react";
import DailyCard from "./DailyCard";
import classes from "./Daily.module.scss";
import AverageParametersCard from "./AverageParametersCard";

function getAverage(data) {
  let avg_temperature_2m = 0;
  let avg_apparent_temperature = 0;
  let precipitation = 0;
  let precipitation_probability = 0;
  let relativehumidity_2m = 0;
  let surface_pressure = 0;
  let winddirection_10m = 0;
  let windspeed_10m = 0;
  for (let key in data) {
    avg_temperature_2m = avg_temperature_2m + data[key].temperature_2m / 6;
    avg_apparent_temperature =
      avg_apparent_temperature + data[key].apparent_temperature / 6;
    precipitation = precipitation + data[key].precipitation / 6;
    precipitation_probability =
      precipitation_probability + data[key].precipitation_probability / 6;
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
    relativehumidity_2m: Math.round(relativehumidity_2m / 6),
    surface_pressure: Math.round(0.750062 * surface_pressure / 6),
    winddirection_10m: Math.round(winddirection_10m / 6),
    windspeed_10m: Math.round((windspeed_10m * 10) / 6) / 10,
  };
  console.log(averageParameters);
  return averageParameters;
}


const Daily = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);
  const [morning, setMorning] = useState([]);
  const [day, setDay] = useState([]);
  const [evening, setEvening] = useState([])
  const [night, setNight] = useState([])

  const getData = useCallback(async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        props.coords.latitude +
        "&longitude=" +
        props.coords.longitude +
        "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,surface_pressure,windspeed_10m,winddirection_10m"
    );
    const data = await response.json();
    console.log(data);

    let restructuredData = [];
    let todayData = [];

    let morningData = [];
    let dayData = [];
    let eveningData = [];
    let nightData = [];

    for (let key in data.hourly.temperature_2m) {
      restructuredData.push({
        time: new Date(
          data.hourly.time[key].slice(0, 4),
          data.hourly.time[key].slice(5, 7) - 1,
          data.hourly.time[key].slice(8, 10),
          data.hourly.time[key].slice(11, 13)
        ),
        apparent_temperature: data.hourly.apparent_temperature[key],
        precipitation: data.hourly.precipitation[key],
        precipitation_probability: data.hourly.precipitation_probability[key],
        relativehumidity_2m: data.hourly.relativehumidity_2m[key],
        surface_pressure: data.hourly.surface_pressure[key],
        temperature_2m: data.hourly.temperature_2m[key],
        weathercode: data.hourly.weathercode[key],
        winddirection_10m: data.hourly.winddirection_10m[key],
        windspeed_10m: data.hourly.windspeed_10m[key],
      });
    }
    for (let i = 0; i < 24; i++) {
      todayData.push(restructuredData[i]);
    }
    for (let i = 6; i <= 11; i++) {
      morningData.push(restructuredData[i]);
    }
    for (let i = 12; i <= 17; i++) {
      dayData.push(restructuredData[i]);
    }
    for (let i = 18; i<= 23; i++) {
        eveningData.push(restructuredData[i])
    }
    for (let i = 24; i<= 29; i++) {
        nightData.push(restructuredData[i])
    }

    setData(todayData);
    setMorning(morningData);
    setDay(dayData);
    setEvening(eveningData)
    setNight(nightData)

    setIsLoading(false);
  });
  useEffect(() => {
    if (props.coords != undefined) {
      getData();
    }
  }, [props.coords]);

  {
    console.log(day);
  }
  {
    getAverage(morning);
  }

  return (
    <>
      {/* <ul className={classes.daily}>
        {data.map((x) => (
          <DailyCard key={Math.random()} data={x} />
        ))}
      </ul> */}
      <ul className={classes.averages}>
      <ul className={classes.list}>
        <li>feels like</li>
            <li className={classes.prcp}>precipitations</li>
            <li className={classes.humidity}>humidity</li>
            <li className={classes.pressure}>pressure</li>
            <li className={classes.wind}>wind</li>

        </ul>

        <AverageParametersCard data={getAverage(morning)} time={'Morning'}/>
        <AverageParametersCard data={getAverage(day)} time={'Day'}/>
        <AverageParametersCard data={getAverage(evening)} time={'Evening'}/>
        <AverageParametersCard data={getAverage(night)} time={'Night'}/>
      </ul>
    </>
  );
};

export default Daily;
