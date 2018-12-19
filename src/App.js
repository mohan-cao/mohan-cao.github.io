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
        <Container style={{ zIndex: 1 }}><Resume /></Container>
      </div>
    );
  }
}

export default App;
