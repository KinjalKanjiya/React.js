import React from "react";

// import pi , {doublepi , triplepi} from "./math";
 import * as pi from './math';

function App(){

    return(
        <div>
            <ul>
                <li>{pi.default}</li>
                <li>{pi.doublepi()}</li>
                <li>{pi.triplepi()}</li>
            </ul>
        </div>
    );
}
export default App;