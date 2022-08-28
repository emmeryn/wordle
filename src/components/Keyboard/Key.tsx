import { ReactNode } from "react";

type Props = {
  displayText: string,
  children?: ReactNode,
  onClick: () => void,
  type?: KeyType,
};

export enum KeyType {
  CORRECT,
  WRONG_POS,
  WRONG_LETTER,
  AWAITING_ATTEMPT,
}

export const Key = ({ children, displayText, onClick, type = KeyType.AWAITING_ATTEMPT }: Props) => {
  let keyClassNames = 'w-10 h-14 rounded-full shadow-sm bg-white-500 items-center justify-center flex';
    switch (type) {
    case KeyType.CORRECT:
      keyClassNames += ' bg-green-500';
      break;
    case KeyType.WRONG_POS:
      keyClassNames += ' bg-yellow-500';
      break;
    case KeyType.WRONG_LETTER:
      keyClassNames += ' bg-gray-500';
      break;
    case KeyType.AWAITING_ATTEMPT:
      keyClassNames += ' bg-white-500';
      break;
  }
  return (
    <button onClick={() => {onClick()}} className={keyClassNames}>
      {children || displayText.toUpperCase()}
    </button>
  );
}