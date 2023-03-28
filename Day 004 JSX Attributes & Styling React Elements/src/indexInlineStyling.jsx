import React from "react";
//Inline Styling
function InlineStyleDemo(){
    const fname = "Kinjal";
    const lname ="Kanjiya";
    const customstyle ={
        color:"orange",
        fontSize:"20px",
        border:"1px solid black"
    }
    customstyle.color = "blue";
    return(
        <div>
        <h1 style={customstyle}>Hello {`${fname} ${lname}`}  </h1>
        <h1>Hello {fname + " " +lname}  </h1>
        </div>
    )
}
export default InlineStyleDemo;
