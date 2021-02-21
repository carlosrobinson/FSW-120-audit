import React from 'react';
import "./card-styles.css"
const Card = (props) => {
    return(
        <div className= "card-item">
           <input type= "checkbox" />
            <h3 style={{color: 'red'}}>{props.title}</h3>
            <h5>{props.description}</h5>
        </div>
    )
}

export default Card