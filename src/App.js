import React, { Component } from 'react';
import Container from './Container';
import Resume from './Resume';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div style={{ zIndex: 0, position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'black' }} />
        <Container style={{ zIndex: 1 }}><Resume /></Container>
      </div>
    );
  }
}

export default App;
