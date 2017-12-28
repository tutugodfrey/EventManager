import React from 'react';
import Link from './elementComponents/Link';
import Ul from './elementComponents/Ul';
import Image from './elementComponents/image';
import AddEvent from './AddEvent';
import ViewCenters from './ViewCenters';
import ViewEvents from './ViewEvents';
import actions from './../redux/actions'



class Event extends React.Component {
  constructor() {
    super();
    this.state = {
      center:{}
    }
  }
  componentWillMount(){
    this.getCenter()
  }

  handleModifyEvent(event) {
    console.log('Want to modify event?')
    
  }

  modifyEvent(data) {
    const headers =  new Headers();
    const token = this.props.store.getState().userData.token;
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'PUT',
      enctype: 'multipath/form-data',
      headers,
      body:JSON.stringify(data)
    }
    console.log(this.props.eventId)
    fetch(`http://localhost:8080/api/events/${ this.props.eventId }`, options)
    .then(res => res.json())
    .then(data => {
      if(data.eventType){
        this.props.store.dispatch(actions.displayPage(ViewEvents))
        console.log(data)
      } else {
        console.log(data)
      }
    })
    .catch(error => console.log(error))
  }

  handleConfirmEvent(event) {
    console.log(this.props.userId)
    console.log('Want to confirm event?')
    const data = {
      userId: this.props.userId,
      confirm: 'true'
    }
    if(this.props.store.getState().userData.userType === 'admin'){
      this.modifyEvent(data);
    } else {
      console.log('you are not allowed to perform this action')
    }
  }

  handleRejectEvent(event) {
    console.log('Your are rejecting this events?')
    const data = {
      userId: this.props.userId,
      confirm: 'false'
    }
    if(this.props.store.getState().userData.userType === 'admin'){
      this.modifyEvent(data);
    } else {
      console.log('you are not allowed to perform this action')
    }
  }

  handleDeleteEvent(event) {
    event.preventDefault()
    const headers =  new Headers();
    const newState = this.props.store.getState();
    let body = {
      userType: newState.userData.userType
    }
    headers.append('Content-Type', 'application/json');
    headers.append('token', newState.userData.token)
    const options = {
      method:'DELETE',
      headers,
      body:JSON.stringify(body)
    }

    if(newState.userData.userType === 'admin') {
      fetch(`http://localhost:8080/api/events/ ${this.props.eventId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.displayPage(ViewEvents));
      })
    } else if ((newState.userData.userType === 'regular') && (newState.userData.userId === this.props.userId)) {
      // require userId
      fetch(`http://localhost:8080/api/events/ ${this.props.eventId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.displayPage(ViewEvents));
      })
    }
  }
  getCenter() {
    const newState = this.props.store.getState();
    const token = newState.userData.token;
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'GET',
      headers,
    }
    fetch(`http://localhost:8080/api/centers/${this.props.centerId}`, options)
    .then(res => res.json())
    .then(data => { 
      if(data.centerName) {
        this.setState({
          center:data
        })
      } else {
        console.log(data)
      }
    }) 
    .catch(error => console.log(error))
  }

  whichEvent() {
    const userType = this.props.store.getState().userData.userType;
    let actionLinks
    if(userType === 'admin') {
      actionLinks = <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleDeleteEvent.bind(this)} hrefContent = 'Reject' />

    } else if(userType === 'regular') {
      actionLinks = ''
    }
    const whichEvents = this.props.store.getState().whichEvents;
    if(whichEvents === 'center') {
      return (
        <div>
          <h1> {this.state.center.centerName} </h1>
          <Image imgSrc = '/events-photo/images8.jpg' imgClass = '' />
          <p> {this.props.eventType} </p><br/>
          <p> {this.props.eventData} </p><br/>
          <p> Status: {this.props.status} </p><br />
          <Ul listItems = {this.props.listItem} />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleDeleteEvent.bind(this)} hrefContent = 'Delete Event' />
          {actionLinks}
        </div>
      )
    } else if (whichEvents === 'user') {
      return (
        <div>
          <h1> {this.state.center.centerName} </h1>
          <Image imgSrc = '/events-photo/images8.jpg' imgClass = '' />
          <p> {this.props.eventType} </p><br/>
          <p> {this.props.eventData} </p><br/>
          <p> Status: {this.props.status} </p><br />
          <Ul listItems = {this.props.listItem} />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleDeleteEvent.bind(this)} hrefContent = 'Delete Event' />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleModifyEvent.bind(this)} hrefContent = 'Modify Event' />
        </div>
      )
    } else if(whichEvents === 'all') {
      return (
        <div>
          <h1> {this.state.center.centerName} </h1>
          <Image imgSrc = '/events-photo/images8.jpg' imgClass = '' />
          <p> display event owner here </p><br />
          <p> {this.props.eventType} </p><br/>
          <p> {this.props.eventData} </p><br/>
          <p> Status: {this.props.status} </p><br />
          <Ul listItems = {this.props.listItem} />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleDeleteEvent.bind(this)} hrefContent = 'Delete Event' />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleConfirmEvent.bind(this)} hrefContent = 'Confirm' />
          <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleRejectEvent.bind(this)} hrefContent = 'reject' />
        </div>
      )
    }
  }

  render () {
    return (
       this.whichEvent() 
    )
  }
}
export default Event;