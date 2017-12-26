
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, FormSelect, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';

class AddEventForm extends React.Component {
  constructor () {
    super();
    this.date = new Date();
    this.state = {
      facilities:[],
      days:['day', 1,2, 3, 4, 5, ,6 ,7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 2, 23, 24, 25, 6, 27, 28, 29, 30,],
      months: ['month', 1, 2, 3,4, 5, 6, 7,8, 9, 10, 11, 12],
      years:['year',  this.date.getFullYear(), this.date.getFullYear()+ 1, this.date.getFullYear() + 2, this.date.getFullYear() + 3],
      checkBoxData: {},
     userId: '',
     centerId: ''
    }
  }

  componentWillMount() {
    this.setState({
      checkBoxData: {
        name:'facilities',
        values:['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
      center:{
        id:1
      }
    })
  }

 eventTypeChange(event) {
    event.preventDefault()
    this.setState({
      eventType:event.target.value
    })
  }
  eventDayChange(event) {
    event.preventDefault()
    this.setState({
      day:event.target.value
    })
  }
  eventMonthChange(event) {
    event.preventDefault()
    this.setState({
      month:event.target.value
    })
  }
  eventYearChange(event) {
    event.preventDefault()
    this.setState({
      year:event.target.value
    })
  }
  eventPixChange(event) {
    event.preventDefault()
    this.setState({
      eventPix:event.target.value
    })
  }
  facilitiesChange(event) {
    event.preventDefault()
    this.state.facilities.push(event.target.value);
  }
  addEvent(event) {
    event.preventDefault();
    const newState = this.props.store.getState();
    const eventDetails = {
      eventType: this.state.eventType,
      eventDate: `${this.state.day}-${this.state.month}-${this.state.year}`,
      facilities: this.state.facilities,
      userId: newState.userData.userId,
      centerId: newState.centerId
    }
    console.log(this.props.store.getState().userData.token)
    console.log(eventDetails)
  }
  form(){
   return <Form formId = 'addCenterForm' method = 'post' action = '/api/events' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Add Event </h1>
        <FormInput 
        type = 'text'
          id ='type-of-event'
          labelValue = 'Type of Event' 
          divClass = 'form-group' 
          inputClass = 'requiredFields form-control' 
          ref = 'name' 
          onChange = {this.eventTypeChange.bind(this)}
          name = 'type' 
          placeholder = 'Type of Event'
          value = {this.state.eventType}
        /><br />
        <FormSelect 
          inputClass = 'requiredFields form-control' 
          onChange = {this.eventDayChange.bind(this)}
          name = 'day' 
          options = {this.state.days} 
        />
        <FormSelect 
          inputClass = 'requiredFields form-control' 
          onChange = {this.eventMonthChange.bind(this)} 
          name = 'month' 
          options = {this.state.months} 
        />
        <FormSelect 
          inputClass = 'requiredFields form-control' 
          onChange = {this.eventYearChange.bind(this)}
          name = 'year' 
          options = {this.state.years} 
        />
        <FormInput 
        type = 'hidden' 
        id ='centerId' 
        name = 'centerId' 
        value = {this.state.centerId} 
        /><br />
        <FormInput 
          type = 'hidden' 
          id ='userId' 
          name = 'userId' 
          value = {this.state.userId} 
        /><br />
        <FormInput 
          type = 'file' 
          id ='photo' 
          labelValue = 'Photo' 
          inputClass = 'form-group' 
          name = 'centers-pix' 
          onChange = {this.eventPixChange.bind(this)}
        /><br />
        <CheckBox 
          checkBoxData = {this.state.checkBoxData}
          onChange = {this.facilitiesChange.bind(this)} 
        />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.addEvent.bind(this)} value = 'Add Center' />
      </div>
    )
  }
  render () {
    return ( 
      <div>
        <Div divClass = 'card' divContent = {this.form()} />
        <Link hrefLink = '#' hrefId = 'viewCenters' hrefContent = 'View Events' hrefClass = 'btn btn-primary' /> <br />
      </div>
    )
  } 
}

export default AddEventForm;

