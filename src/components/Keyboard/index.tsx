import { useEffect } from "react";
import { ReactComponent as BackspaceLogo } from '../../images/backspace.svg';
import { Key, KeyType } from "./Key";
import { getLetterMap } from "../GameBoard/utils";

type Props = {
  answer: string,
  attempts: string[],
  onLetterPress: (letter: string) => void,
  onBackspace: () => void,
  onEnter: () => void,
};

export const Keyboard = ({ answer, attempts, onLetterPress, onBackspace, onEnter }: Props) => {
  const attemptsToKeyTypeMap: { [key: string]: KeyType; } = {};
  const answerLetterMap = getLetterMap(answer);

  attempts.forEach((attempt) => {
    Array.from(attempt).forEach((letter, idx) => {
      if (!answerLetterMap[letter]) {
        attemptsToKeyTypeMap[letter] = KeyType.WRONG_LETTER;
      } else if (letter === answer[idx]) {
        attemptsToKeyTypeMap[letter] = KeyType.CORRECT;
      } else if (attemptsToKeyTypeMap[letter] !== KeyType.CORRECT) {
        attemptsToKeyTypeMap[letter] = KeyType.WRONG_POS;
      }
    })
  })

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
        {['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'].map((letter) => (
          <Key displayText={letter} type={attemptsToKeyTypeMap[letter]} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
      </div>
      <div className={'flex justify-center'}>
        {['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'].map((letter) => (
          <Key displayText={letter} type={attemptsToKeyTypeMap[letter]} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
      </div>
      <div className={'flex justify-center'}>
        <Key displayText={'Enter'} onClick={() => onEnter()}/>
        {['z', 'x', 'c', 'v', 'b', 'n', 'm'].map((letter) => (
          <Key displayText={letter} type={attemptsToKeyTypeMap[letter]} onClick={() => onLetterPress(letter)} key={letter}/>
        ))}
        <Key displayText={''} onClick={() => onBackspace()}>
          <BackspaceLogo/>
        </Key>
      </div>
    </div>
  );
}