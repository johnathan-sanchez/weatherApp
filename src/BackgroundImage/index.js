import React, { useState } from "react";
import "./styles.css";
import { BackgroundImageSelector } from "../BackgroundImageSelector";


export const BackgroundImage= ()=>{
    const handleBackgroundImageThumbnailClick=(label)=>{
        setBackgroundImage(label);
    };
    const [backgroundImage,setBackgroundImage]=useState("village");
    return(
        <>
        <BackgroundImageSelector onImageClick={handleBackgroundImageThumbnailClick}/>
        
        <img className="BackgroundImage_background-image" src={'./assets/'+backgroundImage+'.png'}></img>
        </>
    )
}