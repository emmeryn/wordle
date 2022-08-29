import { Dialog } from "@headlessui/react";
import { MAX_ATTEMPTS } from "../../constants/config";

type Props = {
  answer: string,
  attempts: string[],
  isOpen: boolean,
  onClose: () => void
};

export const StatsModal = ({ answer, attempts, isOpen, onClose }: Props) => {
  let message = '';
  if (attempts.length + 1 >= MAX_ATTEMPTS) {
    message = `The answer was "${answer}"!`;
  } else if (attempts[attempts.length - 1] === answer) {
    message = `You guessed "${answer}" correctly!`;
  }
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
          <p className={'text-sm text-gray-500'}>
          </p>
        </div>

        <div className="px-4 py-3 sm:px-6 sm:flex sm:flex-row justify-center">
          <button type={'button'}
                  className={'inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}
                  onClick={() => null}>New Game
          </button>
          <button type={'button'}
                  className={'ml-2 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2'}
                  onClick={onClose}>Close
          </button>
        </div>
      </Dialog.Panel>
    </Dialog>
  )
};