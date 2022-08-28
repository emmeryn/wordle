export const getLetterMap = (word: string) => {
  const letterMap: { [letter: string]: number} = {};
  return Array.from(word).reduce((acc, correctLetter) => {
    acc[correctLetter] ||= 0;
    acc[correctLetter]++;
    return acc;
  }, letterMap);
}