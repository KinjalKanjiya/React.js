import React from "react";

function Statedemo(){

    const [count , setCount] = React.useState(0);

    function increase(){
        setCount(count + 1);
    }

    function decrease(){
        setCount(count - 1);
    }

    return(
        <div>
            <h1>{count}</h1> <br/> <br/>
            <button onClick={increase}>+</button>&nbsp; &nbsp;
            <button onClick={decrease}>-</button>

        </div>
    )
}
export default Statedemo;