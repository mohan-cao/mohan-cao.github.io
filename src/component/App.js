import React, { Component } from 'react'
import Container from '../util/Container'
import Resume from './Resume'
import './App.scss'

const numBokehDots = 20

export async function fetchNewProfile() {
  let resp = await fetch("https://gist.githubusercontent.com/mohan-cao/4ca5114fb02a31bcfb9c6c5b0d31d8fe/raw/profile.json")
  let json = await resp.json()
  return json
}

class App extends Component {
  constructor() {
    super()
    this.state = {
      json: null
    }
  }
  componentDidMount() {
    fetchNewProfile().then(x => !this.isCancelled && this.setState({ json: x }))
  }
  componentWillUnmount() {
    this.isCancelled = true
  }
  render() {
    return (
      <div className="App">
        { [...new Array(numBokehDots).keys()].map(x => <span key={x} className="bokeh-dot" />)}
        <Container style={{ zIndex: 1 }}><Resume json={this.state.json} /></Container>
      </div>
    )
  }
}

export default App
