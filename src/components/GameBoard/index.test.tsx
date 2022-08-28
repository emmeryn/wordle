import React from 'react';
import { render, within } from '@testing-library/react';
import { GameBoard } from "./index";

test('renders game rows', () => {
  const {container} = render(<GameBoard rowNum={6} attempts={['hello']} currAttempt={'quirk'} answer={''}/>);

  const boardRows = within(container).queryAllByTestId('boardRow');
  expect(boardRows.length).toBe(6);
});