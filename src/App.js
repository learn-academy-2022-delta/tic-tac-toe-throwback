import React, { Component } from 'react'
import Square from './components/Square'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
        squares: Array(9).fill(null)
    }
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = 'X';
    this.setState({squares: squares});
  }



  render() {
    return(
      <>
        <h1>Tic Tac Toe</h1>
        <div className= 'gameboard'>{this.state.squares.map((value, index)=> {
          return(
          <Square 
            key={index}
            value={value}
            index={index}
          />
          )
        })}
        </div>
      </>
    )
  }
}
export default App