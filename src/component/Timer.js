import React, { Component } from 'react'
import '../component/Timer.css'
class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: 1500, // 25 minutes
      isRunning: false,
    };
  }

  startTimer() {
    this.timerID = setInterval(() => {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1,
      }));
    }, 1000);

    this.setState({
      isRunning: true,
    });
  }

  pauseTimer() {
    clearInterval(this.timerID);

    this.setState({
      isRunning: false,
    });
  }

  resetTimer() {
    clearInterval(this.timerID);

    this.setState({
      seconds: 1500,
      isRunning: false,
    });
  }

  render() {
    const { seconds, isRunning } = this.state;

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return (
      <div className='main1' >
        <div className='main2'>
        <p className='p'>
          {minutes}:{remainingSeconds < 10 ? '0' : ''}
          {remainingSeconds}
        </p>
       <div className='button'>
        <button className='start' onClick={() => this.startTimer()} disabled={isRunning}>
          Start
        </button>
        <button className='start' onClick={() => this.pauseTimer()} disabled={!isRunning}>
          Pause
        </button>
        <button className='start' onClick={() => this.resetTimer()} disabled={isRunning}>
          Reset
        </button>
        </div>
        </div>
      </div>
    );
  }
}

export default Timer