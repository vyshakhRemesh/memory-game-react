import React from "react";

const Inputs = ({
  handleGridSizeChange,
  setMaxMoveCount,
  maxMoveCount,
  time,
  setTime,
  gridSize,
  gameMode,
  startGame,
}) => {
  return (
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
      {gameMode === "classic" ? (
        <>
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
        </>
      ) : (
        <>
          {/* timer input */}
          <label className="mr-2" htmlFor="time">
            Timer:(Default time is 100s)
          </label>
          <input
            id="time"
            type="number"
            value={time}
            onChange={(e) => setTime(parseInt(e.target.value))}
            className="border-2 border-gray-300 rounded px-2 py-1"
          />
        </>
      )}
      <button
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        onClick={() => startGame()}
      >
        Start game
      </button>
    </div>
  );
};

export default Inputs;
