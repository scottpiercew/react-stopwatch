import React, { Component } from 'react';
import "./Stopwatch.css"

class Stopwatch extends Component {
  constructor (props) {
    super(props)
    this.state = {
      seconds: 0,
      paused: true,
    }
    this.timerId = null
  }

  handleStart(e) {
    if(!this.timerId) {
      this.timerId = setInterval( _ => this.updateTime(), 1000)
    }
  }

  updateTime() {
    this.setState({
      seconds: this.state.seconds + 1,
    })
  }
  render() {
    return (
      <div className="stopwatch">
        <h1>{this.state.seconds}</h1>
        <div className="controls">
          <button>Reset</button>
          <button onClick={ e => this.handleStart(e)}>Start</button>
          <button>Pause</button>
        </div>
      </div>
    );
  }
}

export default Stopwatch;
