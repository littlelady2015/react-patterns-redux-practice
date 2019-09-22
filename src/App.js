import React from'react';
import { connect } from 'react-redux';
import { addGUN, removeGUN, addGUNAsync } from './redux';

@connect(
  state=>({ num: state }),
  { addGUN, removeGUN, addGUNAsync })
class App extends React.Component {
  render() {
    const { num, addGUN, addGUNAsync } = this.props;
    return  <div>  
              <h1>当前store的state: {num}</h1> 
               <button onClick={() => addGUN()}> state 增加</button>
               <button onClick={() => addGUNAsync()}> state 异步</button>
            </div>
  }
}
// 将state 放到Props
// const mapStateToProps = (state) => {
//   return { num: state }
// }
// 将方法 放到 Props
// const actionCreators = { addGUN, removeGUN, addGUNAsync }
// connect 高阶组件
export default App; 
