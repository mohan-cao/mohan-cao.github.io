import React, { Component } from 'react';
import './ImageLoader.scss';

class ImageLoader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      image: ''
    }
  }

  componentDidMount() {
    const hdLoaderImg = new Image();
    hdLoaderImg.src = this.props.src;
    hdLoaderImg.onload = () => this.setState({ image: this.props.src });
  };

  render() {
    if (this.state.image) return <img alt={this.props.alt} className={this.props.className} style={this.props.style} src={this.state.image} />;
    return (
      <div
        className={this.props.className}
        style={{
          ...this.props.style,
          'backgroundColor': `hsl(${360 * Math.random()},${25 + 70 * Math.random()}%,${85 + 10 * Math.random()}%)`
        }}
      />
    )
  }

}
ImageLoader.defaultProps = {
  className: '',
  style: {}
}

export default ImageLoader;