import React from "react";

const Result = ({ resetGame, won, lost }) => {
  return (
    <div>
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
          onClick={() => resetGame()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          {won || lost ? "play again" : "Reset"}
        </button>
        {/* <button
          onClick={() => resetGame()}
          className="mt-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          {won || lost ? "play again" : "Reset"}
        </button> */}
      </div>
    </div>
  );
};

export default Result;
