// Card.jsx
import "./Card.css";

export default function Card({
  name,
  onShuffle,
  setLastSelected,
  lastSelected,
  currentScore,
  setCurrentScore,
  bestScore,
  setBestScore,
  updateSelectedItems,
  arrayOfSelectedItems,
  setArrayOfSelectedItems,
}) {
  const handleShuffle = () => {
    setLastSelected(name);
    onShuffle();
    handleScore();
    console.log(arrayOfSelectedItems);
  };

  const handleScore = () => {
    if (name === lastSelected) {
      setCurrentScore((prevScore) => prevScore + 1);
      setLastSelected(undefined);
      updateSelectedItems(name); // Update arrayOfSelectedItems
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    } else if (lastSelected !== undefined) gameOver();
    else if (arrayOfSelectedItems.includes(name)) gameOver();
  };

  const gameOver = () => {
    setCurrentScore(0);
    setArrayOfSelectedItems([]);
  };

  return (
    <div className="card">
      <button onClick={handleShuffle}>
        <img
          src={`https://img.pokemondb.net/artwork/large/${name}.jpg`}
          alt={name}
        />
        <p>{name}</p>
      </button>
    </div>
  );
}
