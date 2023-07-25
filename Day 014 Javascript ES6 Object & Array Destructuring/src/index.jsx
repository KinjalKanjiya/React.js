import React from "react";
import cars from "./practice";

function Destructuring(){

    const [Honda , Tesla] = cars;

    return(
        <div>
            <table>
                <tr>
                    <th>Brand</th> &nbsp;
                    <th>Top Speed</th> &nbsp;
                    <th>Top Colour</th>
                </tr>
                <tr>
                    <td>{Honda.model}</td> &nbsp;
                    <td>{Honda.speedStats.topSpeed}</td> &nbsp;
                    <td>{Honda.coloursByPopularity[0]}</td>
                </tr>
                <tr>
                    <td>{Tesla.model}</td> &nbsp;
                    <td>{Tesla.speedStats.topSpeed}</td> &nbsp;
                    <td>{Tesla.coloursByPopularity[0]}</td>
                </tr>
            </table>
        </div>

    );
}
export default Destructuring;