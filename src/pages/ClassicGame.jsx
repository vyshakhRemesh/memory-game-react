import React from "react";
import MemoryGame from "../components/MemoryGame";
import { useState } from "react";

const ClassicGame = () => {
  return (
    <div>
      <MemoryGame gameMode="classic" />
    </div>
  );
};

export default ClassicGame;
