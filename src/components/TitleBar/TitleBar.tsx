import "./TitleBar.css";

interface TitleBarProps {
  onResetClick: () => void;
  onAddPlayerClick: () => void;
}

function TitleBar({ onResetClick, onAddPlayerClick }: TitleBarProps) {
  return (
    <section className="header">
      <h1>SCOREBOARD</h1>
      <div className="actions">
        <button type="button" onClick={onAddPlayerClick}>
          Add Player
        </button>
        <button type="button" onClick={onResetClick}>
          Reset
        </button>
      </div>
    </section>
  );
}

export default TitleBar;
