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

class App extends Component {

  state = {
    //objects of objects
    food: getRandomCoordinates(),
    snakeDots: [ 
      [0,0],
      [2,0],
      [4,0]
    ]
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
