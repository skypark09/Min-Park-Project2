import React from "react";
import { useNavigate } from "react-router-dom";

function Rules() {
  const navigate = useNavigate();

  return (
    <div className="Main">
      <nav>
        <h1>Wordle</h1>
      </nav>
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        Home
      </button>
      <button
        onClick={function () {
          navigate("/rules");
        }}
      >
        Rules
      </button>
      <button
        onClick={function () {
          navigate("/normal");
        }}
      >
        Easy
      </button>
      <button
        onClick={function () {
          navigate("/hard");
        }}
      >
        Hard
      </button>
      <h2>HOW TO PLAY</h2>
      <h3>1. Choose difficulty - easy or hard</h3>
      <h3>
        2. Using the keyboard, click or type a real word to guess the word
      </h3>
      <h3>3. Press "Enter" after you type the entire word to check</h3>
      <h3>
        4. Letters that are on the correct position are colored green, correct
        letters on incorrect positions are colored beige.
      </h3>
      <h3>
        5. Use the process of elimination and other tactics to guess the word
        within the given attempts!
      </h3>
      <h2>SETTINGS</h2>
      <h3>Easy difficulty - guess a 6 letter word within 6 attempts</h3>
      <h3>Hard difficulty - guess a 7 letter word within 5 attempts</h3>
      <h3>Press the Reset button to reset the game at any time</h3>
      <h3>Please Reset when switching between difficulties</h3>
    </div>
  );
}

export default Rules;
