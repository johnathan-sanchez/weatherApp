import { useEffect, useState } from "react";
import { LocationButton } from "../components/LocationButton";
import "./style.css";

export const Content= () =>{
  const getWeather = async (lat, lon) => {
    const response1 = await fetch(`https://api.weather.gov/points/${lat},${lon}`);
    const data1 = await response1.json();
    const response2 = await fetch(data1.properties.forecast);
    const data2 = await response2.json();
    return data2.properties.periods;
  };
  
  const handleGetLatLong = async () => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setLatLong({
      lat: position.coords.latitude.toFixed(2),
      long: position.coords.longitude.toFixed(2),
    });
  };
  
  const [periods,setPeriods]= useState([]);
  const [latLong, setLatLong] = useState({ lat: 40.71, long: -73.93 });
  const [location,setLocation]=useState("New York");
  
  useEffect(() => {
    const periods = getWeather(latLong.lat, latLong.long);
    setPeriods(periods);
  }, [latLong]);

  return(
      <>
      <div className="Forecast current-temperature">{periods.temperature}</div>
      <div className="Forecast location">{location}</div> 
      <LocationButton currentLocationHandler={handleGetLatLong}/>
      </>
  )
}
