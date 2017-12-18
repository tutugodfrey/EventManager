
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';

class AddCenterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      userType:'',
      checkBoxData: {}
    }
  }

  componentWillMount() {
    this.setState({
      userType:'admin',
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      }
    })
  }
  form(){
   return <Form formId = 'addCenterForm' method = 'post' action = '/api/centers' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Add Center </h1>
        <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'name' placeholder = 'name' /><br />
        <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'location' name = 'location' placeholder = 'Location' /><br />
        <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
        <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'cost' name = 'cost' placeholder = 'Cost' /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits' /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData}/>
        <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Add Center' />
      </div>
    )
  }
  render () {
    return ( 
      <div>
        <Div divClass = 'card' divContent = {this.form()} />
        <Link hrefLink = '#' hrefId = 'viewCenters' hrefContent = 'View Centers' hrefClass = 'btn btn-primary' /> <br />
      </div>
    )
  } 
}

export default AddCenterForm;

