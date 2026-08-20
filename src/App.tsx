import { useState } from "react";
import "./App.css";
import ScoreCard from "./components/ScoreCard/ScoreCard";
import TitleBar from "./components/TitleBar/TitleBar";
import { getColorByIndex } from "./utils/colors";
import type { Player } from "./types/player";

function App() {
  const defaultPlayers = [
    {
      id: 1,
      name: "Player 1",
      score: 0,
    },
    {
      id: 2,
      name: "Player 2",
      score: 0,
    },
  ];
  const [players, setPlayers] = useState<Player[]>(defaultPlayers);

  const scoreChangeHandler = (playerId: number, amount: number) => {
    const newPlayers = [...players];
    const index = newPlayers.findIndex((player) => player.id === playerId);
    if (index >= 0) {
      newPlayers[index].score += amount;
      setPlayers(newPlayers);
    }
  };
  const handleResetClick = () => {
    const allArentZero = players.some((player) => player.score > 0);
    if (allArentZero) {
      const confirmReset = confirm("Do you want to reset scores?");
      if (confirmReset) {
        const newPlayers = players.map((p) => {
          return {
            ...p,
            score: 0,
          };
        });
        setPlayers(newPlayers);
      }
    } else {
      const confirmReset = confirm("Reset players?");
      if (confirmReset) {
        setPlayers(defaultPlayers);
      }
    }
  };
  const handleAddPlayer = () => {
    const playerName = prompt("Enter player name:");
    if (!playerName?.trim()) {
      return;
    }

    const newPlayers = [...players];
    newPlayers.push({
      id: Date.now(),
      name: playerName.trim(),
      score: 0,
    });
    setPlayers(newPlayers);
  };
  const handlePlayerNameChange = (playerId: number) => {
    const currentPlayer = players.find((player) => player.id === playerId);
    const playerName = prompt("Enter player name:", currentPlayer?.name);
    if (!playerName?.trim()) {
      return;
    }

    const newPlayers = [...players];
    const index = newPlayers.findIndex((player) => player.id === playerId);
    if (index >= 0) {
      newPlayers[index] = {
        ...newPlayers[index],
        name: playerName.trim(),
      };
      setPlayers(newPlayers);
    }
  };

  const scoreCards = players.map((player, playerIndex) => {
    return (
      <ScoreCard
        key={player.id}
        player={player}
        color={getColorByIndex(playerIndex)}
        onScoreChange={(amount) => scoreChangeHandler(player.id, amount)}
        onNameClick={() => handlePlayerNameChange(player.id)}
      />
    );
  });

  return (
    <main>
      <div className="board">
        <TitleBar
          onResetClick={handleResetClick}
          onAddPlayerClick={handleAddPlayer}
        />
        <section className="scores">{scoreCards}</section>
      </div>
    </main>
  );
}

export default App;
