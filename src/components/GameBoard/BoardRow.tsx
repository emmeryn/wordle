import { Cell } from "./Cell";

type Props = { word: string, rowType: BoardRowType };

export enum BoardRowType {
  ATTEMPTED,
  CURR_ATTEMPT,
  AWAITING_ATTEMPT
}
const WORD_LENGTH = 5;

export const BoardRow = ({ word, rowType }: Props) => {
  const letters = Array.from(word);
  const emptyLetters = Array.from(new Array(WORD_LENGTH - letters.length));

  return (
    <div className={'flex flex-row justify-center text-xl space-x-1'} data-testid={'boardRow'}>
      {letters.map((letter, idx) => (
          <Cell key={idx} letter={letter}/>
        )
      )}
      {emptyLetters.map((_, idx) => (
          <Cell key={idx} letter={''}/>
        )
      )}
    </div>
  )
}