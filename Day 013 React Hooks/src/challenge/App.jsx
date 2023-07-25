//challenge
//1.Given that you can get current time.
//show the  latest time in the <h1> when the Get Time button is pressed.

//2.Given that u can get code to be called every second using the setInterval method.
//can you get the time in your <h1> to update every second? 

import React from "react";

function App(){

    const now = new Date().toLocaleTimeString();

    const[time , setTime] = React.useState(now);

    function UpdateTime(){
        const newTime = new Date().toLocaleTimeString();
        setTime(newTime)
    }
    setInterval(UpdateTime,1000)

    return(
        <div>
               <h1>{time}</h1>
               <button onClick={UpdateTime}>Get Time</button>
        </div>
     
        
    )
}
export default App;