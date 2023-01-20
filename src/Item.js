import React from "react";

function Item({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };

  return (
    <div
    className={`flip-box box-content border-4 ${flipped ? 'flip-box box-content border-4' : 'closed'}`}
    onClick={() => handleClick()}
    >
    <div className="flip-box-inner">
        <div className="flip-box-front">
            <div>
                {card.Icon()}
            </div>
        </div>
        <div className="flip-box-back"></div>
    </div>
    </div>
  );
}

export default Item;
