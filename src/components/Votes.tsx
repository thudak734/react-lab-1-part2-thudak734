import React, { useState } from "react";
import AdDesigner from "./AdDesigner";

function Votes() {
    const [flavor, setFlavor] = useState("");
    // const [count, setCount] = useState(0);
    const [MoosetracksVotes, setMoosetracksVotes] = useState(0);
    const [StrawberryVotes, setStrawberryVotes] = useState(0);
    const [ChocolateVotes, setChocolateVotes] = useState(0);
    const [width, setWidth] = useState(0);
    let totalVotes = (MoosetracksVotes+StrawberryVotes+ChocolateVotes);
    let percentage = (totalVotes/100)*100;
    let MoosetracksPercentage = (MoosetracksVotes/totalVotes)*100
    let StrawberryPercentage = (StrawberryVotes/totalVotes)*100
    let ChocolatePercentage= (ChocolateVotes/totalVotes)*100
    
    const MooseTrackStyles ={
        width: MoosetracksPercentage+ "%",
        backgroundColor: "lightblue",
        height: "20px"
    };

    const StrawberryStyles ={
        width: StrawberryPercentage+ "%",
        backgroundColor: "pink",
        height: "20px"
    };

    const ChocolateStyles ={
        width: ChocolatePercentage+ "%",
        backgroundColor: "lightgreen",
        height: "20px"
    };

  

    return (
    
    <div className="Votes">
        <h2>Vote Here</h2>
    <button onClick ={() => setMoosetracksVotes((count) => count = MoosetracksVotes +1)}>Moose Tracks</button>
    <button onClick ={() => setStrawberryVotes((count) => count = StrawberryVotes +1)}>Strawberry</button>
    <button onClick ={() => setChocolateVotes((count) => count = ChocolateVotes +1)}>Chocolate</button>
    
    {totalVotes === 0 &&
    <div>No Votes Yet</div>
    }

    { MoosetracksVotes > 0 &&
    <p>Moosetracks: {MoosetracksVotes} ({Math.round(MoosetracksPercentage)}%)</p>
}
    <div className="MoosetracksBar" style={MooseTrackStyles}></div>  
    

    { StrawberryVotes > 0 &&
    <p>Strawberry: {StrawberryVotes} ({Math.round(StrawberryPercentage)}%)</p>
}
    <div className="StrawberryBar" style={StrawberryStyles}></div>


    { ChocolateVotes > 0 &&
    <p>Chocolate: {ChocolateVotes} ({Math.round(ChocolatePercentage)}%)</p>
}
    <div className="ChocolateBar" style={ChocolateStyles}></div>

    <div>Total Votes : {totalVotes}</div>
    </div>
    
    )
}


export default Votes