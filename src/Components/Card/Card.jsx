import "./Card.css";

export default function Card({
  pictureUrl,
  name,
  onShuffle,
  setLastSelected,
  lastSelected,
  currentScore,
  setCurrentScore,
}) {
  const handleShuffle = () => {
    setLastSelected(name);
    onShuffle();
    handleScore();
    console.log(name, lastSelected);
  };
  const handleScore = () => {
    if (name === lastSelected) {
      setCurrentScore(currentScore + 1);
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
