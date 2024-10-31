import React from "react";
import Letter from "./Letter";

const LetterGrid = ({secretWord, guessedLetters})=>{
  //let letters = secretWord.split('').map(word=> <span>{word}</span>);
  //secretWord의 문자열 배열로 변환하고, 그 배열에 각각의 값으로
  let letters = [...secretWord].map((letter, idx)=> {
    let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1 ;
    return( 
      <Letter key={idx} value={letter} isShown={isShown}></Letter>
      ) 
    });    // 스프레드 연산자로 문자열을 바로 배열로 바꿀 수 있다
  

  return(
    <div className="App">
      {letters}
    </div>
  )
}

export default LetterGrid;