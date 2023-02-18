// Write your code here

import './index.css'

import {Component} from 'react'

class EvenOddApp extends Component {
  state = {
    randomNumber: 0,
  }

  onClickButton = () => {
    const randomNumberGenarator = Math.ceil(Math.random() * 100)
    // const ceilNumber = Math.ceil(randomNumberGenarator)
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + randomNumberGenarator,
    }))
  }

  render() {
    const {randomNumber} = this.state
    const evenOrOdd = randomNumber % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="background">
        <h1> Count {randomNumber}</h1>
        <p> Count is {evenOrOdd}</p>
        <button type="button" onClick={this.onClickButton}>
          Increment
        </button>
        <p> Increase by Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
