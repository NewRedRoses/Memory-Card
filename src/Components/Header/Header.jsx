import "./Header.css";
export default function Header({ title }) {
  return (
    <div className="header-container">
      <h1 className="logo"> {title} guessing game</h1>
      <div className="howto-container">
        <p>
          <b>How to play</b>: Pick all cards only once!
        </p>
      </div>
    </div>
  );
}
