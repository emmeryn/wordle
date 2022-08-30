import React from 'react';
import { render, within } from '@testing-library/react';
import { GameBoard } from "./index";
import { GameContext } from '../../contexts/Game';

test('renders game rows', () => {
  const { container } = render(
    <GameContext.Provider value={{
      answer: '',
      attempts: ['hello'],
    }}>
      <GameBoard rowNum={6} currAttempt={'quirk'}/>
    </GameContext.Provider>
  );

  const boardRows = within(container).queryAllByTestId('boardRow');
  expect(boardRows.length).toBe(6);
});