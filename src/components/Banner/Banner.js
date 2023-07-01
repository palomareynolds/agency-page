import React from "react";
import "./Banner.css";
import bannerImage from "./Illustration.png"


function Banner() {
    return (
        <div className="container">
            <div className="text">
                <h1>Lessons and insights</h1>
                <div className="green-text">
                    <h1>from 8 years</h1>
                </div>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button>Register</button>
            </div>
            <div className="banner-image">
                <img src={bannerImage}/>
            </div>

            


        </div>
    );
}

export default Banner;