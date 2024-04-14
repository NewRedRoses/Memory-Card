import "./Card.css";
export default function Card({ pictureUrl, name }) {
  return (
    <div className="card">
      <button>
        <img src={pictureUrl} alt="" />
        <p>{name}</p>
      </button>
    </div>
  );
}
