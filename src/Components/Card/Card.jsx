// Card.jsx
import { useState } from "react";
import "./Card.css";

export default function Card({
  pictureUrl,
  name,
  onShuffle,
  setLastSelected,
  lastSelected,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
}) {
  const [arrayOfSelectedItems, setArrayOfSelectedItems] = useState([]);
  const handleShuffle = () => {
    setLastSelected(name);
    onShuffle();
    handleScore();
  };

  const handleScore = () => {
    if (name === lastSelected) {
      setCurrentScore((prevScore) => prevScore + 1);
      setLastSelected(undefined);
      const updatedArray = [...arrayOfSelectedItems, name];
      setArrayOfSelectedItems(updatedArray);
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    } else if (lastSelected !== undefined) {
      setCurrentScore(0);
    } else if (arrayOfSelectedItems.includes(name)) {
      setCurrentScore(0);
    }
  };

  return (
    <div className="card">
      <button onClick={handleShuffle}>
        <img src={pictureUrl} alt="" />
        <p>{name}</p>
      </button>
    </div>
  );
}
