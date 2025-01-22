import React from "react";
import Card from "./Card";

const GameBoard = ({ cards, handleClick, isFlipped, isSolved, gridSize }) => {
  // Adjust the card size based on the gridSize (smaller cards for larger grids)
  const cardSize = Math.max(150 - gridSize * 10, 50); // Dynamically calculate card size
  return (
    <div
      className="grid gap-4 justify-center items-center"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, ${cardSize}px)`, // Card width dynamically calculated
        gridTemplateRows: `repeat(${gridSize}, ${cardSize}px)`, // Card height dynamically calculated
        // gridTemplateColumns: `repeat(${gridSize}, minmax(100px, 1fr))`, // Ensure each card has a minimum size
        // gridTemplateColumns: `repeat(${gridSize}, minmax(${Math.max(
        //   30,
        //   100 - gridSize * 5
        // )}px, 1fr))`,
        maxWidth: `${gridSize * 8}rem`, // Adjust maxWidth to ensure the board is not too wide
        width: "100%", // Ensure it takes up the full width of its container
        padding: "2rem", // Add some padding to avoid overlap with other elements
        margin: "0 auto", // Center the grid horizontally
      }}
    >
      {cards.map((card, index) => (
        <Card
          key={index}
          handleClick={handleClick}
          isFlipped={isFlipped}
          isSolved={isSolved}
          card={card}
        />
      ))}
    </div>
  );
};

export default GameBoard;
