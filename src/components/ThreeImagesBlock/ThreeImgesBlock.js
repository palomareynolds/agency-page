import React from "react";
import "./ThreeImagesBlock.css";
import OverlapImg from "./ImagesOverlapping/OverlapImg";



function ThreeImagesBlock(props) {
    return (
        <div className="threeImages-container">
            <div className="title">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div className="three-blocks">
                <OverlapImg/>

            </div>
        </div>

    );
}

export default ThreeImagesBlock;