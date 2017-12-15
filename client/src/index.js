 import React from 'react';
 import ReactDom from 'react-dom';
 import SignupForm from './components/signup.js';
 import SigninForm from './components/signin.js';
 //import Image from './components/image.js';

  class Header extends React.Component {
  render() {
    return ( 
      <nav className = 'navbar navbar-inverse'> 
        <ul id = 'hp-nav' className = 'nav'>
          <li className = 'nav-items' >
            <a href = '#' className = 'nav-link'>Signup </a>
          </li>
          
          <li>
            <a href = '#' className = 'nav-link' >Signin </a>
          </li>
        </ul>
      </nav>
      )
    }
  }


 class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div id = 'showCase'>
          <h1 id = 'welcomeMsg'> welcome to eventmanager app </h1>
          <p id = 'welcomeNote'> At Authentic Events Center the satisfication of
           your guest is our priority. You know!
          </p>
        </div>
        <SignupForm />
        <SigninForm />
      </div> 
  ); 
  }
}

ReactDom.render(
  <App />, document.getElementById('eventmn-app')
); 




