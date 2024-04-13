import "./Card.css";
export default function Card({ url }) {
  return (
    <div className="card">
      <button>{url}</button>{" "}
    </div>
  );
}
