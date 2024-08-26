const Result = ({ playerChoice, computerChoice, result, score }) => {
  return (
    <>
      <div className="rps-result">
        {playerChoice && <p>You chose: {playerChoice}</p>}
        {computerChoice && <p>Computer chose: {computerChoice}</p>}
        {result && <h2>{result}</h2>}
      </div>

      <div className="rps-counter">
        <p>Player: {score.userWins}</p>
        <h2>Score</h2>
        <p>Computer: {score.computerWins}</p>
      </div>
    </>
  );
};

export default Result;
