import React from "react";

const Result = ({ resetGame, won, lost }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      {/* Game Status Message */}
      <div>
        {won ? (
          <div className="text-6xl font-bold text-green-600 animate-bounce text-center">
            You Won!!
          </div>
        ) : lost ? (
          <div className="text-6xl font-bold text-red-600 animate-bounce text-center">
            Game Over!
          </div>
        ) : (
          ""
        )}
      </div>

      {/* Reset / Play Again Button */}
      <div>
        <button
          onClick={() => resetGame()}
          className="px-8 py-4 bg-green-500 text-white rounded-lg text-xl font-semibold hover:bg-green-600 transition-all duration-300 shadow-lg transform hover:scale-105"
        >
          {won || lost ? "Play Again" : "Reset"}
        </button>
      </div>
    </div>
  );
};

export default Result;
