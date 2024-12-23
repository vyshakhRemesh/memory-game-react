import { useEffect, useState } from "react";

const MemoryGame = () => {
  const [gridSize, setGridSize] = useState(4);
  const [cards, setCards] = useState([]);

  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);

  const [maxMoveCount, setMaxMoveCount] = useState(0); //maxmove restriction state variable
  const [moveCount, setMoveCount] = useState(0); //number of moves (one pair is one move)

  const [lost, setLost] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [won, setWon] = useState(false);

  const handleGridSizeChange = (e) => {
    const size = parseInt(e.target.value);
    if (size >= 2 && size <= 10) {
      setGridSize(size);
    }
  };

  const initializeGame = () => {
    const totalCards = gridSize * gridSize;
    const pairCount = Math.floor(totalCards / 2);
    const numbers = [...Array(pairCount).keys()].map((n) => n + 1);
    const shuffledCards = [...numbers, ...numbers]
      .sort(() => Math.random() - 0.5)
      // .slice(0, totalCards)
      .map((number, index) => ({ id: index, number }));
    console.log(shuffledCards);

    setCards(shuffledCards);
    setFlipped([]);
    setSolved([]);
    setWon(false);
    setLost(false);
    setMoveCount(0);
  };

  useEffect(() => {
    initializeGame();
  }, [gridSize, maxMoveCount]);

  // useEffect(() => {
  //   checkWin();
  // }, [solved]);

  // useEffect(() => {
  //   console.log(won);

  //   checkLoss();
  // }, [moveCount]);

  useEffect(() => {
    checkResult();
  }, [moveCount]);

  const checkMatch = (secondId) => {
    const [firstId] = flipped; //takes the first element(first ID) in the flipped arrary
    // console.log(flipped);
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
      //increase move count
      setMoveCount(moveCount + 1);

      setDisabled(true);
      if (id !== flipped[0]) {
        setFlipped([...flipped, id]);

        //check match logic
        checkMatch(id);
      } else {
        setFlipped([]);
        setDisabled(false);
      }
    }
  };

  const isFlipped = (id) => {
    return flipped.includes(id);
    // || solved.includes(id);
  };

  const isSolved = (id) => {
    return solved.includes(id);
  };

  // const checkWin = () => {
  //   if (solved.length === cards.length && cards.length > 0) {
  //     setWon(true);
  //   }
  // };

  // const checkLoss =  () => {
  //    checkWin();
  //   console.log(`win status at the checkloss is ${won}`);

  //   if (won === true) {
  //     console.log("returned at the check loss");
  //     return;
  //   }
  //   if (maxMoveCount > 0 && maxMoveCount <= moveCount) {
  //     setLost(true);
  //   }
  // };

  const checkResult = () => {
    if (solved.length === cards.length && cards.length > 0) {
      setWon(true);
    } else if (maxMoveCount > 0 && maxMoveCount <= moveCount) {
      setLost(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Memory Game</h1>

      {/* Input */}
      <div className="mb-4 flex flex-col">
        {/* Grid Size input */}

        <label className="mr-2" htmlFor="gridSize">
          Grid Size:(max10)
        </label>

        <input
          type="number"
          id="gridSize"
          min="2"
          max="10"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />

        {/* Max Move count input */}

        <label className="mr-2" htmlFor="moveCount">
          Maxinum Moves Allowed:(0 is for unlimited moves)
        </label>
        <input
          id="moveCount"
          type="number"
          value={maxMoveCount}
          onChange={(e) => setMaxMoveCount(parseInt(e.target.value))}
          className="border-2 border-gray-300 rounded px-2 py-1"
        />
      </div>
      {/* Moves left progress  */}
      <div>
        Moves :{moveCount}/{maxMoveCount}
      </div>

      {/*  */}
      {lost ? (
        // Game over message
        <div>OOPS</div>
      ) : (
        // Game Board
        <div
          className={`grid gap-2 mb-4`}
          style={{
            gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`,
            width: `min(100%,${gridSize * 5.5}rem)`,
          }}
        >
          {cards.map((card) => {
            return (
              <div
                key={card.id}
                onClick={() => handleClick(card.id)}
                className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer
              transition-all duration-300 ${
                //method if we are keeping fliped and solved as different
                isFlipped(card.id)
                  ? "bg-blue-500 text-white"
                  : isSolved(card.id)
                  ? "bg-green-500 text-white"
                  : " bg-gray-300 text-gray-400"

                //method if we consider solved as also a fliped card
                // isFlipped(card.id)
                //   ? isSolved(card.id)
                //     ? "bg-green-500 text-white"
                //     : "bg-blue-500 text-white"
                //   : " bg-gray-300 text-gray-400"
              } 
               
              `}
              >
                {/* {isFlipped(card.id) ? card.number : "?"} */}
                {/* if solved card is also flipped */}

                {/* if solved and flipped are different then */}
                {isFlipped(card.id)
                  ? card.number
                  : isSolved(card.id)
                  ? card.number
                  : "?"}
              </div>
            );
          })}
        </div>
      )}

      {/* Result */}
      <div>
        {won ? (
          <div className="mt-4 text-4xl font-bold text-green-600 animate-bounce">
            You won !!
          </div>
        ) : lost ? (
          <div className="mt-4 text-4xl font-bold text-red-600 animate-bounce">
            Game over{" "}
          </div>
        ) : (
          ""
        )}
      </div>
      {/* Reset / Play Again Btn */}
      <div>
        <button
          onClick={initializeGame}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          {won ? "play again" : "Reset"}
        </button>
      </div>
    </div>
  );
};
export default MemoryGame;
