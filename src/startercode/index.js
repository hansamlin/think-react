import React from "react";
import "./index.css";

// const lines = [
//   [0, 1, 2],
//   [3, 4, 5],
//   [6, 7, 8],
//   [0, 3, 6],
//   [1, 4, 7],
//   [2, 5, 8],
//   [0, 4, 8],
//   [2, 4, 6]
// ];

class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <button className="square" onClick={this.props.onClick}>
        {null}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: "X", record: [] };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(i) {
    console.log(i);
    this.setState({
      ...this.state,
      player: this.state.player === "X" ? "O" : "X",
      record: [{ num: i, player: this.state.player }]
    });
  }

  renderSquare(i) {
    return (
      <Square
        value={i}
        player={this.state}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    const status = `Next player: ${this.state.player}`;

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
