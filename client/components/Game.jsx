import React from 'react';

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      problem: null,
      answer: null,
      userInput: '',
      score: 0,
    };
    this.getRandomInt = this.getRandomInt.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    const left = this.getRandomInt(10);
    const right = this.getRandomInt(10);
    const solution = left * right;
    this.setState({
      problem: `${left} x ${right}`,
      answer: solution,
    });
    this.props.startTime();
    this.props.checkTime();
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
          {this.props.time}
        </div>
        <p>
          Player:
          <span>
            {' '}
            {this.props.userName}
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
