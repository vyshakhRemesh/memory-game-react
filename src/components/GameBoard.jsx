import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, handleClick, isFlipped, isSolved, gridSize }) => {
  return (
    <div
      className={`grid gap-2 mb-4`}
      style={{
        gridTemplateColumns: `repeat(${gridSize},minmax(0,1fr))`,
        width: `min(100%,${gridSize * 5.5}rem)`,
      }}
    >
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            handleClick={handleClick}
            isFlipped={isFlipped}
            isSolved={isSolved}
            card={card}
          />
        );
      })}
    </div>
  );
};

export default GameBoard;
