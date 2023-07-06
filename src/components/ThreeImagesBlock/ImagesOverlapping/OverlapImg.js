import React from "react";
import "./OverlapImg.css";
import img1 from "../image18.png";
import img2 from "../image19.png";
import img3 from "../image20.png";



function OverlapImg(props) {
    return (
        <div className="three-images">
            <div className="threeImages">
                <div className="img1">
                    <img src={img1}/>
                </div>
                <div className="imageText">
                    <p>{props.title}</p>
                    <div className="link">
                        <p>Readmore →</p>
                    </div>
                </div>
            </div>
            <div className="threeImages">
                <div className="img2">
                    <img src={img2}/>
                </div>
                <div className="imageText">
                    <p>{props.title}</p>
                    <div className="link">
                        <p>Readmore →</p>
                    </div>
                </div>
            </div>
            <div className="threeImages">
                <div className="img3">
                    <img src={img3}/>
                </div>
                <div className="imageText">
                    <p>{props.title}</p>
                    <div className="link">
                        <p>Readmore →</p>
                    </div>
                </div>
            </div>
        </div> 
    );
}

export default OverlapImg;