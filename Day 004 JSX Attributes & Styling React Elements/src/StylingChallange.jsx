//Show a single h1 that says "Good morning " if between midnight or 
//"Good afternoon" if between 12PM adn 6PM or
//"Good Evening" if between 6PM and midnight.
//Apply the "heading" style in style.css
//Dynamically change the color of h1 using inline css
//Morning = red , Afternnon = green , night = blue. 


import React from "react";
import './style.css'

function ChallangeStyle(){
    const date = new Date();
    const CurrentTime = date.getHours();
    let greeting;
    const customstyle = {
        color:""
    }
    if(CurrentTime < 12){
        greeting = "Good Morning";
        customstyle.color = "red";
    }
    else if(CurrentTime < 18){
        greeting = "Good Afternoon";
        customstyle.color = "green";
    }
    else{
        greeting = "Good Night";
        customstyle.color = "blue";
    }
    return(
        <div>
            <h1 className="challangeheading" style={customstyle}>{greeting}</h1>
        </div>
    )
}
export default ChallangeStyle;