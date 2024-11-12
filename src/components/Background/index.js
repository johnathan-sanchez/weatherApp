import { useState } from "react";
import { EditButton } from "./components/EditButton"
import { Landscape } from "./components/Landscape";

export const Background = () => {
    const [index,setIndex]=useState(0);
    return(
        <div>
            <Landscape />
            <EditButton/>
        </div>
        
    )
}