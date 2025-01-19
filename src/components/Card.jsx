import React from "react";

const Card = ({ card, handleClick, isFlipped, isSolved }) => {
  return (
    <div
      key={card.id}
      onClick={() => handleClick(card.id)}
      className={`aspect-square flex items-center justify-center text-xl font-bold rounded-lg cursor-pointer
  transition-all duration-300 ${
    //method if we are keeping fliped and solved as different
    isFlipped(card.id)
      ? "bg-blue-500 text-white"
      : isSolved(card.id)
      ? "bg-green-500 text-white pointer-events-none "
      : " bg-gray-300 text-gray-400"

    //method if we consider solved as also a fliped card
    // isFlipped(card.id)
    //   ? isSolved(card.id)
    //     ? "bg-green-500 text-white"
    //     : "bg-blue-500 text-white"
    //   : " bg-gray-300 text-gray-400"
  } 

  `}
    >
      {/* {isFlipped(card.id) ? card.number : "?"} */}
      {/* if solved card is also flipped */}

      {/* if solved and flipped are different then */}
      {isFlipped(card.id) ? card.number : isSolved(card.id) ? card.number : "?"}
    </div>
  );
};

export default Card;
