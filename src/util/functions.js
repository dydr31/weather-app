export async function getCities(cityName) {
    const response = await fetch(
      "https://geocode.maps.co/search?q=" +
        cityName +
        "&api_key=660be60cb2958849153012guo69110b"
    );
  
    if (response.ok) {
      const data = await response.json();
  
      if (data.length > 0) {
        console.log(data);
        let restructuredData = [];
        for (let key in data) {
          restructuredData.push({
            name: data[key].display_name,
            lat: Number(data[key].lat),
            lon: Number(data[key].lon),
          });
        }
        console.group(restructuredData);
        return restructuredData;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  
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
  
  export async function getLocation() {
    try {
      let res = await navigator.geolocation.getCurrentPosition((data) => {
        console.log(data);
        return data;
        return {
          lat: Math.round(data.coords.latitude * 100) / 100,
          lon: Math.round(data.coords.longitude * 100) / 100,
        };
      });
  
      setTimeout(() => {
        console.log(res);
        return res;
      }, 5000);
    } catch (err) {
      console.error(err);
    }
  }