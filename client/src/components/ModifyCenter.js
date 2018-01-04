
import React from 'react';
import ReactDom from 'react-dom';
import actions from './../redux/actions'
import { FormInput, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';
import ViewCenters from './ViewCenters';
import HelperFuncts from './../../../public/funcs/HelperFuncts'
const helperFuncts = new HelperFuncts();

class ModifyCenterForm extends React.Component {
  constructor () {
    super();
    this.helperFuncts = helperFuncts;
    this.state = {
      userType:'',
      checkBoxData: {},
      centerDetails:{} 
    }
  }

  componentWillMount() {
    const newState = this.props.store.getState();
    const centerDetail = this.helperFuncts.getObjectByField(newState.centers, 'id', newState.centerId);
    this.setState({
      token:newState.userData.token,
      userType:newState.userData.userType,
      centerId: newState.centerId,
      name:centerDetail.name,
      location:centerDetail.location,
      cost:centerDetail.cost,
      sits:centerDetail.sits,
      facilities:centerDetail.facilities,
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
    })
  }
  nameChange(event) {
    event.preventDefault()
    this.setState({
      name: event.target.value
    })
      
  }
  locationChange(event) {
    event.preventDefault()
    this.setState({
      location: event.target.value
    })
  }
  costChange(event) {
    event.preventDefault()
    this.setState({
      cost: event.target.value
    })
  }
  sitsChange(event) {
    event.preventDefault()
    this.setState({
      sits: event.target.value
    })
  }
  facilitiesChange(event) {
    event.preventDefault()
    this.state.facilities.push(event.target.value) 
  }
  modify(data) {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', this.state.token)
    const options = {
      method:'PUT',
      headers,
      body:JSON.stringify(data)
    }

    if(this.state.userType === 'admin') {
      fetch(`/api/centers/ ${this.state.centerId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.displayPage(ViewCenters));
      })
    } else if (data.userType === 'regular') {
      console.log('you are not allowed to perform this action')
    }
  }

  modifyCenter(event) {
    event.preventDefault();
    const centerDetail = {
      userType:this.state.userType,
      name:this.state.name,
      location:this.state.location,
      cost:this.state.cost,
      sits:this.state.sits,
      facilities:this.state.facilities
    }
    this.modify(centerDetail)
  }

  form(){
   return <Form formId = 'modify-center-form' method = 'put' action = '/api/centers/' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Modify Center </h1>
        <FormInput type = 'text' id ='name' labelValue = 'Center Name' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' name = 'name' placeholder = 'name'  onChange = {this.nameChange.bind(this)} value = {this.state.name } /><br />
        <FormInput type = 'text' id ='location' labelValue = 'Location' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'location' name = 'location' placeholder = 'Location'  onChange = {this.locationChange.bind(this)} value = {this.state.location } /><br />
        <FormInput type = 'hidden' id ='userType' name = 'userType' value = {this.state.userType} /><br />
        <FormInput type = 'text' id ='cost' labelValue = 'Cost' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'cost' name = 'cost' placeholder = 'Cost'  onChange = {this.costChange.bind(this)} value = {this.state.cost } /><br />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'centers-pix' /><br />
        <FormInput type = 'text' id ='sits' labelValue = 'Sits' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'sits' name = 'sits' placeholder = 'Sits'  onChange = {this.sitsChange.bind(this)} value = {this.state.sits } /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData} onChange = {this.facilitiesChange.bind(this)} />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.modifyCenter.bind(this)} value = 'Submit' />
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

