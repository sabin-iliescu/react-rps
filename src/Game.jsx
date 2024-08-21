import { useEffect, useState } from "react";
import Choices from "./Choices";
import Result from "./Result";
import Log from "./Log";

const Game = () => {
  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [log, setLog] = useState([]);

  const choices = ["Rock", "Paper", "Scissors"];

  const playGame = (choice) => {
    setPlayerChoice(choice);
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    setComputerChoice(computerChoice);
    setResult(determineWinner(choice, computerChoice));
  };

  const determineWinner = (player, computer) => {
    if (player === computer) return "It's a draw!";
    if (
      (player === "Rock" && computer === "Scissors") ||
      (player === "Paper" && computer === "Rock") ||
      (player === "Scissors" && computer === "Paper")
    ) {
      return "You win!";
    } else {
      return "You lose!";
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setLog([]);
  };

  useEffect(() => {
    if (result) {
      setLog((prevLog) => [
        ...prevLog,
        { playerChoice, computerChoice, result },
      ]);
    }
  }, [playerChoice, computerChoice, result]);

  return (
    <div className="game-container">
      <h1>Rock Paper Scissors</h1>
      <Choices choices={choices} playGame={playGame} />
      <Result
        playerChoice={playerChoice}
        computerChoice={computerChoice}
        result={result}
      />
      {result && <button onClick={resetGame}>Play Again</button>}
      {log.length > 0 && <Log log={log} />}
    </div>
  );
};

export default Game;
