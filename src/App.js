import { LocationButton } from "./components/LocationButton";
import { BackgroundImage } from "./BackgroundImage";
import { Forecast } from "./components/Forecast";
import { useEffect, useState } from "react";
import { BackgroundImageSelector } from "./BackgroundImageSelector";
import { getWeather } from "./api/open-weather/getWeather";

function App() {
  const [location, setLocation] = useState("New York");
  const [backgroundImage, setBackgroundImage] = useState("village");
  const handleBackgroundImageThumbnailClick = (label) => {
    setBackgroundImage(label);
  };

  const [latLong, setLatLong] = useState({ lat: null, long: null });
  const handleGetLatLong = async () => {
    const position = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setLatLong({
      lat: position.coords.latitude.toFixed(2),
      long: position.coords.longitude.toFixed(2),
    });
  };

  const [periods, setPeriods] = useState([]);
  console.log(periods);

  useEffect(() => {
    const periods = getWeather(latLong.lat, latLong.long);
    setPeriods(periods);
  }, [latLong]);

  return (
    <div className="App">
      <button onClick={handleGetLatLong}>Get Lat/Long</button>
      <div>
        Current lat/long {latLong.lat}, {latLong.long}
      </div>
      <div>
        <h1>Periods</h1>
      </div>
      <BackgroundImageSelector
        onImageClick={handleBackgroundImageThumbnailClick}
      />
      <BackgroundImage weather={"Rainy"} image={backgroundImage} />
      <Forecast location={location} />
      <LocationButton />
    </div>
  );
}

export default App;
