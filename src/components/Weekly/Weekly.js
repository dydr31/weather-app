import React, { useCallback, useContext, useEffect, useState } from "react";
import WeeklyCard from "./WeeklyCard";
import WeeklyTodayCard from "./WeeklyTodayCard";
import Loading from "../UI/Loading";
import "./Weekly.scss";
import { DataContext } from "../../context/DataContext";
import { getWeatherData } from "../../util/functions";

const Weekly = (props) => {
  const [data, setData] = useState([]);
  const [firstElement, setFirstElement] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const { lat, lon, dataPoints, setDataPoints } = useContext(DataContext);

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
    {/* {console.log(dataPoints)} */}
      {isLoading && <Loading />}
      {!isLoading && (
        <ul className="list">
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
