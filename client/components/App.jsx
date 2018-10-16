import React from 'react';
// import Featured from './Featured/Featured';
// import MainPage from './MainPage/MainPage';
// import SideNav from './SideNav/SideNav';
import Game from './Game';
import Signin from './Signin';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start: false,
      userName: null,
    };
    this.handleStart = this.handleStart.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
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

  render() {
    let game;
    if (this.state.start) {
      game = <Game userName={this.state.userName} />;
    } else {
      game = (
        <Signin
          handleChange={this.handleChange}
          handleStart={this.handleStart}
          handleKeyPress={this.handleKeyPress}
        />
      );
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
