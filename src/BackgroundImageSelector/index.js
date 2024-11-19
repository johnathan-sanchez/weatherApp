import "./styles.css";
import React, { useState } from "react";

const backgroundImageOptions = [{ label: "city", path: "./assets/city.png" },
{ label: "mountain", path: "./assets/mountain.png" },
{ label: "sea", path: "./assets/sea.png" },
{ label: "village", path: "./assets/village.png" }];

export const BackgroundImageSelector = ({onImageClick}) => {
    const [isVisible,setVisibility]=useState(false);
    const toggleVisibility = () =>{
        setVisibility((prev)=>!prev);
    };
    return (
        <>
        <div className="toggle-button" style={{ height: "30px", width: "30px", backgroundColor: "red" }} onClick={toggleVisibility}>select</div>
        {isVisible &&(
            <div className="selection-preview">
            {backgroundImageOptions.map((option) => {
                return <div key={option.name} className="background-image-selector__root" onClick={()=>onImageClick(option.label)}>
                    <img src={option.path} className="background-image-selector__thumbnail" ></img>
                    <span className="background-image-selector__label">{option.label}</span>
                </div>
            })}
            </div>
        )}
        
        </>
    )
}
