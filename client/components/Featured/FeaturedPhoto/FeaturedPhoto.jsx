import React from 'react';
// import Photo from './Photo';

class FeaturedPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [
        './images/elephant.jpg',
        './images/flying_fish.jpg',
        './images/white_lion.jpg'],
      current: 0,
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    console.log('Go Next Picture');
    this.setState(prevState => ({
      current: (prevState.current + 1) % 3,
    }));
  }

  handlePrev() {
    console.log('Go Previous Picture');
    if (this.state.current === 0) {
      this.setState({
        current: 2,
      });
    } else {
      this.setState(prevState => ({
        current: prevState.current - 1,
      }));
    }
  }
  // TODO: Axios get request to get all pictures and pass it down to each photo as props

  render() {
    const { slides, current } = this.state;
    return (
      <div id="featured_photo">
        <img className="" src={`${slides[current]}`} alt="images" />
        <button type="button" onClick={this.handlePrev}>Prev</button>
        {' '}
        <button type="button" onClick={this.handleNext}>Next</button>

      </div>
    );
  }
}
// <Photo />

export default FeaturedPhoto;
