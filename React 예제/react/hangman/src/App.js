import './App.css';
import GameBoard from './GameBoard';
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Hangman</h1>
      <p>Do you want to play game</p>
      <div>
        <GameBoard secretWord="React" /> 
      </div>
    </div>
  );
}

export default App;
