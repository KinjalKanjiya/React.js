
import React from "react";
function App(){
    const fname = "Kinjal";
    const lname = "Kanjiya"
    const num = 10;
    const CurrentDate = new Date()
    const year = CurrentDate.getFullYear();
    
    return(
        <div>
            <h1> Hello {fname+ " " + lname}</h1>
            {/* <h1> Hello {fname}{lname}</h1> */}
             
          
            <p>My Lucky number is {num} </p>
            <p>Your Lucky Number is {3+4} </p>
            <p>Random number is {Math.random()}</p>
            <p>Random number is {Math.random() * 10 }</p>
            <p>Random  floor number is {Math.floor(Math.random() * 10) }</p>
            {/* Es6 Template litterals */}
             <h5>Created by {`${fname}`}</h5>
            <p>Copyright {year}</p>

        </div>
    )
}
export default App;
