import React, { useContext, useEffect, useState } from "react";
import WeeklyCard from "./WeeklyCard";
import WeeklyTodayCard from "./WeeklyTodayCard";
import Loading from "../UI/Loading";
import classes from "./Weekly.module.scss";
import { DataContext } from "../../context/DataContext";
import { getDataForNow, getWeatherData } from "../../util/getWeatherData";
import { StateContext } from "../../context/StateContext";

const DUMMY_DATA = {
  apparent_temperature: 0,
  precipitation: 0,
  precipitation_probability: 0,
  relativehumidity_2m: 0,
  surface_pressure: 0,
  time: new Date(),
  weathercode: 0,
  winddirection_10m: 0,
  windspeed_10m: 0,
};

const Weekly = () => {
  const [data, setData] = useState([]);
  const [firstElement, setFirstElement] = useState(DUMMY_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const { state } = useContext(StateContext);

  const { lat, lon, setDataPoints } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      let res = await getWeatherData(lat, lon);
      if (res !== undefined) {
        setData(res.slice(1, 7));

        setDataPoints(res);
      }
      setIsLoading(false);
      let todayRes = await getDataForNow(lat, lon);
      setFirstElement(todayRes);
    };
    getData();
  }, [lat]);

  return (
    <>
      {isLoading && state === "weekly" && <Loading />}
      {!isLoading && state === "weekly" && (
        <ul className={classes.list}>
          <WeeklyTodayCard data={firstElement} />
          {data.map((x) => (
            <WeeklyCard key={Math.random()} data={x} />
          ))}
        </ul>
      )}
    </>
  );
};

export default Weekly;
