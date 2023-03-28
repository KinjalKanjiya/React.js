//Through component
//Show a single h1 that says "Good morning " if between midnight or 
//"Good afternoon" if between 12PM adn 6PM or
//"Good Evening" if between 6PM and midnight.
//Apply the "heading" style in style.css
//Dynamically change the color of h1 using inline css
//Morning = red , Afternnon = green , night = blue. 



import React from "react";

function Greeting(){

    const date = new Date();
    const CurrentTime = date.getHours();
    let greeting;

    if (CurrentTime < 12){
            greeting = "Good Morning";
    }
    else if(CurrentTime < 18){
        greeting = "Good Afternoon";
    }
    else{
        greeting = "Good Night";
    }
    return(
        <h1>{greeting}</h1>
    )
}
export default Greeting;