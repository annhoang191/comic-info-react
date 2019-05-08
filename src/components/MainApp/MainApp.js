import React, { Component } from 'react';
import './style.css';

import NavBar from '../NavBar/NavBar';
import ComicCard from '../ComicCard/ComicCard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar app_title="Your trustworthy comic info booth" />
        <div className="row justify-content-center">
          <div className="col-12 ">
            <h2 className="site-section-heading text-center">Comic</h2>
          </div>
        </div>
        <div className="list-comics">
          <ComicCard />
        </div>
      </div>
    );
  }
}

export default App;
