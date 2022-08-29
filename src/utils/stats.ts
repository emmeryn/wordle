import { MAX_ATTEMPTS } from "../constants/config";

const statKey = 'statKey';

export type Stats = {
  gamesPlayed: number;
  gamesWon: number;
  currentStreak: number;
  maxStreak: number;
};

export const updateAndSaveStats = (attempts: string[]) => {
  const stats = loadStats();

  stats.gamesPlayed++;
  if (attempts.length < MAX_ATTEMPTS) {
    stats.gamesWon++;
    stats.currentStreak++;
  } else {
    stats.currentStreak = 0;
  }
  stats.maxStreak = Math.max(stats.maxStreak, stats.currentStreak);

  localStorage.setItem(statKey, JSON.stringify(stats));
};

export const loadStats: () => Stats = () => {
  const initialStats: Stats = {
    gamesPlayed: 0,
    gamesWon: 0,
    currentStreak: 0,
    maxStreak: 0,
  };
  const loadedStats = localStorage.getItem(statKey);
  return loadedStats !== null ? JSON.parse(loadedStats) : initialStats;
};