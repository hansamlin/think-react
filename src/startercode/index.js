import React from "react";
import "./index.css";

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

class Square extends React.Component {
  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {this.props.player}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: "X", record: [], winner: "" };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    if (!this.state.winner) {
      const record = this.state.record;
      const isRepeat = record.find(item => item.num === i);

      if (!isRepeat) {
        record.push({ num: i, player: this.state.player });

        const player = record
          .filter(item => item.player === this.state.player)
          .map(item => item.num);

        let isWinner = false;
        if (player.length >= 3) {
          lines.every(line => {
            let i = 0;
            if (isWinner) {
              return false;
            }
            line.every(num => {
              if (player.indexOf(num) === -1) {
                return false;
              } else {
                i++;
              }
              if (i === 3) {
                isWinner = true;
              }
              return true;
            });
            return true;
          });
        }

        this.setState({
          player: this.state.player === "X" ? "O" : "X",
          record,
          winner: isWinner ? this.state.player : ""
        });
      }
    }
  }

  renderSquare(i) {
    const item = this.state.record.find(item => item.num === i);

    return (
      <Square
        value={i}
        state={this.state}
        player={item && i === item.num && item.player}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  render() {
    const text = this.state.winner ? "Winner" : "Next player";
    const status = `${text}: ${this.state.player}`;

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
}

export default class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}
