import React from "react";
import Card from "./Card";
import contacts from "./assets/contact";
function Propchallange(){
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        {/* <Card
        name="Cartoon"
        img="https://m.media-amazon.com/images/I/61A+w0E6MhL.png"
        tel="+123 456 789"
        email="chottabheem@.com"
        
        />
        */}
        <Card
        name={contacts[0].Name}
        img={contacts[0].Img}
        tel={contacts[0].Tel}
        email={contacts[0].Email}
        />
           <Card
        name={contacts[1].Name}
        img={contacts[1].Img}
        tel={contacts[1].Tel}
        email={contacts[1].Email}
        />
    </div>
    );
}
export default Propchallange;