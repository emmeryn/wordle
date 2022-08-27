import React from 'react';
import { render, screen } from '@testing-library/react';
import { Cell } from "./Cell";

test('renders letter when letter is provided', () => {
  const letter = 't';
  render(<Cell letter={letter}/>);
  const letterCell = screen.getByText(letter);
  expect(letterCell).toBeInTheDocument();
});

test('renders blank cell when no letter is provided', () => {
  const letter = '';
  const { container } = render(<Cell letter={letter}/>);
  expect(container.firstChild).toBeEmptyDOMElement();
});