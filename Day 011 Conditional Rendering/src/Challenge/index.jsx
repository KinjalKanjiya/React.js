//challenge : without moving the userRegistered variable.
//1. show Login as the button text if userIsRegistered is true.
//show register as the button text if userIsRegistered is false.
//2. Only show the confirm password input if UserIsRegistered is false.
//Don't Show it if userIsRegistered is true.

import React from "react";
import Form from "./Form";

var userIsRegistered = true;    

function Index(){
    return(
        <div className="container">
            <Form
            isRegistered = {userIsRegistered}/>
        </div>
    )
}
export default Index;
