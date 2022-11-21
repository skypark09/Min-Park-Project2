import normalWordBank from "./normal-words.txt";

export const initialNormal = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];

export const createWordSet = async () => {
  let wordSet;
  let randomWord;
  await fetch(normalWordBank)
    .then((response) => response.text())
    .then((result) => {
      const wordArr = result.split("\n");
      randomWord = wordArr[Math.floor(Math.random() * wordArr.length)];
      wordSet = new Set(wordArr);
    });

  return { wordSet, randomWord };
};
