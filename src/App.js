import React from'react';
import { addGUN } from './redux';
class App extends React.Component {
  render() {
    const store = this.props.store;
    const num = store.getState();
    return  <div>  
              <h1>当前store的state: {num}</h1> 
               <button onClick={() => store.dispatch(addGUN())}>state_add</button>
            </div>
  }
}
export default App;
