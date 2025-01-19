import React, { useEffect } from "react";

const Timer = ({ time, setTime, won }) => {
  useEffect(() => {
    // exit if zero
    if (time === 0 || won) {
      return;
    }

    // start the timer
    const timer = setInterval(() => {
      setTime(time - 1);
      console.log("time changed", time);
    }, 1000);

    // clear interval when timer is 0
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="flex items-center justify-center w-50 h-16 bg-blue-500 text-white rounded-lg shadow-md text-xl font-semibold">
      <span>Time Remaining : {time}S</span>
    </div>
  );
};

export default Timer;
