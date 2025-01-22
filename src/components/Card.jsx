import React from "react";

const Card = ({ card, handleClick, isFlipped, isSolved }) => {
  const getCardClass = () => {
    if (isFlipped(card.id)) {
      return "bg-blue-500 text-white"; // When the card is flipped
    }
    if (isSolved(card.id)) {
      return "bg-green-500 text-white pointer-events-none"; // When the card is solved
    }
    return "bg-gray-300 text-gray-400"; // Default card appearance
  };

  return (
    <div
      key={card.id}
      onClick={() => handleClick(card.id)}
      className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer
        transition-all duration-300 transform hover:scale-105 ${getCardClass()}`}
    >
      {isFlipped(card.id) || isSolved(card.id) ? card.number : "?"}
    </div>
  );
};

export default Card;
