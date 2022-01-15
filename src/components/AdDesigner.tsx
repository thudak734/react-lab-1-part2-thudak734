import React, {useState} from "react";
import Ad from "./Ad";



export function AdDesigner() {
    let [flavor, setFlavor] = useState<string>("Choose a flavor!");
    let [theme, setTheme] = useState<boolean>(false);
    let [fontSize, setFontSize] = useState<number>(12);


    // let darkTheme = "";
    
    // if (theme){
    //     darkTheme = "grey";
    // }
    // const fontStyle ={
    //     fontSize: fontSize + "px"
    // }
        function AdStrawberry() {
            setFlavor((flavor = "Strawberry"));
        };
            function AdChocolate() {
                setFlavor((flavor = "Chocolate"));
            };

            return (

                <div className="AdDesigner" >
                    <h2>Ad Designer</h2>
                    <div>
                    <Ad flavor={flavor} fontSize={fontSize} darkTheme={theme}/>
                    
                    {/* <div className={"AdContainer" + darkTheme}>
                        <p>Vote For:</p>
                        <h3 style={{fontSize: fontSize + "px"}}>{flavor}</h3> */}
                    </div>
                    
                    <section className="support">
                        <h4>What to Support:</h4>
                        <button disabled = {flavor === "Moose Tracks"}onClick={()=>setFlavor ((flavor)=>flavor="Moose Tracks")}>Moose Tracks</button>
                        <button disabled = {flavor === "Strawberry"}onClick={AdStrawberry}>Strawberry</button>
                        <button disabled = {flavor === "Chocolate"}onClick={AdChocolate}>Chocolate</button>
                    </section>
                    
                    <section className="ColorTheme">
                        <h4>Color Theme:</h4>
                        
                        <button disabled={theme === false} onClick={() => setTheme(false)}>Light</button>
                        <button disabled={theme === true } onClick={() => setTheme(true)}>Dark</button>
                        
                       
                    </section>
                    <section>
                        
                        <h4>Font Size:</h4>
                        <div className = "fontButtons">
                        <button onClick={() => setFontSize((fontSize)=> fontSize - 1)}> Down </button>
                        <p>   {fontSize}   </p>
                        <button onClick={() => setFontSize((fontSize)=> fontSize + 1)}> Up </button>
                        </div>
                    </section>

                </div>
            );

        };

export default AdDesigner