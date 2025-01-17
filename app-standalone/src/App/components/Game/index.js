import React, { useState } from "react";
import Board from "../Board";
import LeagueTable from "../LeagueTable/LeagueTable";

/**
 * A game of tic-tac-toe.
 */
const Game = () => {
  const [gameHistory, setGameHistory] = useState([
    { squares: Array(9).fill(null) },
  ]); // Start of game
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXisNext] = useState(true);
  const [playerNames, setPlayerNames] = useState({
    X: "Player 1",
    O: "Player 2",
  });

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
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
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
    const desc = move ? "Go to move #" + move : "Go to game start";
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

  //winning player name calculated by index
  let status;
  if (winner) {
    const winningPlayer = playerNames[winner];
    status = `${winningPlayer} wins!`;
  } else {
    status = `Next player: ${playerNames[xIsNext ? "X" : "O"]}`;
  }

  const handleNameChange = (player, name) => {
    setPlayerNames((prevNames) => ({ ...prevNames, [player]: name }));
  };

  //creates a new game rather than back stepping
  const handleNewGame = () => {
    setGameHistory([{ squares: Array(9).fill(null) }]);
    setStepNumber(0);
    setXisNext(true);
    setPlayerNames({ X: "Player 1", O: "Player 2" });
  };

  return (
    <div className="game">
      <div className="left-container">
        <div className="game-board">
          <Board
            squares={current.squares}
            winningSquares={winningSquares}
            onClick={(i) => handleClick(i)}
          />
        </div>
        <button onClick={handleNewGame}>New game</button>
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
          <label htmlFor="player2Name">Player 2:</label>
          <input
            id="player2Name"
            type="text"
            value={playerNames.O}
            onChange={(e) => handleNameChange("O", e.target.value)}
          />
        </div>

        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
      <LeagueTable winner={winner} playerNames={playerNames} />
    </div>
  );
};

export default Game;
