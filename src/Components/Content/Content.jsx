// Content.jsx
import { useState, useEffect } from "react";
import "./Content.css";
import Card from "../Card/Card";

const pokemonNames = [
  "sandshrew",
  "squirtle",
  "charizard",
  "ditto",
  "lechonk",
  "pheromosa",
  "munchlax",
  "decidueye",
  "goomy",
];

export default function Content() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [apiData, setApiData] = useState([]);
  const [lastSelected, setLastSelected] = useState("");
  const [arrayOfSelectedItems, setArrayOfSelectedItems] = useState([]);

  useEffect(() => {
    const fetchPokemonData = async () => {
      const promises = pokemonNames.map((pokemon) =>
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
          .then((response) => response.json())
          .then((data) => data),
      );

      const pokemonData = await Promise.all(promises);
      setApiData(pokemonData);
    };

    fetchPokemonData();
  }, []);

  const handleShuffle = () => {
    setApiData(shuffle([...apiData]));
  };
  const updateSelectedItems = (itemName) => {
    setArrayOfSelectedItems((prevArray) => [...prevArray, itemName]);
  };

  return (
    <div className="content-container">
      <div className="content">
        <div className="score-container">
          <span>Current score: {currentScore}</span>
          <span>Best score: {bestScore}</span>
        </div>
        <div className="cards-container">
          <ul>
            {apiData.map((item, index) => {
              return (
                <li key={index}>
                  <Card
                    pictureUrl={item.sprites.front_default}
                    name={item.name}
                    onShuffle={handleShuffle}
                    setLastSelected={setLastSelected}
                    lastSelected={lastSelected}
                    currentScore={currentScore}
                    setCurrentScore={setCurrentScore}
                    bestScore={bestScore}
                    setBestScore={setBestScore}
                    updateSelectedItems={updateSelectedItems}
                    arrayOfSelectedItems={arrayOfSelectedItems}
                    setArrayOfSelectedItems={setArrayOfSelectedItems}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
