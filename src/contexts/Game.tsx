import { createContext } from "react";

export const GameContext = createContext<{ answer: string, attempts: string[] }>({
  answer: '',
  attempts: [''],
});
