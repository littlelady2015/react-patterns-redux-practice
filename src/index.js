import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { counter } from './redux';
import App from './App.js';
import './index.css';

const store = createStore(counter);
function render() {
  ReactDOM.render(
    <App store={store} />, 
    document.getElementById('root')
  );
}
render();
store.subscribe(render);
