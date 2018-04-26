
import React from 'react';
import ReactDom from 'react-dom';
import FormOptions from './formOptions';
import CheckBoxes from './CheckBox';

 class FormInput extends React.Component {
 render() {
   return ( 
    <div className = {this.props.divClass}>
    <label htmlFor = {this.props.id}>{this.props.labelValue}</label>  
    <input type ={this.props.type} id = {this.props.id} className = {this.props.inputClass}  ref = {this.props.referred} onChange = {this.props.onChange} onClick = {this.props.click} name = {this.props.name} placeholder = {this.props.placeholder} value = {this.props.value} />
    </div>
     )
 }
}

class FormSubmit extends React.Component {
  render() {
    return ( 
     <div className = {this.props.divClass}>
     <label htmlFor = {this.props.id}>{this.props.labelValue}</label>  
     <input type ={this.props.type} id = {this.props.id} className = {this.props.inputClass} onClick = {this.props.onClick} name = {this.props.name} placeholder = {this.props.placeholder} value = {this.props.value} />
     </div>
      )
  }
 }

class FormSelect extends React.Component {
  render() {
    return (
      <select className = { this.props.inputClass } name = { this.props.name } onChange = {this.props.onChange} >
        <FormOptions options = { this.props.options } />
      </select>
    )
  }
}

class CheckBox extends React.Component {
  render () {
    return ( 
      <fieldset className ='form-group' >
        <legend>{this.props.checkBoxData.name}</legend>
        <CheckBoxes checkBoxData = { this.props.checkBoxData } onChange = {this.props.onChange} /><br />
      </fieldset>
    )
  } 
}

export {
  FormInput,
  FormSelect,
  CheckBox
}
