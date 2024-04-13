import { useState } from "react";
import "./Content.css";
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
      </div>
    </div>
  );
}
