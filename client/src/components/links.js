import React from 'react';


class Links extends React.Component {
  render () {
    return  (
    <a href = {this.props.href} id = {this.props.hrefId} className = {this.props.hrefClass}>
      {this.props.hrefText}
    </a>
  )
  } 
}

export default Links;