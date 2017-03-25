import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      intervalId: null,
      time: 0
    }
  }
  setTimer (time = 0) {
    clearInterval(this.state.intervalId)
    let intervalId = setInterval(() => {
      let time = this.state.time - 1
      if (time === 0) { clearInterval(intervalId) }
      this.setState({
        time
      })
    }, 1000)

    return this.setState({
      intervalId,
      time
    })
  }
  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to React Timer!</h2>
        </div>
        <p className='App-intro'>
          <button onClick={() => this.setTimer(5)} className='five'>5 Seconds</button>
          <button onClick={() => this.setTimer(10)} className='ten'>10 Seconds</button>
          <button onClick={() => this.setTimer(15)} className='fiftheen'>15 Seconds</button>
        </p>
        <h2>Time Left: {this.state.time} </h2>
      </div>
    )
  }
}

export default App
