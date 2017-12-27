import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'


class ViewEvents extends React.Component {
  constructor () {
    super();
  
  }

  componentWillMount(){
    this.getEvents();
    console.log('events', this.props.store.getState())
   
  }
componentWillUpdate() {
  this.getEvents();
}
  getEvents() {
    const store = this.props.store.getState();
    const userId = store.userData.userId;
    const centerId = store.centerId;
    const token = store.userData.token;
    const whichEvents = store.whichEvents;
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('token', token);
    const options = {
      method:'GET',
      headers,
    }
    
    if(whichEvents === 'user') {
      fetch(`http://localhost:8080/api/events/${userId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.setUserEvents(data)); 
        this.events(whichEvents)
      })
    } else if(whichEvents === 'center') {
      fetch(`http://localhost:8080/api/events/centers/${centerId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.setCenterEvents(data)); 
        this.events(whichEvents)
      })
    } else if(whichEvents === 'all') {
      fetch(`http://localhost:8080/api/events`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.setAllEvents(data)); 
        this.events(whichEvents)
      })
    }  
  }

  events(whichEvents) {
    const newState = this.props.store.getState();
    const centers = newState.centers;
    const userType = newState.userData.userType;
    /*
    let allCenters;
    if(userType === 'admin') {
      allCenters = centers.map(center => {
        return <Center store = {this.props.store} key = {center.id} centerId = {center.id} name = {center.name} location = {center.location} sits = {center.sits} cost = {center.cost} listItem = {center.facilities} />        
      }) 
    } else if(userType === 'regular') {
      allCenters = centers.map(center => {
        return <UserCenter store = {this.props.store} key = {center.id} centerId = {center.id} name = {center.name} location = {center.location} sits = {center.sits} cost = {center.cost} listItem = {center.facilities} />        
      }) 
    }
    */
  }

 
render() {
  return ( 
    <div>
      Show events
    </div>
    )
  }
}

export default ViewEvents;