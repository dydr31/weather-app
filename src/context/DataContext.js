import { createContext } from "react";
import { useState } from "react";

export const DataContext = createContext({
  dataPoints: [
    {
      tMin: 0,
      tMax: 0,
      prcp: 0,
      prcp_propb: 0,
      time: new Date(),
      uv: 0,
      wcode: 0,
      wind: 0,
      wind_dir: 0,
    },
  ],
  setDataPoints: () => {},
  cityName: "Moscow",
  setCityName: () => {},
  lat: 55.741469,
  lon: 37.615561,
  setCoords: () => {},
});

export const DataContextProvider = (props) => {
  let savedCityName = localStorage.getItem('City Name')
  if (savedCityName === undefined){
    savedCityName = 'Moscow'
  }

  const [cityName, setCityName] = useState(savedCityName);

  let savedLat = localStorage.getItem('lat')
  if (savedLat === undefined){
    savedLat = 55.741469
    savedLon = 37.615561
  }
  const [lat, setLat] = useState(savedLat);
  let savedLon = localStorage.getItem('lon')
  const [lon, setLon] = useState(savedLon);

  const setCityNameHandler = (cityName) => {
    setCityName(cityName);
    localStorage.setItem('City Name', cityName)
  };

  const setCoords = (lat, lon) => {
    setLat(lat);
    setLon(lon);
    localStorage.setItem('lat', lat)
    localStorage.setItem('lon', lon)
  };

  const [dataPoints, setDataPoints] = useState([
    {
      tMin: 0,
      tMax: 0,
      prcp: 0,
      prcp_prob: 0,
      time: new Date(),
      uv: 0,
      wcode: 0,
      wind: 0,
      wind_dir: 0,
    },
  ]);

  const setDataPointsHandler = (data) => {
    setDataPoints(data);
  };

  const contextValue = {
    cityName,
    setCityName: setCityNameHandler,
    lat,
    lon,
    setCoords,
    dataPoints,
    setDataPoints: setDataPointsHandler,
  };

  return (
    <DataContext.Provider value={contextValue}>
      {props.children}
    </DataContext.Provider>
  );
};
