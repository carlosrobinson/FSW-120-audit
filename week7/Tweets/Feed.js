import React from "react";

function Feed(props) {
    return(
        <div >
            <h3 id="myFeed1">{props.item.title} {props.item.handle}</h3>
            <p id="myFeed2">{props.item.message}</p>
            <img id="image" src={props.item.imgUrl} alt="a pic"/>
        </div>
    )
}

export default Feed;