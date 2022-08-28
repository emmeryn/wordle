import React from 'react';
import { render } from '@testing-library/react';
import { Keyboard } from "./index";
import userEvent from "@testing-library/user-event";

test('handles user keyboard input', () => {
  const onLetterPress = jest.fn();
  const onBackspace = jest.fn();
  const onEnter = jest.fn();
  render(<Keyboard onLetterPress={onLetterPress} onBackspace={onBackspace} onEnter={onEnter}/>);

  for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
    const letter = String.fromCharCode(charCode);
    userEvent.keyboard(letter);
    expect(onLetterPress).toBeCalledWith(letter);
  }
  userEvent.keyboard('[Enter]');
  userEvent.keyboard('[Space]');
  expect(onEnter).toBeCalledTimes(2);

  userEvent.keyboard('[Backspace]');
  expect(onBackspace).toBeCalled();
});
