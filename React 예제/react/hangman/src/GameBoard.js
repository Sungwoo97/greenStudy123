import React from "react";
import LetterGrid from "./LetterGrid";


const GameBoard = ({secretWord})=>{
  return(
    <div className="App">
      <LetterGrid secretWord={secretWord} guessedLetters="{['a','e']}" />
    </div>
  )
}

export default GameBoard;