import React from 'react';
import Board from '../Board/Board.js';
import calculateWinner from '../../Util/util.js';
import './Game.css';
class Game extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [{
                squares: Array(9).fill(null)
            }],
            xIsNext: true,
            stepNumber: 0
        };
    }
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        if (calculateWinner(squares) || squares[i]) {
            alert('Winner:' + squares[i]);
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{
                squares: squares
            }]),
            xIsNext: !this.state.xIsNext,
            stepNumber: history.length,
        });
        if (history.length === 9) {
            alert('Game Over,Winner:not all');
            return;
        }
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) ? false : true
        });
    }

    render() {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);
        const moves = history.map((step, move) => {
            const desc = move ? 'Move #' + move : 'Game start';
            return (
                <li key={move}>
                    <a type="button" title={'点击回到第' + move + '步'} onClick={() => this.jumpTo(move)}>{desc}</a>
                </li>
            );
        });
        let status = 'Next player:' + (this.state.xIsNext ? 'X' : 'O');
        if (winner) {
            status = 'Winner:' + winner;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className="game-info">
                    <div className="game-status">{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

export default Game;