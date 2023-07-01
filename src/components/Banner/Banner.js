import React from "react";
import "./Banner.css";
import bannerImage from "./Illustration.png"


function Banner(props) {
    return (
        <div className="container">
            <div className="text">
                <h1>{props.text1}</h1>
                <div className="green-text">
                    <h1>{props.text2}</h1>
                </div>
                <p>{props.text3}</p>
                <button>{props.button}</button>
            </div>
            <div className="banner-image">
                <img src={props.image}/>
            </div>

            


        </div>
    );
}

export default Banner;