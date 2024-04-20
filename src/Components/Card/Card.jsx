// Card.jsx
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
  const handleShuffle = () => {
    setLastSelected(name);
    onShuffle();
    handleScore();
    console.log(name, lastSelected);
  };

  const handleScore = () => {
    if (name === lastSelected) {
      setCurrentScore((prevScore) => prevScore + 1);
      setLastSelected(undefined);
      name = undefined;
      if (currentScore + 1 > bestScore) {
        setBestScore(currentScore + 1);
      }
    } else {
      if (lastSelected != undefined) setCurrentScore(0);
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
