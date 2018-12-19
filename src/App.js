import React, { Component } from 'react';
import Container from './Container';
import Resume from './Resume';
import './App.scss';

const numBokehDots = 20

class App extends Component {
  render() {
    return (
      <div className="App">
        { [...new Array(numBokehDots).keys()].map(x => <span key={x} className="bokeh-dot" />)}
        {/* <div style={{ zIndex: 0, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }} /> */}
        <Container style={{ zIndex: 1 }}><Resume /></Container>
      </div>
    );
  }
}

export default App;
