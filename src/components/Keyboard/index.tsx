import { useEffect } from "react";
import { ReactComponent as BackspaceLogo } from '../../images/backspace.svg';
import { Key } from "./Key";

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
      <div className={'flex justify-center'}>
        {['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'].map((letter) => (
          <Key displayText={letter} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
      </div>
      <div className={'flex justify-center'}>
        {['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'].map((letter) => (
          <Key displayText={letter} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
      </div>
      <div className={'flex justify-center'}>
        <Key displayText={'Enter'} onClick={() => onEnter()}/>
        {['Z', 'X', 'C', 'V', 'B', 'N', 'M'].map((letter) => (
          <Key displayText={letter} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
        <Key displayText={''} onClick={() => onBackspace()}>
          <BackspaceLogo/>
        </Key>
      </div>
    </div>
  );
}