const Result = ({ playerChoice, computerChoice, result }) => {
  return (
    <div className="rps-result">
      {playerChoice && <p>You chose: {playerChoice}</p>}
      {computerChoice && <p>Computer chose: {computerChoice}</p>}
      {result && <h2>{result}</h2>}
    </div>
  );
};

export default Result;
