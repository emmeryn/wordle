import React from 'react';
import { render, screen } from '@testing-library/react';
import { BoardRow, BoardRowType } from "./BoardRow";
import { CellType } from "./Cell";

test('renders letter cells for aleady attempted rows', () => {
  const word = 'first';
  const answer = 'quick';
  render(<BoardRow rowType={BoardRowType.ATTEMPTED} word={word} answer={answer}/>);
  for (let letter of Array.from(word)) {
    const letterCell = screen.getByText(letter.toUpperCase());
    expect(letterCell).toBeInTheDocument();
  }
});

test('renders celltype correctly', () => {
  const cellTypeClassNameMap = {
    [CellType.CORRECT]: 'bg-green-500',
    [CellType.WRONG_POS]: 'bg-yellow-500',
    [CellType.WRONG_LETTER]: 'bg-gray-500',
    [CellType.AWAITING_ATTEMPT]: 'bg-white-500',
  };
  const word = 'oooot';
  const answer = 'sooth';
  render(<BoardRow rowType={BoardRowType.ATTEMPTED} word={word} answer={answer}/>);

  const letterCells = screen.getAllByText('O');
  expect(letterCells[0].classList.contains(cellTypeClassNameMap[CellType.WRONG_LETTER])).toBe(true);
  expect(letterCells[1].classList.contains(cellTypeClassNameMap[CellType.CORRECT])).toBe(true);
  expect(letterCells[2].classList.contains(cellTypeClassNameMap[CellType.CORRECT])).toBe(true);
  expect(letterCells[3].classList.contains(cellTypeClassNameMap[CellType.WRONG_LETTER])).toBe(true);
  const lastLetter = screen.getByText('T');
  expect(lastLetter.classList.contains(cellTypeClassNameMap[CellType.WRONG_POS])).toBe(true);
})