import React from 'react';

class Div extends React.Component {
  render () {
    return ( 
        <div id =  {this.props.divId} className = {this.props.divClass}>
          {this.props.divContent}
        </div>
    )
  } 
}

export default Div;