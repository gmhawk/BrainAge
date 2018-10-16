import React from 'react';
// import Featured from './Featured/Featured';
// import MainPage from './MainPage/MainPage';
// import SideNav from './SideNav/SideNav';
import Game from './Game';
import Signin from './Signin';
import Score from './Score';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      userName: null,
      finished: false,
      time: 45,
      score: 0,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.checkTime = this.checkTime.bind(this);
    this.startTime = this.startTime.bind(this);
  }

  handleStart() {
    this.setState(prevState => ({
      start: !prevState.start,
    }));
  }

  handleChange(e) {
    this.setState({
      userName: e.target.value,
    });
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.handleStart();
    }
  }

  checkTime() {
    setInterval(() => {
      if (this.state.time === 0) {
        this.setState(prevState => ({
          finished: !prevState.finished,
        }));
      }
    }, 1000);
  }

  startTime() {
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }));
    }, 1000);
  }


  render() {
    let game;
    if (!this.state.finished) {
      if (this.state.start) {
        game = (
          <Game
            userName={this.state.userName}
            checkTime={this.checkTime}
            startTime={this.startTime}
            time={this.state.time}
          />
        );
      } else {
        game = (
          <Signin
            handleChange={this.handleChange}
            handleStart={this.handleStart}
            handleKeyPress={this.handleKeyPress}
          />
        );
      }
    } else if (this.state.finished) {
      game = <Score />;
    }
    return (
      <div id="page">
        {game}
      </div>
    );
  }
}

// <Featured />
// <MainPage />
// <SideNav />
export default App;
