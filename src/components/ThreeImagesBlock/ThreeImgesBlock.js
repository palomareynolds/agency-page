import React from "react";
import "./ThreeImagesBlock.css";


function ThreeImagesBlock(props) {
    return (
        <div className="threeImages-container">
            <div className="title">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            <div className="three-images">
                <div className="threeImages">
                    <div className="img">
                        <img src={props.image}/>
                    </div>
                    <div className="imageText">
                        {props.imageText}
                        <div className="link">
                            {props.link}
                        </div>
                    </div>
                    
                </div> 
                <div className="threeImages">
                    <div className="img">
                        <img src={props.image}/>
                    </div>
                    <div className="imageText">
                        {props.imageText}
                        <div className="link">
                            {props.link}
                        </div>
                    </div>
                </div>    
                <div className="threeImages">
                    <div className="img">
                        <img src={props.image}/>
                    </div>
                    <div className="imageText">
                        {props.imageText}
                        <div className="link">
                            {props.link}
                        </div>
                    </div>
                </div> 
            </div>
        </div>

    );
}

export default ThreeImagesBlock;