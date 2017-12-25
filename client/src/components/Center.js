import React from 'react';
import Link from './elementComponents/Link';
import Ul from './elementComponents/Ul';
import Image from './elementComponents/image';
import ModifyCenterForm from './ModifyCenter';
import actions from './../redux/actions'



class Center extends React.Component {
  componentWillMount() {
   
  }
  handleViewEvents(event) {
    event.preventDefault()
     const userdata = {
      password:this.state.password,
      username:this.state.username,
    }
   this.signin(userdata)
    }
    handleDeleteCenter(event) {
      event.preventDefault()
       const userdata = {
        password:this.state.password,
        username:this.state.username,
      }
     this.signin(userdata)
      }

      handleModifyCenter(event) { 
        event.preventDefault()
        this.props.store.dispatch(actions.displayPage(ModifyCenterForm))
        this.props.store.dispatch(actions.setCenterId(this.props.centerId))
        }
  render () {
    return (
      <div>
      <h1> {this.props.name} </h1>
      <Image imgSrc = '/centers-photo/images14.jpg' imgClass = '' />
      <p> {this.props.location} </p>
      <p> {this.props.cost} </p>
      <p> {this.props.sits} </p>
      <Ul listItems = {this.props.listItem} />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleViewEvents.bind(this)} hrefContent = 'View Events' />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleDeleteCenter.bind(this)} hrefContent = 'Delete Center' />
      <Link hrefLink = '#' centerId = {this.props.centerId} clicked = {this.handleModifyCenter.bind(this)}  hrefContent = 'Modify Center' />
      </div>
    )
  }
}
export default Center;