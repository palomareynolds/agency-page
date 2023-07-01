import React from "react";
import "./Blocks.css";


function Blocks(props) {
    return (
        <div className="blocks">
            <img src={props.image}/>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
        </div>    


    );
}

export default Blocks;


