import React from 'react';
import ReactDom from 'react-dom';

class clickableImage extends React.Component {
  render () {
    return  (
    <a href = {this.props.href} className = {this.props.className}>
      <img src = {this.props.src} class = 'images backgroundImage' alt = {this.props.alt}  />
    </a>
  )
  } 
}

export default clickableImage;