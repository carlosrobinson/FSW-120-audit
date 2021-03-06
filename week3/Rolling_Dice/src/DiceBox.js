import React from "react";
import Die from "./Die";

function DiceBox(props) {
    return(
        <div>
            <Die/>
            {/* <button onClick= {this.handleClick}/> */}
        </div>
    )
}

export default DiceBox;