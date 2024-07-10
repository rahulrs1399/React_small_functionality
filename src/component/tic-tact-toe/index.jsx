function Square({ value }) {
  return <button>{value}</button>;
}

export default function TicTactToe() {
  return (
    <div className="tic-tact-toe-container">
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="row">
        <Square />
        <Square />
        <Square />
      </div>
    </div>
  );
}
