import React from 'react';
export function Topics() {
  return <h1>This is Topics Pages</h1>
}
export function specificTopics(props) {
  return <div>
      <h1>This is specificTopics</h1>
      <p style={{ color: 'darkRed'}}>the Id is {props.match.params.id}</p>
    </div>
}

