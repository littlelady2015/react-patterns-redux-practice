import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export function Topics({ match }) {
  return <Router>
      <div>
        <h1>topics</h1>
        <ul>
          <li>
            <Link to={`${match.url}/sectionOne`}>One</Link>
          </li>
          <li>
            <Link to={`${match.url}/sectionTwo`}>Two</Link>
          </li>
          <li>
            <Link to={`${match.url}/sectionThree`}>Three</Link>
          </li>
          <Route
            path={`${match.path}/:id`}
            component={Topic}
          />
          <Route 
            exact 
            path={`${match.path}`} 
            render={() =>{
            return <h2>select a topic</h2>}
            } />
        </ul>
      </div>
    </Router> 
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.id}</h3>
    </div>
  );
}
export function specificTopics(props) {
  return <div>
      <h1>This is specificTopics</h1>
      <p style={{ color: 'darkRed'}}>the Id is {props.match.params.id}</p>
    </div>
}

