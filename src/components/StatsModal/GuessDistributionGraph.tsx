import { Stats } from "../../utils/stats";
import { GuessDistributionGraphBar } from "./GuessDistributionGraphBar";

type Props = {
  stats: Stats;
};

export const GuessDistributionGraph = ({stats}: Props) => {
  const { gamesWon, guessDistribution } = stats;
  return (
    <div className={'my-2'}>
      {guessDistribution.map((timesWon, idx) => (
        <GuessDistributionGraphBar
          numGuessesIdx={idx}
          length={100 * (timesWon / gamesWon)}
          timesWon={timesWon}
          key={idx}
        />
      ))}
    </div>
  )
};