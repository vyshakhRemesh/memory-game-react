import React from "react";
import MemoryGame from "../components/MemoryGame";
import { useNavigate } from "react-router-dom";

const TimedGame = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen animate-on-load"
      style={{
        background:
          "linear-gradient(90deg, rgba(255, 165, 0, 0.1) 25%, transparent 25%) -50px 0, linear-gradient(180deg, rgba(255, 165, 0, 0.1) 25%, transparent 25%) 0 -50px",
        backgroundSize: "40px 40px",
        backgroundColor: "#1a1a1a",
      }}
    >
      {/* Back to Dashboard Button */}
      <div className="absolute top-10 left-10">
        <button
          className="bg-orange-600 text-white py-2 px-4 rounded-lg shadow-lg transform hover:scale-105 hover:shadow-2xl transition-all duration-300"
          onClick={() => navigate("/")}
        >
          Back to Dashboard
        </button>
      </div>

      {/* Title with glowing effect */}
      <h1 className="text-5xl font-bold mb-12 text-center text-orange-400 drop-shadow-lg animate-on-load">
        Timed Memory Game
      </h1>

      {/* Memory game container */}
      <div
        className="flex justify-center items-center"
        style={{
          width: "80%", // Make sure the memory game container takes up 80% of the viewport width
          height: "80vh", // 80% of viewport height
        }}
      >
        <MemoryGame gameMode="timed" />
      </div>
    </div>
  );
};

export default TimedGame;
