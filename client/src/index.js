 import React from 'react';
 import ReactDom from 'react-dom';
 import SignupForm from './components/signup.js';
 import SigninForm from './components/signin.js';
 import ForgetPasswordForm from './components/forgetPassword.js';
 import ChangePassword from './components/changePassword.js';
 import ContinueForgetPassword from './components/continueForgetPassword.js';
 import AddCenterForm from './components/addCenter';
 import ModifyCenterForm from './components/ModifyCenter';
 import AddEventForm from './components/AddEvent';
 import ModifyEventForm from './components/ModifyEvent';
 import Header from './components/Header'
  // import Image from './components/image.js';



 class App extends React.Component {
   constructor (props){
     super(props);
     this.state = {
      views:<SignupForm />
     }
   }
   
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
        { this.state.views }
      </div> 
  ); 
  }
}

ReactDom.render(
  <App />, document.getElementById('eventmn-app')
); 




