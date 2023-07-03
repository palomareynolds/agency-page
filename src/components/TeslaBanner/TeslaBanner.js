import React from "react"; 
import Icons from "../OurClients/Icons-Banner/Icons";
import icon1 from "../OurClients/icons-img/Logo.png";
import icon2 from "../OurClients/icons-img/Logo (1).png";
import icon3 from "../OurClients/icons-img/Logo (2).png";
import icon4 from "../OurClients/icons-img/Logo (3).png";
import icon5 from "../OurClients/icons-img/Logo (4).png";
import icon6 from "../OurClients/icons-img/Logo (5).png";

function TeslaBanner(props) {
    return (
        <div className="tesla-container">
            <img src={props.image} alt="#"/>
            <div className="tesla-text">
                {props.text}
                {props.author}
                {props.company}
            </div>  
            <div className="icons">
                <Icons image={icon1}/>
                <Icons image={icon2}/>
                <Icons image={icon3}/>
                <Icons image={icon4}/>
                <Icons image={icon5}/>
                <Icons image={icon6}/>
            </div>    
        </div>
        
    );    


}

export default TeslaBanner;