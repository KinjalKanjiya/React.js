import React from "react";


function Challenge(props){
    return(
        <div>
            {props.id}
            <h2>{props.emoji}</h2>
            <dl>
                
                <h3>{props.name}</h3>
            </dl>
            <dd>
                <p>{props.meaning}</p>
            </dd>
        </div>
    );
}
export default Challenge;