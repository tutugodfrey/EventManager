import React from 'react';
import Link from './elementComponents/Link';
import Div from './elementComponents/Div';
import Ul from './elementComponents/Ul'
import Image from './elementComponents/image';

import actions from './../redux/actions'


class Center extends React.Component {
  render () {
    return (
      <div>
      <h1> {this.props.name} </h1>
      <Image imgSrc = '/centers-photo/images14.jpg' imgClass = '' />
      <p> {this.props.location} </p>
      <p> {this.props.cost} </p>
      <p> {this.props.sits} </p>
      <Ul listItems = {this.props.listItem} />
      <Link hrefLink = '#' hrefContent = 'View Events' />
      <Link hrefLink = '#' hrefContent = 'Delete Center' />
      <Link hrefLink = '#' hrefContent = 'Modify Center' />
      </div>
    )
  }
}

class ViewCenters extends React.Component {
  constructor () {
    super();
    this.state = {

    }
    
  }
  
  getCenter() {
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
      this.center()
    })
  }
  componentWillMount(){ 
    this.getCenter();
  }

  center() {
    const centers = this.props.store.getState().centers;
    let allCenters;
    allCenters = centers.map(center => {
      return <Center key = {center.id} name = {center.name} location = {center.location} sits = {center.sits} cost = {center.cost} listItem = {center.facilities} />        
    })  
    this.setState({
      allCenters
    })
  }

render() {
  return ( 
    <div>
     {this.state.allCenters}
    </div>
    )
  }
}

export default ViewCenters;