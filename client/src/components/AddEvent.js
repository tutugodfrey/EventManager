
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, FormSelect, CheckBox  }  from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';
import ViewEvents from './ViewEvents';
import actions from './../redux/actions';

class AddEventForm extends React.Component {
  constructor () {
    super();
    this.date = new Date();
    this.state = {
      facilities:[],
      days:['day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30,],
      months: ['month', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
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

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        eventPix: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
    console.log(this.state.eventPix)
  }
  facilitiesChange(event) {
    event.preventDefault()
    this.state.facilities.push(event.target.value);
  }

  addEvent(data) {
    const headers =  new Headers();
    const token = this.props.store.getState().userData.token;
   // headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'POST',
      headers,
      body:data
    }

    fetch('http://localhost:8080/api/events', options)
    .then(res => res.json())
    .then(data => {
      if(data.eventType){
       // this.props.store.dispatch(actions.setUserEvents(data));
        this.props.store.dispatch(actions.displayPage(ViewEvents))
        console.log(data)
      } else {
        console.log(data)
      }
      
    })
    .catch(error => console.log(error))
  }
  handleAddEvent(event) {
    event.preventDefault();
    const newState = this.props.store.getState();
    const eventDetails = {
      eventType: this.state.eventType,
      eventDate: `${this.state.year}-${this.state.month}-${this.state.day}`,
      facilities: this.state.facilities,
      userId: newState.userData.userId,
      centerId: newState.centerId,
      eventPix: this.state.eventPix
    } 
    const eventFormData = new FormData();
    eventFormData.append('eventType', this.state.eventType);
    eventFormData.append('eventDate',  `${this.state.year}-${this.state.month}-${this.state.day}`);
    eventFormData.append('facilities', this.state.facilities);
    eventFormData.append('userId', newState.userData.userId);
    eventFormData.append('centerId', newState.centerId);
    eventFormData.append('eventPix', this.state.eventPix);
   // eventFormData.append('token', newState.userData.token);
  // Object.assign(eventFormData, eventDetails)
    this.addEvent(eventFormData);
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
        <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.handleAddEvent.bind(this)} value = 'Add Event' />
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

