import React from 'react';

class Options extends React.Component {
  render () {
    return (
      <option value = {this.props.option}>
       {this.props.option} 
      </option>
    )
  }
}
class FormOptions extends React.Component {
  render () {
    let options;
    options = this.props.options.map(option => {
     return <Options key ={option} option = {option} />
    })

    return options
  } 
}

export default FormOptions;