import React from 'react';
import Link from './elementComponents/Link';
import Ul from './elementComponents/Ul';
import Image from './elementComponents/image';
import ModifyCenterForm from './ModifyCenter';
import ViewCenters from './ViewCenters';
import ViewEvents from './ViewEvents';
import actions from './../redux/actions'



class Center extends React.Component {
  componentWillMount() {
   
  }
  handleViewEvents(event) {
    event.preventDefault()
    this.props.store.dispatch(actions.setWhichEvents('center'));
    this.props.store.dispatch(actions.setCenterId(this.props.centerId))
    this.props.store.dispatch(actions.displayPage(ViewEvents));
    console.log(this.props.store.getState())
  }

  handleDeleteCenter(event) {
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
      fetch(`http://localhost:8080/api/centers/ ${this.props.centerId}`, options)
      .then(res => res.json())
      .then(data => { 
        this.props.store.dispatch(actions.displayPage(ViewCenters));
      })
    } else if (data.userType === 'regular') {
      console.log('you are not allowed to perform this action')
    }
  }

  handleModifyCenter(event) { 
    event.preventDefault()
    this.props.store.dispatch(actions.displayPage(ModifyCenterForm))
    this.props.store.dispatch(actions.setCenterId(this.props.centerId))
  }

  render () {
    return (
      <div>
      <h1> { this.props.centerName } </h1>
      <Image imgSrc = {this.props.imgUrl} imgClass = '' />
      <p> { this.props.location } </p>
      <p> { this.props.cost } </p>
      <p> { this.props.sits } </p>
      <Ul listItems = { this.props.listItems } />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleViewEvents.bind(this)} hrefContent = 'View Events' />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleDeleteCenter.bind(this)} hrefContent = 'Delete Center' />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleModifyCenter.bind(this)}  hrefContent = 'Modify Center' />
      </div>
    )
  }
}
export default Center;