import React from "react";
import './IconNumber.css';


function IconNumber(props) {
    return (
        <div className="icon-container">
            <img src={props.image}/>
            <div className="text-info">
                <h1>{props.numbers}</h1>
                <p>{props.subject}</p>
            </div>
        </div>

    );
}

export default IconNumber;