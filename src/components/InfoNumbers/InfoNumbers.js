import React from "react";
import './InfoNumbers.css';
import IconNumber from "./IconNumber-component/IconNumber";
import members from "./IconNumber-component/img/Vector.png";
import clubs from "./IconNumber-component/img/Vector (3).png";
import bookings from "./IconNumber-component/img/Vector (1).png";
import payments from "./IconNumber-component/img/Vector (2).png";



function InfoNumbers() {
    return (
        <div className="container-numbers">
            <div className="text">
                <h1>Helping a local</h1>
                <div className="green-text1">
                    <h1>business reinvest itself</h1>
                </div>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className="member-numbers">
                <div>
                    <IconNumber image={members} numbers="2,245,341" subject="Members"/>
                    <IconNumber image={clubs} numbers="46,328" subject="Clubs"/>
                </div>
                <div >
                    <IconNumber image={bookings} numbers="828,867" subject="Event Bookings"/>
                    <IconNumber image={payments} numbers="1,926,436" subject="Payments"/>
                </div>
            </div>

        </div>
    );
}


export default InfoNumbers;