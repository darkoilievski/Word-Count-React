import { useState, useEffect, useRef } from "react";

const useHook = () => {
  const STARTING_TIME = 10;
  // States
  const [state, setState] = useState("");
  const [time, setTime] = useState(STARTING_TIME);
  const [startGame, setStartGame] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);
  // REF

  const inputRef = useRef(null);

  // Functions
  const typeValue = (e) => {
    setState(e.target.value);
  };

  const calculateWordsCount = () => {
    const words = state.trim().split(" ");
    return words.filter((word) => word !== "").length;
  };

  const startTheGame = () => {
    setStartGame(true);
    setState("");
    setTime(STARTING_TIME);
    setDisableButton(true);
    // In order for the ref to work we need to set a disabled method to false, because that is a synchornous JS and it runs after
    // setStartGame to true. OTherwise the ref is not working because the state change happens after the ref is run and it doesn't focus
    inputRef.current.disabled = false;
    inputRef.current.focus();
  };

  const endGame = () => {
    setStartGame(false);
    const numberOfWords = calculateWordsCount(state);
    setWordCount(numberOfWords);
    setDisableButton(false);
  };

  // Use Effect
  useEffect(() => {
    if (startGame === true && time > 0) {
      setTimeout(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      endGame();
    }
  }, [time, startGame]);

  return [
    state,
    time,
    startGame,
    wordCount,
    disableButton,
    typeValue,
    inputRef,
    startTheGame,
  ];
};

export default useHook;
