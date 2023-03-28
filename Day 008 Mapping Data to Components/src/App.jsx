import React from "react";
import Card from "./Card";
import contacts from "./assets/contact";
function createCard(contact){
    return(
        <Card
        name={contact.Name}
        img = {contact.Img}
        tel={contact.Tel}
        email = {contact.Email}
        />
       
    )
}

function Propchallange(){
    return(
    <div>
        <h1 className="heading">My Contacts</h1>
        {contacts.map(createCard)}
       
    </div>
    );
}
export default Propchallange;