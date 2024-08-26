import { useEffect, useState, useReducer } from "react";
import Choices from "./Choices";
import Result from "./Result";
import Logs from "./Logs";

const Game = () => {
  const initialScore = { userWins: 0, computerWins: 0 };
  const choices = ["Rock", "Paper", "Scissors"];

  const [playerChoice, setPlayerChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [result, setResult] = useState("");
  const [logs, setLogs] = useState([]);
  const [score, dispatch] = useReducer(reducer, initialScore);

  function reducer(score, action) {
    switch (action.type) {
      case "USER_WIN":
        return { ...score, userWins: score.userWins + 1 };
      case "COMPUTER_WIN":
        return { ...score, computerWins: score.computerWins + 1 };
      case "RESET":
        return initialScore;
      default:
        return score;
    }
  }

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
      dispatch({ type: "USER_WIN" });
      return "You win!";
    } else {
      dispatch({ type: "COMPUTER_WIN" });
      return "You lose!";
    }
  };

  const resetGame = () => {
    setPlayerChoice("");
    setComputerChoice("");
    setResult("");
    setLogs([]);
    dispatch({ type: "RESET" });
  };

  useEffect(() => {
    if (result) {
      setLogs((prevLog) => [
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
        score={score}
      />
      {result && <button onClick={resetGame}>Play Again</button>}
      {logs.length > 0 && <Logs logs={logs} />}
    </div>
  );
};

export default Game;
