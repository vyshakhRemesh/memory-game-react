import React, { useEffect, useState } from "react";

const Timer = ({ time, setTime, won }) => {
  const [totalTime, setTotalTime] = useState(time); // Store the initial total time

  useEffect(() => {
    // Set the initial total time only once
    if (time > 0 && totalTime === 0) {
      setTotalTime(time);
    }

    // Exit if the timer reaches zero or the game is won
    if (time === 0 || won) return;

    // Start the countdown
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    // Clean up the interval
    return () => clearInterval(timer);
  }, [time, won, totalTime, setTime]);

  // Determine the text color based on the percentage of remaining time
  const getTimeColor = () => {
    const percentageRemaining = (time / totalTime) * 100;

    if (percentageRemaining > 50) return "text-green-400"; // Above 50%: Green
    if (percentageRemaining > 25) return "text-orange-400"; // Between 25% and 50%: Orange
    return "text-red-500"; // Below 25%: Red
  };

  return (
    <div
      className="flex items-center justify-center w-full max-w-md p-4 rounded-lg shadow-lg border-2 border-orange-500"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 165, 0, 0.2) 0%, transparent 100%)",
      }}
    >
      <span className="text-2xl font-bold tracking-widest text-center text-orange-400">
        Time Remaining:{" "}
        <span
          className={`${getTimeColor()} text-3xl font-extrabold animate-pulse`}
          style={{
            textShadow:
              "0 0 10px rgba(255, 165, 0, 0.8), 0 0 20px rgba(255, 140, 0, 0.6)",
          }}
        >
          {time}s
        </span>
      </span>
    </div>
  );
};

export default Timer;
