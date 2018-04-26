import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions';
import Header from './Header';
import AddEvent from './AddEvent'
import ModifyEvent from './ModifyEvent';
import ViewEvents from './ViewEvents';
import ViewCenters from './ViewCenters'
import SigninForm from './signin';
import Home from './Home'

class userHeader extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  homeClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(Home))
  }
  viewCentersClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(ViewCenters))
  }
  addEventClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(AddEvent))
  }
  modifyEventClick(e) {
    e.preventDefaultthis
    this.props.store.dispatch(actions.setWhichEvents('user'))
    this.props.store.dispatch(actions.displayPage(ViewEvents))
  }
  viewEventClick(e) {
    e.preventDefault()
    this.props.store.dispatch(actions.setWhichEvents('user'))
    this.props.store.dispatch(actions.displayPage(ViewEvents))
  }
  logoutClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(SigninForm))
    this.props.store.dispatch(actions.displayHeader(Header))
  }
  
render() {
  return ( 
    <div className = 'header-div container-fluid'>
      <div className = 'row'>
        <ul id = 'hp-nav' className = 'nav'>
        <li>
          <Link hrefId = 'logout' dispatch = { this.props.dispatch } clicked = {this.logoutClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Logout' />
          </li>
        </ul>
      </div>
      <div className = 'row'>
        <nav className = 'navbar nav-tabs navbar-expand-sm navbar-light'> 
          <button className = 'navbar-toggler navbar-toggler-right' data-toggle = 'collapse' data-target = '#nav-menu' type ='button' aria-controls="pry-nav" aria-expanded="false" aria-label="Toggle navigation">
          <span className ="navbar-toggler-icon"></span>
          </button>
          <div id = 'nav-menu'  className = 'collapse navbar-collapse'>
            <ul main-menu = 'hp-nav' className = 'navbar-nav'>
              <li className = 'nav-items' >
                <Link hrefId = 'home' dispatch = { this.props.dispatch } clicked = {this.homeClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Home'/>
              </li>
              <li className = 'nav-items' >
              <Link hrefId = 'add-center'  dispatch = { this.props.dispatch } clicked = {this.viewCentersClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Event Centers'/>
              </li>
              <li className = 'nav-items' >
              <Link hrefId = 'add-center'  dispatch = { this.props.dispatch } clicked = {this.addEventClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Add Event'/>
              </li>
              <li>
              <Link hrefId = 'modify-center' dispatch = { this.props.dispatch } clicked = {this.modifyEventClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Modify Event'/>
              </li>
              <li>
              <Link hrefId = 'view-centers' dispatch = { this.props.dispatch } clicked = {this.viewEventClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Events'/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
    )
  }
}

export default userHeader;