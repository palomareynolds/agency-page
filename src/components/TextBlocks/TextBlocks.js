import React from "react";
import "./TextBlocks.css";
import Blocks from "./Blocks-component/Blocks";
import icon1 from "./Blocks-component/img/Icon.png";

function TextBlocks(props) {
    return (
        <div className="container-blocks">
            <div className="text-blocks">
                <h1>{props.title}</h1>
                <p>{props.text}</p>
            </div>
            

            <div className="blocks-component">
                <Blocks 
                    image={icon1} 
                    title="Membership Organisations"
                    text="Our membership management 
                    software provides full automation of membership 
                    renewals and payments"
                />
                 <Blocks 
                    image={icon1} 
                    title="Membership Organisations"
                    text="Our membership management 
                    software provides full automation of membership 
                    renewals and payments"
                />
                <Blocks 
                    image={icon1} 
                    title="Membership Organisations"
                    text="Our membership management 
                    software provides full automation of membership 
                    renewals and payments"
                />
            
            </div>
           
            
            
                    
               


        </div>

    );
}

export default TextBlocks;