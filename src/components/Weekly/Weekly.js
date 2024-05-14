import React, { useContext, useEffect, useState } from "react";
import WeeklyCard from "./WeeklyCard";
import WeeklyTodayCard from "./WeeklyTodayCard";
import Loading from "../UI/Loading";
import classes from "./Weekly.module.scss";
import { DataContext } from "../../context/DataContext";
import { getWeatherData } from "../../util/getWeatherData";
import { StateContext } from "../../context/StateContext";

const Weekly = () => {
  const [data, setData] = useState([]);
  const [firstElement, setFirstElement] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {state} = useContext(StateContext)

  const { lat, lon, setDataPoints } = useContext(DataContext);

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true)
      let res =  await getWeatherData(lat, lon);
      if (res !== undefined) {
        setData(res.slice(1,7))
        setFirstElement(res[0])
        setDataPoints(res)
      }
      setIsLoading(false)
    };
    getData()
  }, [lat]);

  return (
    <>

     {isLoading && state === "weekly" && <Loading />}
      {!isLoading && state === "weekly" && (
        <div className={classes.container}>

        
        <ul className={classes.list}>
          <WeeklyTodayCard data={firstElement} />
          {data.map((x) => (
            <WeeklyCard key={Math.random()} data={x} />
          ))}
        </ul>
        </div>
      )}
    </>
  );
};

export default Weekly;
