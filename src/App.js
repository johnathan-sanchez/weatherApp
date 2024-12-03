import { LocationButton } from "./components/LocationButton";
import { BackgroundImage } from "./BackgroundImage";
import { Content } from "./Content";
import { useState } from "react";
import { BackgroundImageSelector} from "./BackgroundImageSelector";
import {Weather} from "./api/Weather";
import "./App.css";


function App() {

  return (
    <div className="App">
      <BackgroundImage/>
      <Content/>
    </div>
  );
}

export default App;
