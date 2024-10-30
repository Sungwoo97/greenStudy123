import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../counterSlice'

function AddNumber(){
  
  const count = useSelector(state => state.counter.value);    //store 에서 초기화 된 count 값을 dispatch.action을 통해 변한 값이 저장되도록 
  const dispatch = useDispatch();
  return(
    <div>
        <h3>Add Number</h3>
        <input type="text" value={count}  />
        <button onClick={(e)=> dispatch(increment()) }>Add</button>
      </div>
  )
}

/*
class AddNumber extends Component {
  state = {
    num : 1
  }
  
  render() {
    return (
      <div>
        <h3>Add Number</h3>
        <input type="text" value={this.state.num} onChange={(e)=>{
          this.setState({
            num : e.target.value
          })
        }} />
        <button onClick={(e)=>{
          this.props.onclick(Number(this.state.num));
        }}>Add</button>
      </div>
    )
  }
}
*/
export default AddNumber;