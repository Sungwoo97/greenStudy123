import React, { Component } from 'react'
import { useSelector } from 'react-redux'                  

function DisplayNumber(){
  const count = useSelector(state => state.counter.value);
  return(
    <div>
        <h3>Display Number</h3>
        <input type="text" value={count} readOnly />
      </div>
  )
}

/*
class DisplayNumber extends Component {
  render() {
    return (
      <div>
        <h3>Display Number</h3>
        <input type="text" value={this.props.number} readOnly />
      </div>
    )
  }
}
*/
export default DisplayNumber;
