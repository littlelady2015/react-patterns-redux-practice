let React = require('react');
let ReactDOM = require('react-dom');
let Redux = require('redux'); 
let createStore = Redux.createStore;

function counter(state = 0, action) {
  switch (action.type) {
    case 'INCRESE': return state + 1;
    case 'DECRESE': return state - 1;
    default: return state;
  }
}
const store = createStore(counter);
function listener() {
  const currentState = store.getState();
  console.info(`当前的state ${currentState}`);
}
store.subscribe(listener);
store.dispatch({type: 'INCRESE'});
store.dispatch({type: 'DECRESE'});






