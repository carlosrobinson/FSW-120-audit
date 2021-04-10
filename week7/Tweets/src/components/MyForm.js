import React from 'react'
import {TweetsContextConsumer} from './Tweet.js'

function MyForm () {

  return (

    <TweetsContextConsumer>
      {context => (
        // <div  >
          <form id="my-form" onSubmit={context.sub}>

            <input onChange={context.change} type="text" name="id" placeholder="id"/>
            {/* <input onChange={context.change} type="text" name="title" placeholder="Title"/>
            <input onChange={context.change} type="text" name="handle" placeholder="Handle"/> */}
            <input onChange={context.change} type="text" name="message" placeholder="Message"/>
            <input onChange={context.change} type="text" name="url" placeholder="Image URL"/>
            <button id ="button">Submit</button>
          </form>
          // <br/>
        // </div>
      )}
      
    </TweetsContextConsumer>
      
  )
}

export default MyForm