import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'


class ViewCenters extends React.Component {
  constructor () {
    super();
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
      console.log(data)
      // const newState = this.props.store.getState()
    })
  }
  componentWillMount(){ 
    this.getCenter()
  }
render() {
  console.log(this.props.store.getState())
  return ( 
    <div>
      Show event centers
    </div>
    )
  }
}

export default ViewCenters;