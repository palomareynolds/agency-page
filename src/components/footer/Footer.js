import React from "react";
import "./Footer.css";
import logo from "./Logo.png";
import input from "./Email Input Field.png";
import links from "./Social Links.png";


function Footer(props) {
    return (
        <div className="footer-container">
            <div className="up-footer">
                <h1>{props.title}</h1>
                <button>{props.button}</button>
            </div>

            <div className="black-footer">
                <div className="logo-footer">
                    <img src={logo} alt="#"/>
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>
                    <div className="icons-footer">
                        <img src={links} alt="#"/>
                        
                    </div>
                </div>
                <div className="company-col">
                    <h3>Company</h3>
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                </div>
                <div className="support-col">
                    <h3>Support</h3>
                    <a href="#">Help center</a>
                    <a href="#">Terms of service</a>
                    <a href="#">Legal</a>
                    <a href="#">Privacy policy</a>
                    <a href="#">Status</a>
                </div>
                <div className="update-col">
                    <h3>Stay up to date</h3>
                    <img src={input} alt="#"/>
               
                </div>

            </div>


        </div>


    );
}

export default Footer;