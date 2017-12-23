import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import SignupForm from './signup'
import SigninForm from './signin'
import Home from './Home'

class Footer extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  homeClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(Home))
  }
  signupClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(SignupForm))
  }
  signinClick(e) {
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
        </ul>
        <ul id = 'hp-nav' className = 'nav'>
          <li className = 'nav-items' >
          <Link hrefId = 'signup'  dispatch = { this.props.dispatch } clicked = {this.signupClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signup'/>
          </li>
          <li>
          <Link hrefId = 'signin' dispatch = { this.props.dispatch } clicked = {this.signinClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signin'/>
          </li>
        </ul>
      </nav>
    </div>
    )
  }
}

export default Footer;