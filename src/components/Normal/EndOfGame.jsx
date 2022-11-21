import React, { useContext } from "react";
import { AppContext } from "../../Main";

function EndOfGame() {
  const { endOfGame, curAttempt, answer } = useContext(AppContext);
  return (
    <div className="endOfGame">
      <h3>{endOfGame.gotAnswer ? "CORRECT!" : "WRONG!"}</h3>
      <h1>Word: {answer}</h1>
      {endOfGame.gotAnswer && (
        <h3>You guessed in {curAttempt.attempt} attempts! </h3>
      )}
    </div>
  );
}

export default EndOfGame;
