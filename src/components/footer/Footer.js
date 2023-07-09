import React from "react";
import "./Footer.css";


function Footer(props) {
    return (
        <div className="footer-container">
            <div className="up-footer">
                <h1>{props.title}</h1>
                <button>{props.button}</button>
            </div>

            <div className="black-footer">
                <div className="logo-footer">
                    <img src="#" alt="#"/>
                    <p>Copyright © 2020 Landify UI Kit.</p>
                    <p>All rights reserved</p>
                    <div className="icons-footer">
                        <img src="#" alt="#"/>
                        <img src="#" alt="#"/>
                        <img src="#" alt="#"/>
                        <img src="#" alt="#"/>
                    </div>
                </div>
                <div className="columns">

                    
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
                    <a href="#">About us</a>
                    <a href="#">Blog</a>
                    <a href="#">Contact us</a>
                    <a href="#">Pricing</a>
                    <a href="#">Testimonials</a>
                </div>
                <div className="update-col">
                    <h3>Stay up to date</h3>
               
                </div>

            </div>


        </div>


    );
}

export default Footer;