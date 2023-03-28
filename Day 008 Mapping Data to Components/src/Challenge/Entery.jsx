//1. Create Entry Component
//2. Create a props to replace hardcoded data
//3a Import the emojipidia const
//3b map through emojipedia array and render entry components.

import React from "react";
import Challenge from "./index";
import emojiterm from "../assets/emojipedia";

function Entry(emojiterm){
    return(
        <Challenge
        key = {emojiterm.id}
        Emoji={emojiterm.emoji}
        Name={emojiterm.name}
        Meaning = {emojiterm.meaning}/>
        

    )
}

function Emojipediachalleng(){
    return(
        <div>
        <h1>Emojipedia</h1>
        {emojiterm.map(Entry)}
        </div>
    );
}
export default Emojipediachalleng;