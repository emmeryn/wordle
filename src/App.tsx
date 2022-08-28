import React, { useState } from 'react';
import './App.css';
import { GameBoard } from "./components/GameBoard";
import { Keyboard } from "./components/Keyboard";

function App() {
  const MAX_ATTEMPTS = 6;
  const WORD_LENGTH = 5; // todo: get length from solution

  const [attempt, setAttempt] = useState('');
  const [attempts, setAttempts] = useState<string[]>([]);

  const onLetterPress = (letter: string) => {
    const newAttempt = attempt + letter;
    if (newAttempt.length <= WORD_LENGTH) {
      setAttempt(attempt + letter);
    }
  };
  const onBackspace = () => {
    setAttempt(attempt.slice(0, -1));
  };
  const onEnter = () => {
    if (attempt.length === WORD_LENGTH) {
      setAttempts(attempts.concat(attempt));
      setAttempt('');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <GameBoard rowNum={MAX_ATTEMPTS} attempts={attempts} currAttempt={attempt}/>
      <Keyboard onLetterPress={onLetterPress} onBackspace={onBackspace} onEnter={onEnter}/>
    </div>
  );
}

export default App;
