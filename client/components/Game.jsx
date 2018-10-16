import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      problem: null,
      answer: null,
      userInput: '',
      score: 0,
      time: 20,
    };
    this.getRandomInt = this.getRandomInt.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.startTime = this.startTime.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const left = this.getRandomInt(10);
    const right = this.getRandomInt(10);
    const solution = left * right;
    this.setState({
      problem: `${left} x ${right}`,
      answer: solution,
      userName: this.props.userName,
    });
    this.startTime();
  }

  getRandomInt(max) {
    this.setState({});
    return Math.floor(Math.random() * Math.floor(max));
  }

  handleInput(e) {
    this.setState({
      userInput: e.target.value,
    });
  }

  startTime() {
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time - 1,
      }));
    }, 1000);
  }


  checkAnswer() {
    const { userInput } = this.state;
    const { answer } = this.state;
    if (Number(userInput) === answer) {
      const left = this.getRandomInt(10);
      const right = this.getRandomInt(10);
      const solution = left * right;
      this.setState(prevState => ({
        problem: `${left} x ${right}`,
        answer: solution,
        score: prevState.score + 1,
        userInput: '',
      }));
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }));
    }
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.checkAnswer();
    }
  }

  render() {
    return (
      <div id="game">
        <div>
Time:
          {' '}
          {this.state.time}
        </div>
        <p>
Player:
          <span>
            {' '}
            {this.state.userName}
          </span>
        </p>
        <p>
Score:
          {' '}
          {this.state.score}
        </p>
        {this.state.problem}
        <br />
        <input type="text" onChange={this.handleInput} value={this.state.userInput} onKeyPress={this.handleKeyPress} />
        <input type="submit" onClick={this.checkAnswer} />
      </div>
    );
  }
}

export default Game;
