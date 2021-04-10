import React from 'react'
import { TweetsContextConsumer } from './Tweet'

function Feed (props) {
  let count = 1
  return (
    <TweetsContextConsumer>
      {context => (
        <div id="my-things">          
            {context.data.map((item) => {
              count += 1
            //   console.log(count)
              return (
                <div id = "thing-2" key = {count}>
                  <h3>{item.id}</h3>
                  <h3>John Smith</h3>
                  <h3>@john_smith</h3>
                  <h3>{item.message}</h3>
                  <img style= {{width: '150px'}} src={item.url} alt="pic"/>
                  <br/>
                  <button className="del"  onClick={context.delete}>Delete</button>
                </div>
              )
            })}
        </div>      
      )}
    </TweetsContextConsumer>
  )
}

export default Feed