import React from 'react';
import { render, screen, within } from '@testing-library/react';
import { Keyboard } from "./index";
import userEvent from "@testing-library/user-event";
import { GameContext } from '../../contexts/Game';

test('handles user keyboard input', () => {
  const onLetterPress = jest.fn();
  const onBackspace = jest.fn();
  const onEnter = jest.fn();
  render(
    <GameContext.Provider value={{
      answer: 'answe',
      attempts: [],
    }}>
      <Keyboard onLetterPress={onLetterPress} onBackspace={onBackspace}
                onEnter={onEnter}/>
    </GameContext.Provider>
  );

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

test('renders on-screen keyboard', () => {
  const onLetterPress = jest.fn();
  const onBackspace = jest.fn();
  const onEnter = jest.fn();

  const { container } = render(
    <GameContext.Provider value={{
      answer: 'answe',
      attempts: [],
    }}>
      <Keyboard onLetterPress={onLetterPress} onBackspace={onBackspace}
                onEnter={onEnter}/>
    </GameContext.Provider>
  );

  for (let letter = 'A'.charCodeAt(0); letter <= 'Z'.charCodeAt(0); letter++) {
    const letterElement = within(container).queryByText(String.fromCharCode(letter));
    expect(letterElement).toBeInTheDocument();
  }
});

test('handles on-screen keyboard click events', () => {
  const onLetterPress = jest.fn();
  const onBackspace = jest.fn();
  const onEnter = jest.fn();
  render(
    <GameContext.Provider value={{
      answer: 'answe',
      attempts: [],
    }}>
      <Keyboard onLetterPress={onLetterPress} onBackspace={onBackspace}
                onEnter={onEnter}/>
    </GameContext.Provider>
  );

  for (let charCode = 'a'.charCodeAt(0); charCode <= 'z'.charCodeAt(0); charCode++) {
    const letter = String.fromCharCode(charCode);
    userEvent.click(screen.getByText(letter.toUpperCase()));
    expect(onLetterPress).toBeCalledWith(letter);
  }
  userEvent.click(screen.getByText('ENTER'));
  expect(onEnter).toBeCalled();

  userEvent.click(screen.getByText('backspace.svg'));
  expect(onBackspace).toBeCalled();
});