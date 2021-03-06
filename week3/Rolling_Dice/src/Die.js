import React, { Component } from "react";


class Die extends Component {
    constructor(){
        super()
        this.state = {
            count: 0,
            num1: 0,
            num2: 0,
            num3: 0,
            num4: 0,
            num5: 0
        }
        this.handleClick= this.handleClick.bind(this)
        // this.handleCount= this.handleCount.bind(this)
    }
    
    // handleCount() {
    //     this.setState(prevState => {
    //         return {
    //             count: prevState.count + 1
    //         }
    //     })
    // }


    handleClick() {
        
        if(this.state.count <= 2) {
            this.setState(prevState =>
               [
                prevState.count ++,
                prevState.num1 = Math.floor(Math.random() * 6 + 1),
                prevState.num2 = Math.floor(Math.random() * 6 + 1),
                prevState.num3= Math.floor(Math.random() * 6 + 1),
                prevState.num4= Math.floor(Math.random() * 6 + 1),
                prevState.num5= Math.floor(Math.random() * 6 + 1)
            ])         

        }else{
            this.setState({
                count: 0,
                num1: 0,
                num2: 0,
                num3: 0,
                num4: 0,
                num5: 0
            })
        }

}
    render() {
        
        return(
            <div id= "die">
                <div id= "count">
                    <h3 value= "count">{this.state.count}</h3>
                </div>
                <div id= "myDice">
                    <h3 id= "dice-one">{this.state.num1}</h3>
                    <h3 id= "dice-two">{this.state.num2}</h3>
                    <h3 id= "dice-three">{this.state.num3}</h3>
                    <h3 id= "dice-four">{this.state.num4}</h3>
                    <h3 id= "dice-five">{this.state.num5}</h3>
                </div>
                <div id="button">
                    <button onClick= {this.handleClick}>Roll Dice</button>
                </div>
            </div>
        )
    }
}

export default Die;