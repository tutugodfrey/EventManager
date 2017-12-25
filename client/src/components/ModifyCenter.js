
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';
import HelperFuncts from './../../../public/funcs/HelperFuncts'
const helperFuncts = new HelperFuncts();

class ModifyCenterForm extends React.Component {
  constructor () {
    super();
    this.helperFuncts = helperFuncts;
    this.state = {
      userType:'',
      checkBoxData: {},
      centerDetails:[]
      
    }
  }

  componentWillMount() {
    const newState = this.props.store.getState();
    this.setState({
      userType:newState.userData.userType,
      centerDetails:this.helperFuncts.getObjectByField(newState.centers, 'id', newState.centerId),
      
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
    })
  }

  form(){
   return <Form formId = 'modify-center-form' method = 'put' action = '/api/centers/' formControls = {this.content()} />
  }
  content() {
    
   return ( 
    <div> 
        <h1> Modify Center </h1>
        <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'name' placeholder = 'name' value = {this.state.centerDetails.name } /><br />
        <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'location' name = 'location' placeholder = 'Location' value = {this.state.centerDetails.location } /><br />
        <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
        <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'cost' name = 'cost' placeholder = 'Cost' value = {this.state.centerDetails.cost } /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits' value = {this.state.centerDetails.sits } /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData} />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Submit' />
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

