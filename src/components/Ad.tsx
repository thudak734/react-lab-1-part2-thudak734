import exp from "constants";
import React from "react";
import AdDesigner from "./AdDesigner";
import './Ad.css';

interface Props{
    flavor:string,
    fontSize:number,
    darkTheme:boolean
}

const Ad = ({flavor, fontSize, darkTheme}:Props) => {


    return (
        <div className={`Ad ${darkTheme ? "dark" : "" }`}>
                        <p>Vote For:</p>
                        <h3 style={{fontSize: fontSize + "px"}}>{flavor}</h3>
                    </div>
    )
}

export default Ad