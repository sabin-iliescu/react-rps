const Log = ({ log }) => {
  return (
    <div>
      <h2>Logs: </h2>
      <ul>
        {log.map((item, index) => (
          <li key={index}>
            <b>Round {index + 1}: </b> The user choice{" "}
            <b>{item.playerChoice}</b>, the computer choice{" "}
            <b>{item.computerChoice}</b>, result: <b>{item.result}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Log;
