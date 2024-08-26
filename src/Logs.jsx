const Logs = ({ logs }) => {
  return (
    <div className="logs">
      <h2>Logs: </h2>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            <b>Round {index + 1}: </b> The user choice <b>{log.playerChoice}</b>
            , the computer choice <b>{log.computerChoice}</b>, result:{" "}
            <b>{log.result}</b>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Logs;
