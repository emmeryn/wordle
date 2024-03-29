import { render, screen } from "@testing-library/react";
import React from "react";
import { StatsModal } from "./index";
import { MAX_ATTEMPTS } from "../../constants/config";

jest.mock('../../utils/stats', () => ({
  loadStats: () => {
    return {
      gamesPlayed: 10,
      gamesWon: 5,
      currentStreak: 1,
      maxStreak: 7,
      guessDistribution: [0, 0, 1, 3, 1, 0],
    }
  }
}))
beforeEach(() => {
  jest.resetAllMocks();
});

test('renders stats modal with user statistics', () => {
  const answer = 'right';
  const attempts = ['wrong', 'right'];
  const isOpen = true;
  const onStartNewGame = jest.fn();
  const onClose = jest.fn();
  render(<StatsModal isOpen={isOpen} onStartNewGame={onStartNewGame}
                     onClose={onClose}/>);

  const gamesPlayedElement = screen.getByText('Games Played');
  const gamesPlayedValueElement = gamesPlayedElement.nextElementSibling;
  expect(gamesPlayedValueElement!.firstChild!.nodeValue).toBe('10');

  const winPercentageElement = screen.getByText('Win %');
  const winPercentageElementValueElement = winPercentageElement.nextElementSibling;
  expect(winPercentageElementValueElement!.firstChild!.nodeValue).toBe('50%');

  const currentStreakElement = screen.getByText('Current Streak');
  const currentStreakElementValueElement = currentStreakElement.nextElementSibling;
  expect(currentStreakElementValueElement!.firstChild!.nodeValue).toBe('1');

  const maxStreakElement = screen.getByText('Max Streak');
  const maxStreakElementValueElement = maxStreakElement.nextElementSibling;
  expect(maxStreakElementValueElement!.firstChild!.nodeValue).toBe('7');
});