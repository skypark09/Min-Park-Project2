import React, { useContext } from "react";
import { AppContext } from "../../Main";

function EndOfGameHard() {
  const { endOfGame, curAttempt, hardAnswer } = useContext(AppContext);
  return (
    <div className="endOfGame">
      <h3>{endOfGame.gotAnswer ? "CORRECT!" : "WRONG!"}</h3>
      <h1>Word: {hardAnswer}</h1>
      {endOfGame.gotAnswer && (
        <h3>You guessed in {curAttempt.attempt} attempts! </h3>
      )}
    </div>
  );
}

export default EndOfGameHard;
