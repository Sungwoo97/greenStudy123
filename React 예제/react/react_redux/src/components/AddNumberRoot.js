import React, { Component } from 'react'
import AddNumber from './AddNumber';

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h2>Add Number Root</h2>
        <AddNumber onclick={(n)=>{
          this.props.onclick(n)
        }}></AddNumber>
      </div>
    )
  }
}

export default AddNumberRoot;