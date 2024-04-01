import React from "react";
import { useState } from "react";
import Confetti from "react-confetti";

import { Container, Row } from "react-bootstrap";

function Square({value, onSquareClick}){




    
    return(
        <div >
        
        <button className="square "
        style={{backgroundColor: value === 'X' ? 'lightblue': (value === 'O' ? 'lightgreen' : 'white')}} 
        onClick={onSquareClick} >{value}</button>
        
        </div>
    )
}

function Board() {
    const [xIsNext, setXIsNext] = useState(true);

    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i) {
        if(calculateWinner(squares) || squares[i]) {
            return;
          }
        const nextSquares = squares.slice();
        if (xIsNext) {
            nextSquares[i] = "X";
          } else {
            nextSquares[i] = "O";
          }
        
        setSquares(nextSquares);
        setXIsNext(!xIsNext);
      }

      let  winner = calculateWinner(squares);
      let status;
      if (winner) {
        status =  winner + ` wins the game`;
      } else {
        status =  (xIsNext ? 'X' : 'O') + `'s Turn`;
      }

    return(
        <>
        <div className="game-container">

      <h1 className="game-title">Tic-Tac-Toe</h1>

    
      <div className="game-status">{status}</div>

   {winner && <Confetti />}
      <Container className="d-flex justify-content-center align-items-center">
        <Row>
          <div className="board">
            <div className="board-row">
              <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
              <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
              <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
              <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
              <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
              <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
              <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
              <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
              <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
          </div>
        </Row>
      </Container>
    </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


export default Board;