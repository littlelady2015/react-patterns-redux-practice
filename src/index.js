import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { counter } from './redux';
import App from './App.js';
import './index.css';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : f => f;

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevTools(),
));

ReactDOM.render(
  <Provider store={store}>
      <App /> 
  </Provider>,
  document.getElementById('root')
);

// store.subscribe(render);
