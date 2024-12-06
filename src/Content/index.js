import { useEffect, useState } from "react";
import { LocationButton } from "../components/LocationButton";
import "./style.css";

// This is a pure function. It has no side effects and does not rely on any
// external variables. Because of that, we don't need to keep it in the body
// of the component. It could be used anywhere.
const getLocationStringFromData1 = (data1) => {
  const city = data1.properties.relativeLocation.properties.city;
  const state = data1.properties.relativeLocation.properties.state;
  return `${city}, ${state}`;
};

export const Content = () => {
  // STATE
  const [periods, setPeriods] = useState([]);
  const [latLong, setLatLong] = useState(undefined);
  const [locationString, setLocationString] = useState("");

  // EFFECTS AND DATA FETCHING
  useEffect(() => {
    if (latLong === undefined) return; // GUARD
    getWeatherPeriods(latLong.lat, latLong.long);
  }, [latLong]);

  const getWeatherPeriods = async (lat, lon) => {
    const response1 = await fetch(
      `https://api.weather.gov/points/${lat},${lon}`
    );
    const data1 = await response1.json();
    const locationString = getLocationStringFromData1(data1);
    setLocationString(locationString);
    const response2 = await fetch(data1.properties.forecast);
    const data2 = await response2.json();
    setPeriods(data2.properties.periods);
  };

  // EVENT HANDLERS (HANDLE UI INTERACTION)
  const handleGetLatLong = async () => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    setLatLong({
      lat: position.coords.latitude.toFixed(2),
      long: position.coords.longitude.toFixed(2),
    });
  };

  // DERIVED STATE
  const currentTemperature =
    periods.length > 0 ? String(periods[0].temperature) : "Loading...";

  const displayedTemperature =
    periods.length > 0 ? `${currentTemperature}°F` : "";

  return (
    <>
      <div className="Forecast current-temperature">{displayedTemperature}</div>
      <div className="Forecast location current-location">{locationString}</div>
      <LocationButton currentLocationHandler={handleGetLatLong} />
    </>
  );
};
