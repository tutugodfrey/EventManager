
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';
import ViewCenters from './ViewCenters';
import actions from './../redux/actions';

class AddCenterForm extends React.Component {
  constructor () {
    super();
    this.state = {
      userType:'',
      facilities:[],
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
  centerNameChange(event) {
    event.preventDefault()
    this.setState({
      centerName:event.target.value
    })
  }
  locationChange(event) {
    event.preventDefault()
    this.setState({
      location:event.target.value
    })
  }
  costChange(event) {
    event.preventDefault()
    this.setState({
      cost:event.target.value
    })
  }
  sitsChange(event) {
    event.preventDefault()
    this.setState({
      sits:event.target.value
    })
  }
  facilitiesChange(event) {
    event.preventDefault()
    if(event.target.checked) {
      this.state.facilities.push(event.target.value)
    } else {
      const value = event.target.value;
      const index = this.state.facilities.indexOf(value);
      this.state.facilities.pop()
    }
  }

  addCenter(data) {
    const headers =  new Headers();
    const token = this.props.store.getState().userData.token;
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'POST',
      enctype: 'multipath/form-data',
      headers,
      body:JSON.stringify(data)
    }

    fetch('http://localhost:8080/api/centers', options)
    .then(res => res.json())
    .then(data => this.props.store.dispatch(actions.displayPage(ViewCenters)))
    .catch(error => console.log(error))
  }
  handleAddCenter(event) {
    event.preventDefault()
     const centerData = {
      centerName:this.state.centerName,
      location:this.state.location,
      cost:this.state.cost,
      sits:this.state.sits,
      facilities:this.state.facilities,
      userType:this.props.store.getState().userData.userType
    }
    this.addCenter(centerData)
    }

  form(){
   return <Form formId = 'addCenterForm' method = 'post' action = '/api/centers' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Add Center </h1>
        <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.centerNameChange.bind(this)} value = {this.state.centerName} ref = 'name' name = 'centerName' placeholder = 'name' /><br />
        <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.locationChange.bind(this)} value = {this.state.location} ref = 'location' name = 'location' placeholder = 'Location' /><br />
        <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
        <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.costChange.bind(this)} value = {this.state.cost} ref = 'cost' name = 'cost' placeholder = 'Cost' /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.sitsChange.bind(this)} value = {this.state.sits} ref = 'sits' name = 'sits' placeholder = 'Sits' /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData}  onChange = {this.facilitiesChange.bind(this)} />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.handleAddCenter.bind(this)}  value = 'Add Center' />
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

