import React, { Component } from "react";
import "./App.css";

class ScoreBoard extends Component {
  render() {
    return (
      <div className="score-board">
        <b>High score: </b>
        {this.props.highScore}
        <b> Current score: </b>
        {this.props.blackSnakeDots.length - 3}
      </div>
    );
  }
}

export default ScoreBoard;
