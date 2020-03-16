import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Slideshow.css";
import SlideshowImage from "./SlideshowImage.js";

class SlideshowWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      imageSources: ['/images/christie1.jpg', '/images/christie2.jpg', '/images/christie3.jpg', '/images/christie4.jpg', '/images/christie5.jpg'],
      activeIndex: 0
    }
  }

  componentDidMount() {
    // this.goToNextSlide();
  }

  goToSlide = (index) => {
    this.setState({activeIndex: index});
  }

  goToPrevSlide = () => {
    const newIndex = this.getSlideIndex(-1);
    this.setState({activeIndex: newIndex});
  }

  goToNextSlide = () => {
    const newIndex = this.getSlideIndex(1);
    this.setState({activeIndex: newIndex});
  }

  getSlideIndex = offset => {
    // debugger;
    const index = this.state.activeIndex + offset;
    return index === this.state.imageSources.length
      ? 0 // Go to the first slide
      : index < 0
        ? this.state.imageSources.length - 1 // Go to the last slide
        : index;
  };
  // <button
  // onClick={this.goToPrevSlide}>
  // Back
  // </button>
  // <button
  // onClick={this.goToNextSlide}>
  // Next
  // </button>

  render() {
    const currentImage = this.state.imageSources[this.state.activeIndex];
    return (
      <div className="slideshow-wrapper">
        <div className="slideshow-container">
        <SlideshowImage
        currentImage={currentImage}
        index={this.state.activeIndex}
        />
        </div>
      </div>
    )
  }
};

export default SlideshowWrapper;
