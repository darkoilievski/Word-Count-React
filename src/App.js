import React, { useState, useEffect, useRef } from "react";
import useHook from "./useHook";
import "./App.css";

function App() {
  const [
    state,
    time,
    startGame,
    wordCount,
    disableButton,
    typeValue,
    inputRef,
    startTheGame,
  ] = useHook();

  return (
    <>
      <h1>How fast can you type?</h1>
      <textarea
        value={state}
        onChange={typeValue}
        disabled={!startGame}
        ref={inputRef}
      />
      <h4>Time remaining: {time} </h4>
      <button onClick={startTheGame} disabled={disableButton}>
        Start
      </button>
      <h1>Word count: {wordCount}</h1>
      <footer>
        <p>Created by Darko Ilievski</p>
      </footer>
    </>
  );
}

export default App;
