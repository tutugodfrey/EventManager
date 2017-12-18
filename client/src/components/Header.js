import React from 'react';
import Link from './elementComponents/Link';

class Header extends React.Component {
  handleClick(e) {
    e.preventDefault
    console.log('I have be clicked')
  }
render() {
  return ( 
    <nav className = 'navbar navbar-inverse'> 
      <ul main-menu = 'hp-nav' className = 'nav'>
        <li className = 'nav-items' >
          <Link hrefId = 'home' clicked = {this.handleClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Home'/>
        </li>
      </ul>
      <ul id = 'hp-nav' className = 'nav'>
        <li className = 'nav-items' >
        <Link hrefId = 'signup' hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signup'/>
        </li>
        <li>
        <Link hrefId = 'signin' hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Signin'/>
        </li>
      </ul>
    </nav>
    )
  }
}

export default Header;