import React from 'react';
import Link from 'link';
import Image  from 'image';

class clickableImage extends React.Component {
  image(){
    return   <Image imgSrc = {this.props.imgSrc} imgClass = {this.props.imgClass} />
  }
  render () {
    return  (
    <Link href = {this.props.href} hrefClass = {this.props.hrefClass} hrefContent = {image()}/>
  )
  } 
}

export default clickableImage;