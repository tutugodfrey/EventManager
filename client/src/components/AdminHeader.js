import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import AddCenter from './AddCenter'
import ModifyCenter from './ModifyCenter';
import ViewCenters from './ViewCenters';
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
    this.props.store.dispatch(actions.displayPage(ModifyCenter))
  }
  viewCenterClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(ViewCenters))
  }
  logoutClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(SigninForm))
  }
  
render() {
  return ( 
    <div>
      <nav className = 'navbar navbar-inverse'> 
        <ul main-menu = 'hp-nav' className = 'nav'>
          <li className = 'nav-items' >
            <Link hrefId = 'home' dispatch = { this.props.dispatch } clicked = {this.homeClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Home'/>
          </li>
          <li className = 'nav-items' >
          <Link hrefId = 'add-center'  dispatch = { this.props.dispatch } clicked = {this.addCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Add Center'/>
          </li>
          <li>
          <Link hrefId = 'modify-center' dispatch = { this.props.dispatch } clicked = {this.modifyCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Modify Center'/>
          </li>
          <li>
          <Link hrefId = 'view-centers' dispatch = { this.props.dispatch } clicked = {this.viewCenterClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Event Center'/>
          </li>
        </ul>
        <ul id = 'hp-nav' className = 'nav'>
        <li>
          <Link hrefId = 'logout' dispatch = { this.props.dispatch } clicked = {this.logoutClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Logout' />
          </li>
        </ul>
      </nav>
    </div>
    )
  }
}

export default AdminHeader;