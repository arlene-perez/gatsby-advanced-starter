import React, { PureComponent } from 'react';
import {render} from 'react-dom';

import NavigationBar from "../NavigationBar/NavigationBar";
import Slideshow from "../Slideshow/Slideshow";
import Header from "../Header/Header";
import "./Home.css";

class Home extends PureComponent {
  render() {
    return (
      <div className="home">
        <NavigationBar />
        <Slideshow />
        <Header />
        <h1 className="title"> Christina & Johnny </h1>
      </div>
    )
  }
};

export default Home;
