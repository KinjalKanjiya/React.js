import React from "react";

function Form(props){
    return(
        <form className="form">
            <input type="text" placeholder="Username"/><br/><br/>
            <input type="password" placeholder="Password"/><br/><br/>
            {props.isRegistered === false && (<div><input type="Password" placeholder="Confirm Password"/><br/><br/></div>)}
           
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    )
}
export default Form;