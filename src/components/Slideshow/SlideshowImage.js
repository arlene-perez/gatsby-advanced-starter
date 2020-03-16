import React, { Component } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import "./Slideshow.css";

const SlideshowImage  = ({
  currentImage,
  index
}) => {
  console.log(`csst ${index}`)
  // <CSSTransition
  // key={`csst ${index}`}
  // in
  // appear
  // timeout={2500}
  // classNames="image"
  // >
  // </CSSTransition>
  // <TransitionGroup>
  // </TransitionGroup>
  return (
      <div className="slideshow-image">
      <img
      src={currentImage}
      className="image"
      key={`csst ${index}`}
      />
      </div>
  )
};

export default SlideshowImage;
