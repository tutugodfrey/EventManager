import React from 'react';
import Link from './elementComponents/Link';
import Ul from './elementComponents/Ul';
import Image from './elementComponents/image';
import AddEvent from './AddEvent';
import ViewCenters from './ViewCenters';
import ViewEvents from './ViewEvents';
import actions from './../redux/actions'



class Event extends React.Component {


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
            this.props.store.dispatch(actions.displayPage(ViewEvent));
          })
        } else if (data.userType === 'regular') {
          // require userId
          fetch(`http://localhost:8080/api/events/ ${this.props.eventId}`, options)
          .then(res => res.json())
          .then(data => { 
            this.props.store.dispatch(actions.displayPage(ViewEvent));
          })
        }
      }

  render () {
    return (
      <div>
        <h1> {this.props.EventType} </h1>
        <Image imgSrc = '/events-photo/images8.jpg' imgClass = '' />
        <p> {this.props.eventData} </p>
        <p> {this.props.eventOwner} </p>
        <Ul listItems = {this.props.listItem} />
        <Link hrefLink = '#' eventId = {this.props.eventId} clicked = {this.handleDeleteEvent.bind(this)} hrefContent = 'Delete Event' />
      </div>
    )
  }
}
export default Event;