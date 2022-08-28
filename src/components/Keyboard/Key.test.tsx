import { Key, KeyType } from "./Key";
import { render, screen } from "@testing-library/react";

describe.each([
  [KeyType.CORRECT, 'bg-green-500'],
  [KeyType.WRONG_POS, 'bg-yellow-500'],
  [KeyType.WRONG_LETTER, 'bg-gray-500'],
  [KeyType.AWAITING_ATTEMPT, 'bg-white-500'],
])('renders background colour depending on key type', (cellType, className) => {
  test(`renders ${KeyType[cellType]} cell with ${className}`, () => {
    const letter = 'w';
    render(<Key displayText={letter} onClick={() => {}} type={cellType}/>);
    const letterCell = screen.getByText(letter.toUpperCase());
    expect(letterCell.classList.contains(className)).toBe(true);
  })
});
