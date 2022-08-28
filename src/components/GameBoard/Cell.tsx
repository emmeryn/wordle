type Props = { letter?: string, type?: CellType };

export enum CellType {
  CORRECT,
  WRONG_POS,
  WRONG_LETTER,
  AWAITING_ATTEMPT,
}

export const Cell = ({ letter, type = CellType.AWAITING_ATTEMPT }: Props) => {
  let cellClassNames = 'w-14 h-14 rounded-lg shadow-lg items-center justify-center flex';
  switch (type) {
    case CellType.CORRECT:
      cellClassNames += ' bg-green-500';
      break;
    case CellType.WRONG_POS:
      cellClassNames += ' bg-yellow-500';
      break;
    case CellType.WRONG_LETTER:
      cellClassNames += ' bg-gray-500';
      break;
    case CellType.AWAITING_ATTEMPT:
      cellClassNames += ' bg-white-500';
      break;
  }
  return (
    <div className={cellClassNames}>
      {letter?.toUpperCase()}
    </div>
  )
}