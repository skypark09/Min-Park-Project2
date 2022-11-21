import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
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
    </div>
  );
}

export default Home;
