import React from "react";
import "./ImageText.css";


function ImageText(props) {
    return (
        <div className="container-ImageText">
            <div className="ImageText-image">
                <img src={props.image}/>
            </div>
            <div className="title">
                <h1>{props.text1}</h1>
                <p className="paragraph">{props.text2}</p>
                <button>{props.button}</button>
            </div>
        </div>
    );
}

export default ImageText;