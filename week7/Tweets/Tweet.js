import React from "react"
import Feed from "./Feed"
import data from "./data.json"
//import Axios from "axios"

class Tweet extends React.Component {
  constructor(){
    super()
    this.state= {
      feed:"",
      title: "",
      newFeed:[]
    }
    this.handleFeed = this.handleFeed.bind(this)
    this.handleTweet = this.handleTweet.bind(this)

  }
  handleFeed =(e)=>{
    const {title, value} = e.target
    this.setState({[title]:value})
  }
  handleTweet =(e)=>{
    const myFeed = this.state.feed
     
    this.setState({newFeed:[myFeed,...this.state.newFeed]})
  }

  render(){
const twitterData = data.map( item =>

        <Feed
        item= {item}
         onClick={this.handleFeed} value= {this.state.newFeed}/>
  )
    return(

     <div>
       {twitterData}
       <input name="title" value = {this.state.title} onClick= {this.handleFeed}/>
       <textarea name= "feed"  id= "first-input "></textarea>
      
      <button type="submit" onClick={this.handleFeed}>Tweet</button>
      </div>
    ) 
        
  }    
  }



export default Tweet