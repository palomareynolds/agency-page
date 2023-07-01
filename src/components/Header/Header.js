import React from "react";
import logo from "./Logo.png";
import "./Header.css";



function Header() {
    return (
        <div className="header">
            <div className="logo-image">
                <img src={logo} alt=""/>
            </div>
            <div className="header-tabs">
                <a className="header-tab" href="#">Home</a>
                <a className="header-tab" href="#">Features</a>
                <a className="header-tab" href="#">Community</a>
                <a className="header-tab" href="#">Blog</a>
                <a className="header-tab" href="#">Pricing</a>
                <div className="register-button">
                    <button>Register Now →</button>
                </div>
            </div>
        </div>
    );
}


export default Header;