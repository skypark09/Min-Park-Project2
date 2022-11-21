import React from "react";
import HardLetter from "./hardLetter";

function HardBoard() {
  return (
    <div className="board">
      <div className="row">
        <HardLetter position={0} attempt={0} />
        <HardLetter position={1} attempt={0} />
        <HardLetter position={2} attempt={0} />
        <HardLetter position={3} attempt={0} />
        <HardLetter position={4} attempt={0} />
        <HardLetter position={5} attempt={0} />
        <HardLetter position={6} attempt={0} />
      </div>
      <div className="row">
        <HardLetter position={0} attempt={1} />
        <HardLetter position={1} attempt={1} />
        <HardLetter position={2} attempt={1} />
        <HardLetter position={3} attempt={1} />
        <HardLetter position={4} attempt={1} />
        <HardLetter position={5} attempt={1} />
        <HardLetter position={6} attempt={1} />
      </div>
      <div className="row">
        <HardLetter position={0} attempt={2} />
        <HardLetter position={1} attempt={2} />
        <HardLetter position={2} attempt={2} />
        <HardLetter position={3} attempt={2} />
        <HardLetter position={4} attempt={2} />
        <HardLetter position={5} attempt={2} />
        <HardLetter position={6} attempt={2} />
      </div>
      <div className="row">
        <HardLetter position={0} attempt={3} />
        <HardLetter position={1} attempt={3} />
        <HardLetter position={2} attempt={3} />
        <HardLetter position={3} attempt={3} />
        <HardLetter position={4} attempt={3} />
        <HardLetter position={5} attempt={3} />
        <HardLetter position={6} attempt={3} />
      </div>
      <div className="row">
        <HardLetter position={0} attempt={4} />
        <HardLetter position={1} attempt={4} />
        <HardLetter position={2} attempt={4} />
        <HardLetter position={3} attempt={4} />
        <HardLetter position={4} attempt={4} />
        <HardLetter position={5} attempt={4} />
        <HardLetter position={6} attempt={4} />
      </div>
    </div>
  );
}

export default HardBoard;
