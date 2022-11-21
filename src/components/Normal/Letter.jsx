import React, { useContext, useEffect } from "react";
import { AppContext } from "../../Main";

function Letter({ position, attempt }) {
  const { normalBoard, answer, curAttempt, setEliminatedLetters } =
    useContext(AppContext);
  const letter = normalBoard[attempt][position];

  const correct = answer.toUpperCase()[position] === letter;
  const onlyLetter =
    !correct && letter !== "" && answer.toUpperCase().includes(letter);

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

export default Letter;
