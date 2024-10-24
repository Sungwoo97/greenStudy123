import logo from './logo.svg';
import './App.css';
import Myheader from './components/Myheader';
import Nav from './components/Nav';
import Article from './components/Article';
import React, { Component } from 'react'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject:{
        title : 'React',
        desc : 'Single page Application'
      },
      menus:[
        {id:1, title:'HTML', desc: 'Hypertext Markup Language' },
        {id:2, title:'CSS', desc: 'CSS for design' },
        {id:3, title:'JAVASCRIPT', desc: 'Javascript for interaction' }
      ]
      
    };
  }
  render() {
    return (
      <div className="App">
      <Myheader title={this.state.subject.title} desc={this.state.subject.desc}></Myheader>
      <Nav data={this.state.menus}></Nav>
      <Article title="HTML" desc="Hypertext Markup Language"></Article>
    </div>
    )
  }
}

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>안녕</h1>
      </header>
    </div>
  );
}
*/
export default App;
