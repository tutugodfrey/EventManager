import React from 'react';
import Link from './elementComponents/Link';
import actions from './../redux/actions'
import AboutUs from './footerComponents/AboutUs'
import ContactUs from './footerComponents/ContactUs'
import TermsOfUse from './footerComponents/TermsOfUse'

class Footer extends React.Component {
  constructor () {
    super();
    this.state = {

    }
  }

  aboutUsClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(AboutUs))
  }
  contactUsClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(ContactUs))
  }
  termsOfUseClick(e) {
    e.preventDefault
    this.props.store.dispatch(actions.displayPage(TermsOfUse))

  }
  
render() {
  return ( 
    <div className = 'footer-div container-fluid'>
      <div className = 'row'>
        <nav className = 'navbar navbar-inverse col-xg-4 col-md-6 offset-xg-4 offset-md-3'> 
          <ul main-menu = 'hp-nav' className = 'nav'>
            <li className = 'nav-items' >
              <Link hrefId = 'bout-us' dispatch = { this.props.dispatch } clicked = {this.aboutUsClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'About Us '/>
            </li>
            <li className = 'nav-items' >
              <Link hrefId = 'contact-us'  dispatch = { this.props.dispatch } clicked = {this.contactUsClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Contact Us'/>
            </li>
            <li className = 'nav-items' >
              <Link hrefId = 'terms-of-use' dispatch = { this.props.dispatch } clicked = {this.termsOfUseClick.bind(this)} hrefLink = '#' hrefClass = 'nav-link' hrefContent =  'Terms of Use'/>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    )
  }
}

export default Footer;