import React from 'react';
import ReactDom from 'react-dom';

class Image extends React.Component {
  render () {
    return  <img src = {this.props.src} class = 'images backgroundImage' alt = {this.props.alt}  />
  } 
}
 /**
  * to create an instance of the image
         <!-- <Image src = './../public/center-photo/images14.jpg'  alt = 'cover-image'/> -->
  */

export default Image;