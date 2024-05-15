export const getWeatherData = async (lat, lon) => {
  try {
    const response = await fetch(
      "https://api.open-meteo.com/v1/forecast?latitude=" +
        lat +
        "&longitude=" +
        lon +
        "&daily=weathercode,temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,precipitation_probability_mean,windspeed_10m_max,winddirection_10m_dominant&timezone=Europe%2FMoscow"
    );
    const data = await response.json();
    // console.log(data);
    // console.log(data);

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
        wcode: data.daily.weathercode[key],
        prcp_prob: data.daily.precipitation_probability_mean[key],
        wind: data.daily.windspeed_10m_max[key],
        wind_dir: data.daily.winddirection_10m_dominant[key],
      });
    }

    return restructuredData;
  } catch (err) {
    console.error("error getting weather data using open-meteo api");
  }
};

export const getWeatherDataForTheWeek = (async (lat, lon) => {
  
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,surface_pressure,windspeed_10m,winddirection_10m"
  );
  const data = await response.json();
  // console.log(data);

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

//   console.log(restructuredData);
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
  return restructuredData
  
});

export const getDataForNow = async (lat, lon) => {
  const response = await fetch(
    "https://api.open-meteo.com/v1/forecast?latitude=" +
      lat +
      "&longitude=" +
      lon +
      "&hourly=temperature_2m,relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,weathercode,surface_pressure,windspeed_10m,winddirection_10m"
  );
  const data = await response.json();
  let hour = (new Date ()).getHours()
  
  // console.log(hour)
  let key = hour
  let result = {
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
  }
  // console.log(result)
  return result
}
