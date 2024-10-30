import React, { Component } from 'react'
import DisplayNumber from './DisplayNumber';

class DisplayNumberRoot extends Component {
  render() {
    return (
      <div>
        <h2>Display Number Root</h2>
        <DisplayNumber number={this.props.number}></DisplayNumber>
      </div>
    )
  }
}

export default DisplayNumberRoot;