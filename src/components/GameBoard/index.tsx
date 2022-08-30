import { BoardRow, BoardRowType } from "./BoardRow";
import { useContext } from "react";
import { GameContext } from "../../contexts/Game";

type Props = { rowNum: number, currAttempt: string };

export const GameBoard = ({ rowNum, currAttempt }: Props) => {
  const { answer, attempts } = useContext(GameContext);
  const attemptedRows = attempts.map((attempt, idx) =>
    <BoardRow word={attempt} rowType={BoardRowType.ATTEMPTED} answer={answer} key={idx}/>
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