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
    <div
      className="flex flex-col items-center bg-transparent p-6 rounded-lg border-2 border-green-600 shadow-lg space-y-6"
      style={{
        backdropFilter: "blur(5px)",
      }}
    >
      {/* Grid Size slider */}
      <div className="flex flex-col items-start w-full">
        <label className="text-green-400 font-semibold mb-2" htmlFor="gridSize">
          Grid Size (max 10)
        </label>
        <input
          type="range"
          id="gridSize"
          min="2"
          max="8"
          value={gridSize}
          onChange={handleGridSizeChange}
          className="w-full bg-green-600 rounded-lg"
        />
        <div className="flex justify-between w-full">
          <span className="text-green-400">{gridSize}</span>
        </div>
      </div>

      {gameMode === "classic" ? (
        <>
          {/* Max Move count slider */}
          <div className="flex flex-col items-start w-full">
            <label
              className="text-green-400 font-semibold mb-2"
              htmlFor="moveCount"
            >
              Maximum Moves Allowed (0 for unlimited)
            </label>
            <input
              type="range"
              id="moveCount"
              min="0"
              max="50"
              value={maxMoveCount}
              onChange={(e) => setMaxMoveCount(parseInt(e.target.value))}
              className="w-full bg-green-600 rounded-lg"
            />
            <div className="flex justify-between w-full">
              <span className="text-green-400">
                {maxMoveCount || "Unlimited"}
              </span>
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Timer slider */}
          <div className="flex flex-col items-start w-full">
            <label className="text-green-400 font-semibold mb-2" htmlFor="time">
              Timer (Default 100s)
            </label>
            <input
              type="range"
              id="time"
              min="10"
              max="300"
              value={time}
              onChange={(e) => setTime(parseInt(e.target.value))}
              className="w-full bg-green-600 rounded-lg"
            />
            <div className="flex justify-between w-full">
              <span className="text-green-400">{time}s</span>
            </div>
          </div>
        </>
      )}

      {/* Start Game button */}
      <button
        className="mt-4 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
        onClick={() => startGame()}
      >
        Start Game
      </button>
    </div>
  );
};

export default Inputs;
