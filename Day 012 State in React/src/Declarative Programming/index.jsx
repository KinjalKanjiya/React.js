import React from "react";
function Index(){
var isDone = true;
const strikethrough = {textDecoration:"line-through"};
return <p style={isDone ? strikethrough : null} >Buy Milk </p>
}
export default Index;
