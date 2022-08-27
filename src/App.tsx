import React, { useState } from 'react';
import './App.css';
import { GameBoard } from "./components/GameBoard";

function App() {
  const MAX_ATTEMPTS = 6;
  // const WORD_LENGTH = 5;

  const [attempt, setAttempt] = useState('');
  const [attempts, setAttempts] = useState(['TEST1']);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <GameBoard rowNum={MAX_ATTEMPTS} attempts={attempts} currAttempt={attempt}/>
    </div>
  );
}

export default App;
