import React, { Component } from 'react';
import Container from '../util/Container';
import Resume from './Resume';
import './App.scss';

const numBokehDots = 20

class App extends Component {
  constructor() {
    super();
    this.state = {
      json: null
    }
  }
  componentDidMount() {
    fetch("https://gist.githubusercontent.com/mohan-cao/4ca5114fb02a31bcfb9c6c5b0d31d8fe/raw/profile.json")
    .then(x => x.json())
    .then(x => this.setState({ json: x }));
  }
  render() {
    return (
      <div className="App">
        { [...new Array(numBokehDots).keys()].map(x => <span key={x} className="bokeh-dot" />)}
        <Container style={{ zIndex: 1 }}><Resume json={this.state.json} /></Container>
      </div>
    );
  }
}

export default App;
