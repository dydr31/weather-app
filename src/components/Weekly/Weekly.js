import React, { useCallback, useEffect, useState } from "react";
import WeeklyCard from "./WeeklyCard";
import WeeklyTodayCard from "./WeeklyTodayCard";
import Loading from "../UI/Loading";
import "./Weekly.scss";

const Weekly = (props) => {
  const [data, setData] = useState([]);
  const [firstElement, setFirstElement] = useState({});
  const[isLoading, setIsLoading ] = useState(false)

  const getData = useCallback(async () => {
    setIsLoading(true)
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        props.coords.latitude +
        "&longitude=" +
        props.coords.longitude +
        "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,precipitation_probability_mean,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FMoscow"
    );
    const data = await response.json();
    console.log(data);

    let restructuredData = [];

    for (let key in data.daily.temperature_2m_min) {
      restructuredData.push({
        time: new Date(
          data.daily.time[key].slice(0, 4),
          data.daily.time[key].slice(5, 7) - 1,
          data.daily.time[key].slice(8, 10)
        ),

        tMin: Math.round(data.daily.temperature_2m_min[key]),
        tMax: Math.round(data.daily.temperature_2m_max[key]),
        prcp: data.daily.precipitation_sum[key],
        uv: data.daily.uv_index_max[key],
        weathercode: data.daily.weathercode[key],
        prcp_prob: data.daily.precipitation_probability_mean[key],
        wind: data.daily.windspeed_10m_max[key],
        wind_direction: data.daily.winddirection_10m_dominant[key],
      });
    }

    setFirstElement(restructuredData[0]);
    restructuredData.shift(0);
    setData(restructuredData);
    setIsLoading(false)
  });

  useEffect(() => {
    if (props.coords != undefined) {
      getData();
    }
  }, [props.coords]);

  return (
    <React.Fragment>
      

      {isLoading && <Loading/>}
      {!isLoading &&
      <ul className="list">
        <WeeklyTodayCard data={firstElement} isC={props.isC} />
        {data.map((x) => (
          <WeeklyCard key={Math.random()} data={x} />
        ))}
      </ul>}
    </React.Fragment>
  );
};

export default Weekly;
