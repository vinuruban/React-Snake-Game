import React, { Component } from 'react';
import './App.css';
import Snake from './Snake'
import Food from './Food'

const getRandomCoordinates = () => {
  let min = 1;
  let max = 98;
  let x = Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  let y =  Math.floor((Math.random()*(max-min+1)+min)/2)*2;
  return [x,y]
}

const initialState = { //initialState is made so that states can be reset to what's below, when the game ends
  //objects of objects
  food: getRandomCoordinates(),
  snakeDots: [ 
    [0,0],
    [2,0],
    [4,0]
  ],
  direction: 'RIGHT',
  speed: 200,
}

class App extends Component {

  state = initialState;

  componentDidMount() {
    setInterval(this.moveSnake, this.state.speed); //this triggers the moveSnake method each 'this.state.speed' milliseconds
    document.onkeydown = this.onKeyDown; //this executes the the function below. Remember, the func isnt called elsewhere, but in here in the componentDidMount()
  }

  componentDidUpdate() { //componentDidUpdate executes whenever props/states are updated!
    this.stopAtBorder();
  }

  onKeyDown = e => {
    e = e || window.event;
    switch (e.keyCode) { //e.keyCode gets the key number
      case 38: //if 'up' key is press (38), then direction in the state is set to 'UP'
        this.setState({direction: 'UP'});
        break;
      case 40:
        this.setState({direction: 'DOWN'});
        break;
      case 37:
        this.setState({direction: 'LEFT'});
        break;
      case 39:
        this.setState({direction: 'RIGHT'});
        break;
      }
    }

    moveSnake = () => {
      let dots = [...this.state.snakeDots];
      let head = dots[dots.length - 1]; //this takes the last coordinates of the snakeDots (from the state)
    
      switch (this.state.direction) {
        case 'RIGHT':
          head = [head[0] + 2, head[1]]; //once the right key is pressed and the this.state.direction is updated (after onKeyDown is executes), the coordinate of the head is updated! The head is shifted to the right by 2%. Remember, the head is the last coordinates of the snakeDots. 
          break; // head[0] = x, head[1] = y !!!
        case 'LEFT':
          head = [head[0] - 2, head[1]];
          break;
        case 'DOWN':
          head = [head[0], head[1] + 2];
          break;
        case 'UP':
          head = [head[0], head[1] - 2];
          break;
      }
      dots.push(head); //this adds the head
      dots.shift(); //this removes the tail. The tail is the first coordinates of the snakeDots (from the state)
      this.setState({
        snakeDots: dots
      })
    }

    stopAtBorder() {
      let head = this.state.snakeDots[this.state.snakeDots.length - 1]; //this takes the last coordinates of the snakeDots (from the state)
      if (head[0] < 0 || head[0] >= 100 || head[1] < 0 || head[1] >= 100) { // if head has the coordinates: (0 < x <= 100) and (0 < y <= 100)
        this.gameOver();
      }

      //Method 2
      // head[0] < 0 || head[0] >= 100 || head[1] < 0 || head[1] >= 100 ? this.gameOver() : console.log("sdf")
    }

    gameOver() {
      alert('Game Over. Points: ' + (this.state.snakeDots.length-3));
      this.setState(initialState)
    }
    
  render() {
    return (
        <div className='game-area'>
          <Snake blackSnakeDots={this.state.snakeDots} />
          {/* <div className='snake-dot' style={{top:0, left:0}}></div>
          <div className='snake-dot' style={{top:0, left:'2%'}}></div>
          <div className='snake-dot' style={{top:0, left:'4%'}}></div> */}
          <Food redFood={this.state.food} />
        </div>
    )
  }
}

export default App
