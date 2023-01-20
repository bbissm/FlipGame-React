import React, { useEffect, useState, useMemo } from "react";

import Board from "./Board";
import {
  FaReact,
  FaAngular,
  FaGithub,
  FaVuejs,
  FaJava,
  FaPhp,
} from "react-icons/fa";

export const FlipContext = React.createContext();

function App() {
  const shuffledItems = useMemo(
    () =>
      [...exampleIcons, ...exampleIcons]
        .sort(() => Math.random() - 0.5)
        .map((icon) => ({ ...icon, id: crypto.randomUUID() })),
    [exampleIcons]
  );
  const [selectedItemOne, setSelectedItemOne] = useState(null);
  const [selectedItemTwo, setSelectedItemTwo] = useState(null);

  useEffect(() => {
    if (selectedItemOne && selectedItemTwo) {
      // do something
    }
  }, [selectedItemOne, selectedItemTwo]);

  function handleChange(icon) {
    setSelectedItemOne((prev) => (prev === null ? icon : prev));
    setSelectedItemTwo((prev) => (prev === null ? icon : prev));
  }

  const flipContextValue = {
    handleChange,
  };

  return (
    <FlipContext.Provider value={flipContextValue}>
      <h1 className="text-center py-5 px-10 shadow-2xl text-white bg-gradient-to-r from-green-400 to-blue-500 text-6xl font-bold">
        Flip Game
      </h1>
      <Board icons={shuffledItems} />
    </FlipContext.Provider>
  );
}

const exampleIcons = [
  {
    IconStyle: { IconTitle: FaReact },
    color: "text-blue-400",
    disabled: true,
  },
  {
    IconStyle: { IconTitle: FaAngular },
    color: "text-red-500",
    disabled: true,
  },
  {
    IconStyle: { IconTitle: FaVuejs },
    color: "text-green-500",
    disabled: true,
  },
  {
    IconStyle: { IconTitle: FaJava },
    color: "text-blue-900",
    disabled: true,
  },
  {
    IconStyle: { IconTitle: FaGithub },
    color: "text-black-300",
    disabled: true,
  },
  {
    IconStyle: { IconTitle: FaPhp },
    color: "text-purple-400",
    disabled: true,
  },
];

export default App;
