
import React from 'react';
import ReactDom from 'react-dom';
import FormOptions from './formOptions';

 class FormInput extends React.Component {
 render() {
   return ( 
    <div className = {this.props.divClass}>
    <label htmlFor = {this.props.id}>{this.props.labelValue}</label>  
    <input type ={this.props.type} id = {this.props.id} className = {this.props.inputClass} name = {this.props.name} placeholder = {this.props.placeholder} value = {this.props.value} />
    </div>
     )
 }
}

class FormSelect extends React.Component {
  render() {
    return (
      <select className = {this.props.inputClass}>
        <FormOptions options = {this.props.options} />
      </select>
    )
  }
}

export default FormInput;
export {
  FormSelect
}
