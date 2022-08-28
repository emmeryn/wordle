import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoardRow, BoardRowType } from "./BoardRow";

test('renders letter cells for aleady attempted rows', () => {
  const word = 'first';
  const answer = 'quick';
  render(<BoardRow rowType={BoardRowType.ATTEMPTED} word={word} answer={answer}/>);
  for (let letter of Array.from(word)) {
    const letterCell = screen.getByText(letter.toUpperCase());
    expect(letterCell).toBeInTheDocument();
  }
});
