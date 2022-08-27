import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders game title', () => {
  render(<App/>);
  const gameTitleElement = screen.getByText(/Wordle/i);
  expect(gameTitleElement).toBeInTheDocument();
});

test('renders game board', () => {
  render(<App/>);
  const gameBoardElement = screen.getByTestId('gameBoard');
  expect(gameBoardElement).toBeInTheDocument();
});
