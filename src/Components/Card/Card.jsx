import "./Card.css";

export default function Card({ pictureUrl, name, onShuffle }) {
  const handleShuffle = () => {
    onShuffle();
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
