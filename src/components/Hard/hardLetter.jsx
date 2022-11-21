import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Main";

function HardLetter({ position, attempt }) {
  const { hardBoard, hardAnswer, curAttempt, setEliminatedLetters } =
    useContext(AppContext);
  const letter = hardBoard[attempt][position];

  const correct = hardAnswer.toUpperCase()[position] === letter;
  const onlyLetter =
    !correct && letter !== "" && hardAnswer.toUpperCase().includes(letter);

  const isLetter =
    curAttempt.attempt > attempt &&
    (correct ? "correct" : onlyLetter ? "onlyLetter" : "incorrect");

  useEffect(() => {
    if (letter !== "" && !correct && !onlyLetter) {
      setEliminatedLetters((prev) => [...prev, letter]);
    }
  }, [curAttempt.attempt]);
  return (
    <div className="letter" id={isLetter}>
      {letter}
    </div>
  );
}

export default HardLetter;
