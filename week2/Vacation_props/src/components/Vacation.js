import React from "react";

function Vacation(props) {
  return(
    <div id= "app">
      <h3>
        place: {props.place} 
        <br />
        price: {props.price}
        <br />
        timeToGo: {props.timeToGo}
      </h3>
      <hr/>
    </div>

  )
    
}

export default Vacation;
