import { Cell, CellType } from "./Cell";
import { getLetterMap } from "./utils";
import { WORD_LENGTH } from "../../constants/config";

type Props = { word: string, rowType: BoardRowType, answer?: string };

export enum BoardRowType {
  ATTEMPTED,
  CURR_ATTEMPT,
  AWAITING_ATTEMPT
}

export const BoardRow = ({ word, rowType, answer }: Props) => {
  const letters = Array.from(word);
  const emptyLetters = Array.from(new Array(WORD_LENGTH - letters.length));
  const allLetters = letters.concat(emptyLetters);

  let cells: JSX.Element[] = [];

  switch (rowType) {
    case BoardRowType.ATTEMPTED:
      const letterMap = getLetterMap(answer!);
      // prioritize correct letters first
      allLetters.forEach((letter, idx) => {
        const correctLetter = answer![idx];
        if (letter === correctLetter) {
          letterMap[letter]--;
        }
      });
      allLetters.forEach((letter, idx) => {
        const correctLetter = answer![idx];
        if (letter === correctLetter) {
          cells.push(<Cell key={idx} letter={letter} type={CellType.CORRECT}/>);
        } else if (!letterMap[letter]) {
          cells.push(<Cell key={idx} letter={letter} type={CellType.WRONG_LETTER}/>);
        } else {
          cells.push(<Cell key={idx} letter={letter} type={CellType.WRONG_POS}/>);
          letterMap[letter]--;
        }
      });
      break;
    case BoardRowType.CURR_ATTEMPT:
    case BoardRowType.AWAITING_ATTEMPT:
      cells.push(
        ...allLetters.map((letter, idx) => (
          <Cell key={idx} letter={letter}/>
        )));
      break;
  }

  return (
    <div className={'flex flex-row justify-center text-xl space-x-1 pb-1'} data-testid={'boardRow'}>
      {cells}
    </div>
  )
}