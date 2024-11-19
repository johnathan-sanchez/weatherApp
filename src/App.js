import { LocationButton } from "./components/LocationButton";
import { BackgroundImage } from "./BackgroundImage"
import { Forecast } from "./components/Forecast"
import { useState } from "react";
import { BackgroundImageSelector} from "./BackgroundImageSelector"


function App() {
  const [location,setLocation]=useState("New York");
  const [backgroundImage,setBackgroundImage]=useState("village");
  const handleBackgroundImageThumbnailClick=(label)=>{
    setBackgroundImage(label);
  };
  return (
    <div className="App">
      <BackgroundImageSelector onImageClick={handleBackgroundImageThumbnailClick}/>
      <BackgroundImage weather={"Rainy"} image={backgroundImage}/>
      <Forecast location={location}/>
      <LocationButton/>
    </div>
  );
}

export default App;
