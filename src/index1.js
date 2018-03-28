import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

function counter(state=0, action){
  switch (action.type) {
    case 'add':
      return state +1
    case 'min':
      return state -1
    default:
      return 10
  }
}

const  store = createStore(counter, applyMiddleware(thunk))
const listener = function(){
    const current = store.getState()
    console.log(`this number: ${current}`);
}
store.subscribe(listener)
// const init = store.getState()
// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();


store.dispatch({type:'add'})
// console.log(init);
store.dispatch({type:'min'})
store.dispatch({type:'add'})
store.dispatch({type:'add'})
store.dispatch({type:'add'})
// console.log(init);
store.dispatch({type:'add'})
// console.log(init);
