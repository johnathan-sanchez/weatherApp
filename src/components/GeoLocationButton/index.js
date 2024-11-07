import "./styles.css";
import { useState } from "react";

export const GeoLocationButton = () => {
  const [geolocation, setGeolocation] = useState({ latitude: 0, longitude: 0 });

  const handleClick = () => {
    // Request the user's location from the browser
    navigator.geolocation.getCurrentPosition((position) => {
      setGeolocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  };

  return (
    <div className="geo-location">
      <button className="geo-location_button" onClick={handleClick}>
        Use My Location
      </button>
      <span className="geo-location_label">
        Current latitude: {geolocation.latitude}
      </span>
      <span className="geo-location_label">
        Current longitude: {geolocation.longitude}
      </span>
    </div>
  );
};
