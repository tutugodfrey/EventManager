
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';

class ModifyCenterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      userType:'',
      checkBoxData: {},
      center:{}
    }
  }

  componentWillMount() {
    this.setState({
      userType:'admin',
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
      center: {
        name:'queens Tower',
        location:'Warri',
        facilities:['Air Condition', 'Catering', 'Projector'],
        cost: 23,
        sits:560
      }
    })
  }
  form(){
   return <Form formId = 'modify-center-form' method = 'put' action = '/api/centers/' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Modify Center </h1>
        <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'name' placeholder = 'name' value = {this.state.center.name } /><br />
        <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'location' name = 'location' placeholder = 'Location' value = {this.state.center.location } /><br />
        <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
        <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'cost' name = 'cost' placeholder = 'Cost' value = {this.state.center.cost } /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits' value = {this.state.center.sits } /><br />
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

export default ModifyCenterForm;

