import React from 'react'
import Feed from './components/Feed'
import MyForm from './components/MyForm'


function App () {
   return (
      <div>
        <h1 id= "myHeader">Tweetle</h1>
        <MyForm/>
        <Feed/>
      </div>
    );
}

export default App;
