import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import SignupForm from './signup'
import SigninForm from './signin'
// import store from './../redux/store';

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
      views:<SigninForm />
    }
  }
  homeClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displaySignup(SignupForm))
    this.newState = this.props.store.getState()
    console.log(this.newState)
    this.setState({
     views:<this.newState.views />
    })
  }
  signupClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displaySignup(SignupForm))
    this.newState = this.props.store.getState()
    console.log(this.newState)
    this.setState({
     views:<this.newState.views />
    })
  }
  signinClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displaySignup(SigninForm))
    this.newState = this.props.store.getState()
    console.log(this.newState)
    this.setState({
     views:<this.newState.views />
    })
  }
  
render() {
  
  return ( 
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
     {this.state.views}
    </nav>
    )
  }
}

export default Header;