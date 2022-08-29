export const getRandomWord = (wordList: string[]) => {
  const randIdx = Math.floor(Math.random() * (wordList.length - 1));
  return wordList[randIdx];
}