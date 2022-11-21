import React, { useContext } from "react";
import { AppContext } from "../Main";

function Key({ keyValue, big, eliminated }) {
  const { onSelect, onDelete, enterWord } = useContext(AppContext);
  const selectLetter = () => {
    if (keyValue === "ENTER") {
      enterWord();
    } else if (keyValue === "DELETE") {
      onDelete();
    } else {
      onSelect(keyValue);
    }
  };
  return (
    <div
      className="key"
      id={big ? "big" : eliminated && "eliminated"}
      onClick={selectLetter}
    >
      {keyValue}
    </div>
  );
}

export default Key;
