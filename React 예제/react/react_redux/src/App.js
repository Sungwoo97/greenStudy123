import './App.css';

import React, { Component } from 'react'
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';



export default class App extends Component {
  state = {
    number : 1
  }
  render() {
    return (
      <div className="App">
        <h1>Root</h1>
        <AddNumberRoot onclick={(num)=>{
          this.setState({
            number : this.state.number + num
          })
        }}></AddNumberRoot>
        <DisplayNumberRoot number={this.state.number}></DisplayNumberRoot>
      </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <h1>Root</h1>
      <AddNumberRoot></AddNumberRoot>
      <DisplayNumberRoot></DisplayNumberRoot>
    </div>
  );
}

export default App;
*/