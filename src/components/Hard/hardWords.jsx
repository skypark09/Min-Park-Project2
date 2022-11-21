import hardWordBank from "./hard-words.txt";

export const initialHard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
];

export const createHardWordSet = async () => {
  let hardWordSet;
  let randomHardWord;
  await fetch(hardWordBank)
    .then((response) => response.text())
    .then((result) => {
      const hardWordArr = result.split("\n");
      randomHardWord =
        hardWordArr[Math.floor(Math.random() * hardWordArr.length)];
      hardWordSet = new Set(hardWordArr);
    });

  return { hardWordSet, randomHardWord };
};
