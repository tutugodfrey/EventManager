import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import Header from './Header';
import AddCenter from './AddCenter'
import ModifyCenter from './ModifyCenter';
import ViewCenters from './ViewCenters';
import ViewEvents from './ViewEvents';
import SigninForm from './signin';
import Home from './Home'

class AdminHeader extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  homeClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(Home))
  }
  addCenterClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(AddCenter))
  }
  modifyCenterClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(ViewCenters))
  }
  viewCenterClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(ViewCenters))
  }
  viewEventsClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.setWhichEvents('all'))
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
            <li className = 'nav-item' >
              <Link hrefId = 'home' dispatch = { this.props.dispatch } clicked = {this.homeClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Home'/>
            </li>
            <li className = 'nav-item' >
              <Link hrefId = 'add-center'  dispatch = { this.props.dispatch } clicked = {this.addCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Add Center'/>
            </li>
            <li className = 'nav-item'>
              <Link hrefId = 'modify-center' dispatch = { this.props.dispatch } clicked = {this.modifyCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Modify Center'/>
            </li>
            <li>
            <Link hrefId = 'view-centers' dispatch = { this.props.dispatch } clicked = {this.viewCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Event Centers'/>
            </li>
            <li className = 'nav-item'>
              <Link hrefId = 'view-centers' dispatch = { this.props.dispatch } clicked = {this.viewEventsClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Events'/>
            </li>
          </ul>
          </div>
        </nav>
      </div>
    </div>
    )
  }
}

export default AdminHeader;