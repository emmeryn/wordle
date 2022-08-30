import { Dialog } from "@headlessui/react";
import { MAX_ATTEMPTS } from "../../constants/config";
import { StatCell } from "./StatCell";
import { loadStats } from "../../utils/stats";
import { GuessDistributionGraph } from "./GuessDistributionGraph";
import { useContext } from "react";
import { GameContext } from "../../contexts/Game";

type Props = {
  isOpen: boolean,
  onStartNewGame: () => void,
  onClose: () => void
};

export const StatsModal = ({ isOpen, onStartNewGame, onClose }: Props) => {
  const { answer, attempts } = useContext(GameContext);
  let message = '';
  if (attempts.length + 1 >= MAX_ATTEMPTS) {
    message = `The answer was "${answer}"!`;
  } else if (attempts[attempts.length - 1] === answer) {
    message = `You guessed "${answer}" correctly!`;
  }
  const stats = loadStats();
  return (
    <Dialog open={isOpen} onClose={onClose} as={'div'}
            className={'fixed inset-0 z-10 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full flex justify-center items-center'}>
      <Dialog.Panel
        className={'w-full max-w-md inline-block transform overflow-hidden rounded-2xl bg-white p-6 text-center align-middle shadow-xl items-center justify-center'}>
        <Dialog.Title className={'text-lg font-medium leading-6 text-gray-900'}>
          Game Over!
        </Dialog.Title>
        <Dialog.Description>
          {message}
        </Dialog.Description>

        <div className="mt-2">
          <h4>Your Stats</h4>
          <div className="my-2 flex justify-center">
            <StatCell title={'Games Played'} value={`${stats.gamesPlayed}`}/>
            <StatCell title={'Win %'} value={`${Math.round(100 * stats.gamesWon / stats.gamesPlayed)}%`}/>
            <StatCell title={'Current Streak'} value={`${stats.currentStreak}`}/>
            <StatCell title={'Max Streak'} value={`${stats.maxStreak}`}/>
          </div>
        </div>

        <div className="mt-2">
          <h4>Guess Distribution</h4>
          <GuessDistributionGraph stats={stats}/>
        </div>
        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-center">
          <button type={'button'}
                  className={'inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}
                  onClick={onStartNewGame}>
            New Game
          </button>
          <button type={'button'}
                  className={'ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}
                  onClick={onClose}>
            Close
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
};