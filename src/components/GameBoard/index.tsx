import { BoardRow, BoardRowType } from "./BoardRow";

type Props = { rowNum: number, attempts: string[], currAttempt: string };

export const GameBoard = ({ rowNum, attempts, currAttempt }: Props) => {
  const attemptedRows = attempts.map((attempt, idx) =>
    <BoardRow word={attempt} rowType={BoardRowType.ATTEMPTED} key={idx}/>
  );
  const currAttemptRow = attempts.length < rowNum && <BoardRow word={currAttempt} rowType={BoardRowType.CURR_ATTEMPT}/>;
  const awaitingAttemptRows = [];
  for (let i = attempts.length + 1; i < rowNum; i++) {
    awaitingAttemptRows.push(<BoardRow word={''} rowType={BoardRowType.AWAITING_ATTEMPT} key={i}/>)
  }

  return (
    <div data-testid={'gameBoard'}>
      {attemptedRows}
      {currAttemptRow}
      {awaitingAttemptRows}
    </div>
  );
}