import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    const { handleStart, handleChange, handleKeyPress } = this.props;
    return (
      <div id="signin">
        <p>Enter Username: </p>
        <input type="text" onChange={handleChange} onKeyPress={handleKeyPress} />
        <button type="button" onClick={handleStart}>Start</button>
      </div>
    );
  }
}

export default Signin;
