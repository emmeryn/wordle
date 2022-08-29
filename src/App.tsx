import React, { useState } from 'react';
import './App.css';
import { GameBoard } from "./components/GameBoard";
import { Keyboard } from "./components/Keyboard";
import { StatsModal } from "./components/StatsModal";
import { MAX_ATTEMPTS, WORD_LENGTH } from "./constants/config";
import { updateAndSaveStats } from "./utils/stats";
import { getRandomWord } from "./utils/words";

function App() {
  const [attempt, setAttempt] = useState('');
  const [attempts, setAttempts] = useState<string[]>([]);
  const [isGameOver, setIsGameOver] = useState(false)
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const [selectedLengthWordList] = useState<string[]>(() => {
    const masterWordList = require('word-list-json');
    const startIdx = masterWordList.lengths[WORD_LENGTH - 1];
    const endIdx = masterWordList.lengths[WORD_LENGTH];
    return masterWordList.slice(startIdx, endIdx);
  });
  const [answer, setAnswer] = useState(() => getRandomWord(selectedLengthWordList));

  const onLetterPress = (letter: string) => {
    if (isGameOver) return;
    const newAttempt = attempt + letter;
    if (newAttempt.length <= WORD_LENGTH) {
      setAttempt(attempt + letter);
    }
  };
  const onBackspace = () => {
    setAttempt(attempt.slice(0, -1));
  };
  const onEnter = () => {
    if (isGameOver) return;
    if (attempt.length !== WORD_LENGTH) {
      alert('Too little letters');
      return;
    }
    if (!selectedLengthWordList.includes(attempt)) {
      alert('Invalid guess');
      return;
    }
    const newAttempts = attempts.concat(attempt);
    setAttempts(newAttempts);
    setAttempt('');
    if (newAttempts.length >= MAX_ATTEMPTS || attempt === answer) {
      setIsGameOver(true);
      updateAndSaveStats(newAttempts);
      setIsStatsModalOpen(true);
    }
  };
  const startNewGame = () => {
    setAttempt('');
    setAttempts([]);
    setIsGameOver(false);
    setIsStatsModalOpen(false);
    setAnswer(getRandomWord(selectedLengthWordList));
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wordle</h1>
      </header>
      <StatsModal answer={answer} attempts={attempts} isOpen={isStatsModalOpen} onStartNewGame={startNewGame} onClose={() => {
        setIsStatsModalOpen(false);
      }}/>
      <GameBoard answer={answer} rowNum={MAX_ATTEMPTS} attempts={attempts} currAttempt={attempt}/>
      <Keyboard answer={answer} attempts={attempts} onLetterPress={onLetterPress} onBackspace={onBackspace}
                onEnter={onEnter}/>
    </div>
  );
}

export default App;
