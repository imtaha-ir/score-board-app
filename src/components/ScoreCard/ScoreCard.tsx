import type { Player } from "../../types/player";
import "./ScoreCard.css";

interface ScoreCardProps {
  player: Player;
  color?: string;
  onScoreChange: (amount: number) => void;
}

function ScoreCard({ player, color, onScoreChange }: ScoreCardProps) {
  return (
    <div className="score-card" style={{ borderColor: color }}>
      <h3 className="player-name" style={{ color }}>
        {player.name}
      </h3>
      <div className="panel">
        <div className="player-score" style={{ color }}>
          {player.score}
        </div>
        <div className="controls">
          <button onClick={() => onScoreChange(-1)}>-1</button>
          <button onClick={() => onScoreChange(1)}>+1</button>
          <button onClick={() => onScoreChange(5)}>+5</button>
        </div>
      </div>
    </div>
  );
}

export default ScoreCard;
