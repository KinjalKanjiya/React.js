import React from "react";
function Input(props){
    return   (
        <div>
        <input type={props.type} placeholder={props.placeholder}/><br/> <br/>
        </div>
    );
}
export default Input;