import React from "react";
import "./Icons.css";


function Icons(props) {
    return (
        <div className="icons">
            <a href="#"><img src={props.image} alt=""/></a>

        </div>
    );
}

export default Icons;