import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import SignupForm from './signup'
// import store from './../redux/store';

class Header extends React.Component {
  constructor () {
    super();
    this.state = {
        views: ''
    }
  }
  handleClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displaySignup(SignupForm))
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
          <Link hrefId = 'home' hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Home'/>
        </li>
      </ul>
      <ul id = 'hp-nav' className = 'nav'>
        <li className = 'nav-items' >
        <Link hrefId = 'signup'  dispatch = { this.props.dispatch } clicked = {this.handleClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signup'/>
        </li>
        <li>
        <Link hrefId = 'signin' hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signin'/>
        </li>
      </ul>
     {this.state.views}
    </nav>
    )
  }
}

export default Header;