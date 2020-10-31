import React from "react";
import '../index.css';
import Block from './Block'

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            xNext: true
        }
    }

    render() {
        const winner = calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'Winner: ' + winner;
        } else {
            status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
        }

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }

    renderSquare(i) {
        return (<Block emit={() => this.handleClick(i)}
                       value={this.state.squares[i]}/>);
    }

    // emit and number are props for square component and available in square {this.props.number and this.props.emit}
    // here in emit we are again putting board (current) component handleClick method
    // which invokes when button is clicked in child component

    handleClick(i) {
        const squares = this.state.squares.slice();
        if (calculateWinner(squares)) {
            return;
        }
        squares[i] = this.state.xNext ? 'X' : 'O';
        this.setState({squares: squares, xNext: !this.state.xNext})
        // Once state changes of component render method will execute again

    }
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
        [2, 4, 6],
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
