// import the add, multiply,substract and divide function
//from the calculator.jsx file

import React from "react";
import {add,multiply,divide,substract} from './calculator';

function Cal(){

    return(
        <div>
            <ul>
                <li>Addition of  1 + 2 is {add(1,2)}</li>
                <li>multiplication of 5 * 2 is {multiply(5,2)}</li>
                <li>division of 5/2 is {divide(5,2)}</li>
                <li>substraction of 7-2 is {substract(7,2)}</li>
            </ul>
        </div>
    );
}
export default Cal;