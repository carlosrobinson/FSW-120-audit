import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {TweetsContextProvider} from './components/Tweet'


ReactDOM.render(  
  <TweetsContextProvider>
    <App />
  </TweetsContextProvider>,
  document.getElementById('root')
);