
import React from 'react';
import ReactDom from 'react-dom';
 import { FormInput, FormSelect, CheckBox  } from './formComponents/formInputs';
import Div from './elementComponents/Div';
import Form from './elementComponents/Form';
import Link  from './elementComponents/Link';
import ViewEvents from './ViewEvents';
import actions from './../redux/actions';
import HelperFuncts from './../../../public/funcs/HelperFuncts'
const helperFuncts = new HelperFuncts();

class ModifyEventForm extends React.Component {
  constructor () {
    super();
    this.date = new Date();
    this.state = {
      days:['day', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
      months: ['month', 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
      years:['year',  this.date.getFullYear(), this.date.getFullYear()+ 1, this.date.getFullYear() + 2, this.date.getFullYear() + 3],
      checkBoxData: {},
      center: {},
      user: {}
    }
  }

  componentWillMount() {
    const newState = this.props.store.getState();
    const eventId = newState.eventId;
    let event; 
    let center;
    if(newState.userEvents) {
      event = helperFuncts.getObjectByField(newState.userEvents, 'id', eventId)
    } else if (newState.centerEvents) {
      event = helperFuncts.getObjectByField(newState.centerEvents, 'id', eventId)
    } else {
      event = {};
    }

    this.setState({
      checkBoxData: {
        name:'facilities',
        values: ['Air Condition', 'Catering', 'Projector'],
        inputClass: 'form-control'
      },
      eventId:event.id,
      eventType: event.eventType,
      facilities:event.facilities,
      userId: event.userId,
      centerId: event.centerId
    })

    if(newState.centers) {
      center = helperFuncts.getObjectByField(newState.centers, 'id', event.centerId);
      this.setState({
        center
      })
    } else {
      this.getCenters();
    }
  }
  
  eventTypeChange(event) {
    event.preventDefault()
    this.setState({
      eventType: event.target.value
    })
  }
  eventDayChange(event) {
    event.preventDefault()
    this.setState({
      eventDay:event.target.value
    })
  }
  eventMonthChange(event) {
    event.preventDefault()
    this.setState({
      eventMonth:event.target.value
    })
  }
  eventYearChange(event) {
    event.preventDefault()
    this.setState({
      eventYear:event.target.value
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
  getCenters() {
    const token = this.props.store.getState().userData.token;
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'GET',
      headers,
    }

    fetch('http://localhost:8080/api/centers', options)
    .then(res => res.json())
    .then(data => { 
      this.props.store.dispatch(actions.setCenters(data)); 
      const center = helperFuncts.getObjectByField(this.props.store.getState().centers, 'id', this.state.centerId);
      this.setState({
        center
      })
    })
  }

  modify(data) {
    const newState = this.props.store.getState();
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', newState.userData.token)
    const options = {
      method:'PUT',
      headers,
      body:JSON.stringify(data)
    }
    if(newState.userData.userId === this.state.userId) {
      fetch(`http://localhost:8080/api/events/ ${this.state.eventId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.displayPage(ViewEvents));
      })
    } else {
      console.log('you are not allowed to perform this action')
    }
  }

  handleModifyEvent(event) {
    event.preventDefault();
    const data = {
      eventType: this.state.eventType,
      eventDate: `${this.state.eventYear}-${this.state.eventMonth}-${this.state.eventDay}`,
      facilities: this.state.facilities,
      userId: this.props.store.getState().userData.userId
    }
    this.modify(data)
  }

  form(){
   return <Form formId = 'modify-event-Form' method = 'put' action = '/api/events' formControls = {this.content()} />
  }
  content() {
   return ( 
    <div> 
        <h1> Modify Event </h1>
        <h3> { this.state.center.centerName } </h3>
        <FormInput type = 'text' id ='type-of-event' labelValue = 'Type of Event' divClass = 'form-group' inputClass = 'requiredFields form-control' ref = 'name' onChange = {this.eventTypeChange.bind(this)} name = 'type' placeholder = 'Type of Event' value ={ this.state.eventType } /><br />
        <FormSelect inputClass = 'requiredFields form-control' onChange = { this.eventDayChange.bind(this) } name = 'day' options = {this.state.days} />
        <FormSelect inputClass = 'requiredFields form-control' onChange = { this.eventMonthChange.bind(this) } name = 'month' options = {this.state.months} />
        <FormSelect inputClass = 'requiredFields form-control' onChange = { this.eventYearChange.bind(this) } name = 'year' options = {this.state.years} />
        <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' onChange = { this.eventPixChange.bind(this) } name = 'centers-pix' /><br />
        <CheckBox checkBoxData = {this.state.checkBoxData } onChange = { this.facilitiesChange.bind(this) } />
        <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.handleModifyEvent.bind(this) } value = 'Modify Event' />
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
export default ModifyEventForm;

