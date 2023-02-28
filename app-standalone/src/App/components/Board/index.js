import React from "react";
import PropTypes from "prop-types";
import Square from "../Square";

/**
 * A board for the game of tic-tac-toe. A 3x3 square.
 */
const Board = ({ onClick, squares, winningSquares }) => {
  const renderSquare = (i) => {
    const isWinningSquare = winningSquares && winningSquares.includes(i);
    return (
      <Square
        key={i}
        value={squares[i]}
        onClick={() => onClick(i)}
        isWinningSquare={isWinningSquare}
      />
    );
  };

  const renderBoardRow = (startIndex) => {
    const row = [];

    for (let i = startIndex; i < startIndex + 3; i++) {
      row.push(renderSquare(i));
    }

    return <div key={startIndex} className="board-row">{row}</div>;
  };

  const boardRows = [];
  for (let i = 0; i < 9; i += 3) {
    boardRows.push(renderBoardRow(i));
  }

  return <div>{boardRows}</div>;
};

Board.propTypes = {
  /**
   * The 1..9 array of squares to display
   */
  squares: PropTypes.array.isRequired,

  /**
   * The handler for when a square is clicked
   */
  onClick: PropTypes.func,

  /**
   * An array of the winning squares indices
   */
  winningSquares: PropTypes.arrayOf(PropTypes.number),
};

export default Board;
