import React from 'react';
import Link from './elementComponents/Link';
import Div from './elementComponents/Div';
import AdminCenter from './AdminCenter';
import UserCenter from './UserCenters'
import actions from './../redux/actions'



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
    const newState = this.props.store.getState();
    const centers = newState.centers;
    const userType = newState.userData.userType;
    let allCenters;
    if(userType === 'admin') {
      allCenters = centers.map(center => {
        return <AdminCenter store = {this.props.store} key = {center.id} centerId = {center.id} centerName = {center.centerName} location = {center.location} sits = {center.sits} cost = {center.cost} listItems = {center.facilities} />        
      }) 
    } else if(userType === 'regular') {
      allCenters = centers.map(center => {
        return <UserCenter store = {this.props.store} key = {center.id} centerId = {center.id} centerName = { center.centerName } location = {center.location} sits = {center.sits} cost = {center.cost} listItems = {center.facilities} />        
      }) 
    }
     
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