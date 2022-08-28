import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell, CellType } from "./Cell";

test('renders letter when letter is provided', () => {
  const letter = 't';
  render(<Cell letter={letter}/>);
  const letterCell = screen.getByText(letter.toUpperCase());
  expect(letterCell).toBeInTheDocument();
});

test('renders blank cell when no letter is provided', () => {
  const letter = '';
  const { container } = render(<Cell letter={letter}/>);
  expect(container.firstChild).toBeEmptyDOMElement();
});

describe.each([
  [CellType.CORRECT, 'bg-green-500'],
  [CellType.WRONG_POS, 'bg-yellow-500'],
  [CellType.WRONG_LETTER, 'bg-gray-500'],
  [CellType.AWAITING_ATTEMPT, 'bg-white-500'],
])('renders background colour depending on cell type', (cellType, className) => {
  test(`renders ${CellType[cellType]} cell with ${className}`, () => {
    const letter = 'w';
    render(<Cell letter={letter} type={cellType}/>);
    const letterCell = screen.getByText(letter.toUpperCase());
    expect(letterCell.classList.contains(className)).toBe(true);
  })
});
