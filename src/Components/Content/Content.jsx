import { useState } from "react";
import "./Content.css";
import Card from "../Card/Card";

const dummyData = [
  { url: "1" },
  { url: "2" },
  { url: "3" },
  { url: "4" },
  { url: "5" },
  { url: "6" },
  { url: "7" },
  { url: "8" },
  { url: "9" },
];

export default function Content() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="content-container">
      <div className="content">
        <div className="score-container">
          <span>Current score: {currentScore}</span>
          <span>Best score: {bestScore}</span>
        </div>
        <div className="cards-container">
          <ul>
            {dummyData.map((item, index) => {
              return (
                <li key={index}>
                  <Card url={item.url} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
