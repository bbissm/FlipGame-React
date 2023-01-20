import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./Item";
import {
  FaReact,
  FaAngular,
  FaGithub,
  FaVuejs,
  FaJava,
  FaPhp,
} from "react-icons/fa";

const exampleIcons = [
  { Icon: FaReact, color: "text-blue-400", matched: false },
  { Icon: FaAngular, color: "text-red-500",matched: false },
  { Icon: FaVuejs, color: "text-green-500",matched: false },
  { Icon: FaJava, color: "text-blue-900",matched: false },
  { Icon: FaGithub, color: "text-black-300",matched: false },
  { Icon: FaPhp, color: "text-purple-400",matched: false },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  //shuffle
  const shuffleCards = () => {
    const shuffledCards = [...exampleIcons, ...exampleIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  //handle choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  //compare selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.Icon === choiceTwo.Icon) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.Icon === choiceOne.Icon) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });

        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 500);
      }
    }
  }, [choiceOne, choiceTwo]);

  //reset choice
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  //start new game
  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className="App">
      <h1 className="mb-12 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-rose-500 ">Flipper DEV Game</h1>
      <button className="ocus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={shuffleCards}>New Game</button>

      <div className="max-w-md mx-auto my-12 h-96 center grid grid-cols-4 gap-8">
        {cards.map((card) => (
          <Item
            key={card.id}
            card={card}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

      <p>Turns: {turns}</p>
    </div>
  );
}

export default App;