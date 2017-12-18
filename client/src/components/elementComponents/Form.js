import React from 'react';

class Form extends React.Component {
  render () {
    return ( 
        <form id =  {this.props.formId} className = {this.props.formClass} method = {this.props.method} action = {this.props.action}>
          {this.props.formControls}
        </form>
    )
  } 
}

export default Form;