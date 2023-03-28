import React from "react";
import './style.css'

function Food(){
    return(
        <div>
            <h1 className="heading">My Favourite Food</h1>
        <div>
        <img className="food" src="https://www.cookwithmanali.com/wp-content/uploads/2014/11/Hakka-Noodles-1.jpg"/> &nbsp;&nbsp;
        <img className="food" src="https://foodelhi.in/wp-content/uploads/2017/08/IMG_20170819_162616_187.jpg"/> &nbsp;&nbsp;
        <img  className="food" src="https://i.ytimg.com/vi/CCab5oh0ZOc/maxresdefault.jpg"/>
        </div> 
        </div>
    )

}
export default Food;