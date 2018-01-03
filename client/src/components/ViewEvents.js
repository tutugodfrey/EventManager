import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions';
import Event from './Event';


class ViewEvents extends React.Component {
  constructor () {
    super();
    this.state = {
      allEvents:[]
    }
  
  }

  componentWillMount(){
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
    
    let allEvents;
    if(whichEvents === 'center') {
      const events = newState.centerEvents;
      allEvents = events.map(event => {
        return <Event store = {this.props.store} key = {event.id} eventId = {event.id} userId = {event.userId} centerId = {event.centerId} status = {event.confirm}  eventType = {event.eventType} eventDate = {event.eventDate} imgUrl = {event.imgUrl}  listItem = {event.facilities} />        
      }) 
    } else if(whichEvents === 'user') {
      const events = newState.userEvents;
      allEvents = events.map(event => {
        return <Event store = {this.props.store} key = {event.id} eventId = {event.id} userId = {event.userId} centerId = {event.centerId} status = {event.confirm}  eventType = {event.eventType} eventDate = {event.eventDate} imgUrl = {event.imgUrl} listItem = {event.facilities} />        
      }) 
    } else if (whichEvents == 'all') {
      const events = newState.allEvents;
      allEvents = events.map(event => {
        return <Event store = {this.props.store} key = {event.id} eventId = {event.id} userId = {event.userId} centerId = {event.centerId} status = {event.confirm}  eventType = {event.eventType} eventDate = {event.eventDate} imgUrl = {event.imgUrl} listItem = {event.facilities} />        
      })
    }
    
    this.setState({
      allEvents
    })
  }

 
render() {
  return ( 
    <div>
      { this.state.allEvents }
    </div>
    )
  }
}

export default ViewEvents;