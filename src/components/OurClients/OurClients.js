import React from "react";
import Icons from "./Icons-Banner/Icons";
import "./OurClients.css";
import icon1 from "./icons-img/Logo.png";
import icon2 from "./icons-img/Logo (1).png";
import icon3 from "./icons-img/Logo (2).png";
import icon4 from "./icons-img/Logo (3).png";
import icon5 from "./icons-img/Logo (4).png";
import icon6 from "./icons-img/Logo (5).png";
import icon7 from "./icons-img/Logo (6).png";


function OurClients() {
    return (
        <div className="container-clients">
            <h1>Our Clients</h1>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className="icons">
                <Icons image={icon1}/>
                <Icons image={icon2}/>
                <Icons image={icon3}/>
                <Icons image={icon4}/>
                <Icons image={icon5}/>
                <Icons image={icon6}/>
                <Icons image={icon7}/>
            </div>
        </div>
        
    )
}

export default OurClients;