import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoardRow, BoardRowType } from "./BoardRow";

test('renders letter cells for aleady attempted rows', () => {
  const word = 'first';
  render(<BoardRow rowType={BoardRowType.ATTEMPTED} word={word}/>);
  for (let letter of Array.from(word)) {
    const letterCell = screen.getByText(letter);
    expect(letterCell).toBeInTheDocument();
  }
});
