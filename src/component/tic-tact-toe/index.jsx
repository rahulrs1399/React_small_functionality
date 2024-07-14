import './style.css'


function Square({ value }) {
  return <button className="square">{value}</button>;
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
