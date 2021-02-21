import React from 'react';
import Card from "./Card.js"

const Todo = () => {

    let myIems = [
        {
            title:"Change oil",
            description: "Needs to be done before my trip to Florida."
        },
        {
            title:"Cut Grass",
            description: "No rain in the forecast, but it will be hot today."
        },
        {
            title:"Feed the Dog",
            description: "Need more dog food. Get the good stuff he likes."
        },
        {
            title: "Do Laundry",
            description: "I have three loads that must be done today."
        }
    ]

    const mappItems = myIems.map((items)=>{
        return (
                <Card
                title ={items.title} 
                description = {items.description}  
                />
                )
    })

    return(
        <div>
            {mappItems}
        </div>
    )
}

export default Todo