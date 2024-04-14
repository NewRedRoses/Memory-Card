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
  // API stuff, needs promise.all to wait for all the calls!
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
  return (
    <div className="content-container">
      <div className="content">
        <div className="score-container">
          <span>Current score: {currentScore}</span>
          <span>Best score: {bestScore}</span>
        </div>
        <div className="cards-container">
          <ul>
            {console.log(apiData)}
            {/* without the conditional rendering, there will be an error  */}
            {apiData &&
              apiData.map((item, index) => {
                return (
                  <li key={index}>
                    <Card
                      pictureUrl={item.sprites.front_default}
                      name={item.name}
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
