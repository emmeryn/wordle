type Props = {
  numGuessesIdx: number,
  length: number,
  timesWon: number,
}
export const GuessDistributionGraphBar = ({ numGuessesIdx, length, timesWon }: Props) => {
  return (
    <div className={'m-0.5 flex'}>
      <div>{numGuessesIdx + 1}</div>
      <div className={'ml-3 w-full'}>
        <div style={{ width: `${5 + length}%` }}
             className={'text-xs text-white text-center p-0.5 bg-gray-500'}>
          {timesWon}
        </div>
      </div>
    </div>
  )
};