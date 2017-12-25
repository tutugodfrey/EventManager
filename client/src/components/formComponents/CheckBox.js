import React from 'react';
import { FormInput } from './formInputs.js';


class Checkbox extends React.Component {
  render () {
    return ( 
      <FormInput type = 'checkbox' id = {this.props.id} labelValue = {this.props.value} value = { this.props.value }  inputClass = {this.props.inputClass}  onChange = {this.props.onChange} name = { this.props.name} />
    )
  } 
}

class CheckBoxes extends React.Component {

  render () {
    let checkbox = '';
    checkbox = this.props.checkBoxData.values.map(value => {
      return <Checkbox id = {value.toLowerCase() } inputClass = { this.props.checkBoxData.inputClass } key = {value} labelValue = { value }  value = {value} onChange = {this.props.onChange} name = {this.props.checkBoxData.name} />
    })
    return checkbox
  } 
}

export default CheckBoxes;