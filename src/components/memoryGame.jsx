import { useEffect, useState } from "react";
import Result from "./Result";
import Inputs from "./Inputs";
import Timer from "./Timer";
import GameBoard from "./GameBoard";

const MemoryGame = ({ gameMode }) => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);

  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  const [maxMoveCount, setMaxMoveCount] = useState(0); // maxmove restriction state variable
  const [moveCount, setMoveCount] = useState(0); // number of moves (one pair is one move)

  const [time, setTime] = useState(100); // time is 100 by default

  const [start, setStart] = useState(false);
  const [lost, setLost] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }
  };

  const startGame = () => {
    setStart(true);
    initializeGame();
  };

  const resetGame = () => {
    setStart(false);
    setTime(100); // back to default
    initializeGame();
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      .map((number, index) => ({ id: index, number }));

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setLost(false);
    setMoveCount(0);
  };

  useEffect(() => {
    checkResult();
  }, [moveCount, time]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped;
    if (cards[firstId].number === cards[secondId].number) {
      setSolved([...solved, firstId, secondId]);
      setFlipped([]);
      setDisabled(false);
    } else {
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 1000);
    }
  };

  const handleClick = (id) => {
    if (disabled || won) return;

    if (flipped.length === 0) {
      setFlipped([id]);
      return;
    }

    if (flipped.length === 1) {
      setMoveCount(moveCount + 1);
      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => flipped.includes(id);
  const isSolved = (id) => solved.includes(id);

  const checkResult = () => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    } else if (maxMoveCount > 0 && maxMoveCount <= moveCount) {
      setLost(true);
    } else if (time === 0) {
      setLost(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 h-full w-full">
      {!start ? (
        <>
          <h1 className="text-3xl font-bold sticky top-0 bg-transparent py-4 z-10 text-center text-blue-400">
            Game Settings
          </h1>
          <Inputs
            handleGridSizeChange={handleGridSizeChange}
            maxMoveCount={maxMoveCount}
            setMaxMoveCount={setMaxMoveCount}
            time={time}
            setTime={setTime}
            gridSize={gridSize}
            gameMode={gameMode}
            startGame={startGame}
          />
        </>
      ) : (
        <>
          <div className="w-full flex flex-col items-center space-y-4">
            <div className="text-lg font-semibold text-gray-300">
              {gameMode === "classic" ? (
                <div className="flex items-center justify-center w-auto h-16 bg-blue-500 text-white rounded-lg shadow-md text-xl font-semibold px-4 border-4 border-blue-700">
                  <span>
                    Moves:{" "}
                    <span className="text-green-300 font-bold">
                      {moveCount}
                    </span>{" "}
                    /{" "}
                    <span className="text-red-300 font-bold">
                      {maxMoveCount}
                    </span>
                  </span>
                </div>
              ) : (
                <div>
                  <Timer time={time} setTime={setTime} won={won} />
                </div>
              )}
            </div>
            {lost ? (
              <div className="text-3xl font-bold text-red-600">OOPS....!</div>
            ) : (
              <GameBoard
                isFlipped={isFlipped}
                isSolved={isSolved}
                gridSize={gridSize}
                cards={cards}
                handleClick={handleClick}
              />
            )}

            <Result resetGame={resetGame} won={won} lost={lost} />
          </div>
        </>
      )}
    </div>
  );
};

export default MemoryGame;
