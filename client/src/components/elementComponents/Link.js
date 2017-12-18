import React from 'react';


class Link extends React.Component {
  render () {
    return  (
    <a href = {this.props.hrefLink} id = {this.props.hrefId} className = {this.props.hrefClass}>
      {this.props.hrefContent}
    </a>
  )
  } 
}

export default Link;