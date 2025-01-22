import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Trigger animation by adding class on page load
    const elements = document.querySelectorAll(".animate-on-load");
    elements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add("fade-in");
      }, index * 300); // staggered animation
    });
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen animate-on-load"
      style={{
        background:
          "linear-gradient(90deg, rgba(0, 0, 255, 0.1) 25%, transparent 25%) -50px 0, linear-gradient(180deg, rgba(0, 0, 255, 0.1) 25%, transparent 25%) 0 -50px",
        backgroundSize: "40px 40px",
        backgroundColor: "#0f0f0f",
      }}
    >
      {/* Title with glowing effect */}
      <h1 className="text-5xl font-bold mb-16 text-center text-blue-400 drop-shadow-lg animate-on-load">
        Welcome to the Memory Game Arcade
      </h1>

      {/* Select mode with improved layout */}
      <div className="flex justify-center gap-10 animate-on-load">
        {/* Classic mode card */}
        <div
          className="cursor-pointer w-80 h-56 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-xl shadow-xl flex items-center justify-center text-3xl font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-on-load"
          onClick={() => navigate("/classic")}
        >
          Classic Mode
        </div>

        {/* Timed mode card */}
        <div
          className="cursor-pointer w-80 h-56 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl shadow-xl flex items-center justify-center text-3xl font-semibold transform hover:scale-105 hover:shadow-2xl transition-all duration-300 animate-on-load"
          onClick={() => navigate("/timed")}
        >
          Timed Mode
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
