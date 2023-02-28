import React, { useState } from "react";
import Board from "../Board";
import LeagueTable from "../LeagueTable/LeagueTable";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([{ squares: Array(9).fill(null) }]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [playerNames, setPlayerNames] = useState({ X: "Player 1", O: "Player 2" });
  const [league, setLeague] = useState({X: 0, O: 0})

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winningSquares: [a, b, c] };
      }
    }

    return null;
  };

  const handleClick = (i) => {
    const history = gameHistory.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setGameHistory([...history, { squares }]);
    setStepNumber(history.length);
    setXisNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXisNext(step % 2 === 0);
  };
  const moves = gameHistory.map((step, move) => {
    const desc = move ?
        'Go to move #' + move :
        'Go to game start';
    return (
        <li key={move}>
            <button onClick={() => jumpTo(move)}>{desc}</button>
        </li>
    );
});

  const current = gameHistory[stepNumber];
  const result = calculateWinner(current.squares);
  const winner = result?.winner;
  const winningSquares = result?.winningSquares;


  //uses the index of playernames object to associate with X/O
  let status;
  if (winner) {
    status = `${playerNames[winner]} wins!`;
    setLeague({[winner]:1})

  } else {
    status = `Next player: ${playerNames[xIsNext ? "X" : "O"]}`;
  }

  const handleNameChange = (player, name) => {
    setPlayerNames((prevNames) => ({ ...prevNames, [player]: name }));
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} winningSquares={winningSquares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <div>
          <label htmlFor="player1Name">Player 1:</label>
          <input
            id="player1Name"
            type="text"
            value={playerNames.X}
            onChange={(e) => handleNameChange("X", e.target.value)}
          />
        </div>
       

            <div>
                <label htmlFor="player2">Player 2:</label>
                <input
                    id="player2"
                    type="text"
                    value={playerNames.O}
                    onChange={(e) => handleNameChange("O", e.target.value)}
                />
            </div>
                <div>{status}</div>
                <ol>{moves}</ol>
            </div>
            <LeagueTable league={league} playerNames={playerNames}/>
        </div>
    );
};

export default Game;

