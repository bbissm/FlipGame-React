import React, {useEffect, useState} from 'react'
import './App.css';
import uuidv4 from 'uuid/dist/v4'
import Board from "./Board";
import {FaReact, FaAngular, FaGithub, FaVuejs, FaJava, FaPhp} from 'react-icons/fa';

export const FlipContext = React.createContext();

function App() {
    const [icons, setIcons] = useState(exampleIcons)
    const shuffledItems = [...exampleIcons, ...exampleIcons].sort(() => Math.random() - 0.5).map(icon => ({...icon, id:uuidv4()}))
    const [selectedItemOne, setSelectedItemOne] = useState(null)
    const [selectedItemTwo, setSelectedItemTwo] = useState(null)

    useEffect(() => {
        setIcons(shuffledItems)
        }, [])

    useEffect(()=>{

    },[icons])

    useEffect(() => {

    },[selectedItemOne, selectedItemTwo])

    function handleChange(icon) {
        setIcons(icons.map(item => (item.id === icon.id ? {...item, disabled:!icon.disabled} : item)))
        selectedItemOne == null ? setSelectedItemOne(icon) : setSelectedItemTwo(icon);
    }

    const flipContextValue = {
        handleChange
    }
    
    return (
        <FlipContext.Provider value={flipContextValue}>
            <h1 className="text-center py-5 px-10 shadow-2xl text-white bg-gradient-to-r from-green-400 to-blue-500 text-6xl font-bold">Flip Game</h1>
            <Board
                icons={icons}
            />
        </FlipContext.Provider>
  );
}


const exampleIcons = [
    {
        IconStyle:  {IconTitle: FaReact}, color:'text-blue-400', disabled: true
    },
    {
        IconStyle:  {IconTitle: FaAngular}, color:'text-red-500', disabled: true
    },
    {
        IconStyle:  {IconTitle: FaVuejs}, color:'text-green-500', disabled: true
    },
    {
        IconStyle:  {IconTitle: FaJava}, color:'text-blue-900', disabled: true
    },
    {
        IconStyle:  {IconTitle: FaGithub}, color:'text-black-300', disabled: true
    },
    {
        IconStyle:  {IconTitle: FaPhp}, color:'text-purple-400', disabled: true
    }
]

export default App;
