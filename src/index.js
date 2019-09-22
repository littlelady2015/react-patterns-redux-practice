import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Switch, Route } from 'react-router';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { counter } from './redux';
import App from './app.js';
import About from './pages/About';
import { Topics, specificTopics }from './pages/Topics';
import './index.css';

const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__ : f => f;

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevTools(),
));

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
        <li>
          <Link to="/topics/:id">Specific Topics</Link>
        </li>

      </ul>
      <Switch>
          <Route exact path="/" component={App} />   
          <Route path="/about" component={About} />
          <Route exact path="/topics" component={Topics} />
          <Route path="/topics/:id" component={specificTopics} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// store.subscribe(render);
