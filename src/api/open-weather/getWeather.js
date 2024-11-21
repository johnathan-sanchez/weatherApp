//api.weather.gov/points/{latitude},{longitude}
// const API_KEY = "4b8429642d1570d69d725991ec0a0494";

export const getWeather = async (lat, lon) => {
  const response1 = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
  const data1 = await response1.json();
  const response2 = await fetch(data1.properties.forecast);
  const data2 = await response2.json();
  return data2.properties.periods;
};
