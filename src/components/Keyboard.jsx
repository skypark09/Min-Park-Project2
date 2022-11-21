import React, { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { AppContext } from "../Main";

function Keyboard() {
  const { onSelect, onDelete, enterWord, eliminatedLetters } =
    useContext(AppContext);
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];

  const keyboardAction = useCallback((action) => {
    if (action.key === "Enter") {
      enterWord();
    } else if (action.key === "Backspace") {
      onDelete();
    } else {
      keys1.forEach((key) => {
        if (action.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
      keys2.forEach((key) => {
        if (action.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
      keys3.forEach((key) => {
        if (action.key.toUpperCase() === key) {
          onSelect(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", keyboardAction);

    return () => {
      document.removeEventListener("keydown", keyboardAction);
    };
  }, [keyboardAction]);

  return (
    <div className="keyboard" onKeyDown={keyboardAction}>
      <div className="line1">
        {keys1.map((key) => {
          return (
            <Key keyValue={key} eliminated={eliminatedLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line2">
        {keys2.map((key) => {
          return (
            <Key keyValue={key} eliminated={eliminatedLetters.includes(key)} />
          );
        })}
      </div>
      <div className="line3">
        <Key keyValue={"ENTER"} big />
        {keys3.map((key) => {
          return (
            <Key keyValue={key} eliminated={eliminatedLetters.includes(key)} />
          );
        })}
        <Key keyValue={"DELETE"} big />
      </div>
    </div>
  );
}

export default Keyboard;
