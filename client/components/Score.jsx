import React from 'react';

class Score extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {
    return (
      <div id="score">
        Your brain age is: 69 years old!
        <img src="./images/old_person.jpg" alt="Score" />
      </div>
    );
  }
}

export default Score;
