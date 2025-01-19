import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
        Welcome to the Memory Game Arcade
      </h1>

      {/* Select mode */}
      <div className="flex justify-center gap-8">
        {/* Classic mode card */}
        <div
          className="cursor-pointer w-72 h-48 bg-red-500 text-white rounded-lg shadow-lg flex items-center justify-center text-2xl font-semibold hover:bg-red-600 transition-all duration-200"
          onClick={() => navigate("/classic")}
        >
          Classic Mode
        </div>

        {/* Timed mode card */}
        <div
          className="cursor-pointer w-72 h-48 bg-blue-500 text-white rounded-lg shadow-lg flex items-center justify-center text-2xl font-semibold hover:bg-blue-600 transition-all duration-200"
          onClick={() => navigate("/timed")}
        >
          Timed Mode
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
