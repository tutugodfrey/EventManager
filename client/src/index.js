 import React from 'react';
 import ReactDom from 'react-dom';
// import configureStore from './redux/store';
import store from './redux/store';
 import { Provider } from 'react-redux';
 import App from './components/App';
 // import SignupForm from './components/signup.js';
 // import SigninForm from './components/signin.js';
 //  import ForgetPasswordForm from './components/forgetPassword.js';
 // import ChangePassword from './components/changePassword.js';
 // import ContinueForgetPassword from './components/continueForgetPassword.js';
 // import AddCenterForm from './components/addCenter';
 // import ModifyCenterForm from './components/ModifyCenter';
 // import AddEventForm from './components/AddEvent';
 // import ModifyEventForm from './components/ModifyEvent';
 // import Header from './components/Header'
 // import Image from './components/image.js';
const initialState = 'welcome to eventmanager';
// const store = configureStore(initialState)
// console.log(store)

ReactDom.render(
  <Provider store = {store } >
  <App store = {store } />
  </Provider>,
   document.getElementById('eventmn-app')
); 




