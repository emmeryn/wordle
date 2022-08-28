import { useEffect } from "react";

type Props = {
  onLetterPress: (letter: string) => void,
  onBackspace: () => void,
  onEnter: () => void,
};

export const Keyboard = ({ onLetterPress, onBackspace, onEnter }: Props) => {
  useEffect(() => {
    const keyUpListener = (e: KeyboardEvent) => {
      switch (e.code) {
        case 'Enter':
        case 'Space':
          onEnter();
          break;
        case 'Backspace':
          onBackspace();
          break;
        default:
          const letter = e.key.toLowerCase();
          if ((/^[a-z]$/).test(letter)) {
            onLetterPress(letter);
          }
      }
    }
    window.addEventListener('keyup', keyUpListener)
    return () => {
      window.removeEventListener('keyup', keyUpListener)
    }
  });
  return (
    <div data-testid={'keyboard'}>
    </div>
  );
}