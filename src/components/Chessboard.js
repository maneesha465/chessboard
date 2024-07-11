
import React from 'react';
import './Chessboard.css';

const Chessboard = () => {
  const renderSquare = (i, j) => {
    const isBlack = (i + j) % 2 === 1;
    const className = isBlack ? 'square black' : 'square white';
    return <div className={className} key={`${i}-${j}`}></div>;
  };

  const renderRow = (i) => {
    const squares = [];
    for (let j = 0; j < 8; j++) {
      squares.push(renderSquare(i, j));
    }
    return <div className="row" key={i}>{squares}</div>;
  };

  const renderBoard = () => {
    const rows = [];
    for (let i = 0; i < 8; i++) {
      rows.push(renderRow(i));
    }
    return rows;
  };

  return (
  <div className='d-flex justify-content-center align-items-center vh-100'>
  <div className="chessboard">{renderBoard()}</div>;
  </div>
  );
};

export default Chessboard;
