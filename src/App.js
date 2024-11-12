import { LocationButton } from "./components/LocationButton";
import { Landscape } from "./components/Background/components/Landscape"
import { Forecast } from "./components/Forecast"
import { useState } from "react";

function App() {
  const [location,setLocation]=useState("New York");
  return (
    <div className="App">
      <Landscape weather={"Rainy"}/>
      <Forecast location={location}/>
      <LocationButton/>
    </div>
  );
}

export default App;
