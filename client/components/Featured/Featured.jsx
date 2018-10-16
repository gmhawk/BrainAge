import React from 'react';
import FeaturedPhoto from './FeaturedPhoto/FeaturedPhoto';

class Featured extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="featured">
        [Featured]
        <FeaturedPhoto />
      </div>
    );
  }
}

export default Featured;
