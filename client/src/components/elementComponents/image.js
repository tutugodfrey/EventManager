import React from 'react';

class Image extends React.Component {
  render () {
    return  <img id = {this.props.imgId } className = {this.props.imgClass} src = {this.props.imgSrc} alt = {this.props.alt}  />
  } 
}

export default Image;