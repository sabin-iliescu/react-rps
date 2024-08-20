const Choices = ({ choices, playGame }) => {
  return (
    <div className="rps-choices">
      {choices.map((choice) => (
        <button key={choice} onClick={() => playGame(choice)}>
          {choice}
        </button>
      ))}
    </div>
  );
};

export default Choices;
