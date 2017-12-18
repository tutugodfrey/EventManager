
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, CheckBox  }  from './formComponents/formComponents.js';
// import CheckBox  from './formComponents/formComponents.js';
import Links from './links';

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
  render () {
    return ( 
      <div> 
        <form>
          <h1> Add Center </h1>
          <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'name' placeholder = 'name' /><br />
          <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'location' name = 'location' placeholder = 'Location' /><br />
          <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
          <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'cost' name = 'cost' placeholder = 'Cost' /><br />
          <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
          <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits' /><br />
          <CheckBox checkBoxData = {this.state.checkBoxData}/>
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Add Center' />
        </form>
        <div>
          <Links hrefLink = '#' hrefId = 'viewCenters' hrefText = 'View Center' hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default AddCenterForm;

