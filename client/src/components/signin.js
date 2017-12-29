import React from 'react';
import { FormInput } from './formComponents/formInputs.js';
import Link from './elementComponents/Link';
import Form from './elementComponents/Form';
import SigninSucced from './SigninSucced';
import AdminHeader from './AdminHeader';
import UserHeader from './userHeader'
import Div from './elementComponents/Div';
import actions from './../redux/actions';

class SigninForm extends React.Component {
  constructor () {
    super();
    this.state = {
      username: '',
      password: '',
      token:''
    }
  }
  usernameChange(event) {
    event.preventDefault()
    this.setState({
      username:event.target.value
    })
  }
  passwordChange(event) {
    event.preventDefault()
    this.setState({
      password:event.target.value
    })
  }
  componentWillMount(){

  }
  signin(data) {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method:'POST',
      headers,
      body:JSON.stringify(data)
    }

    fetch('http://localhost:8080/users/signin', options)
    .then(res => res.json())
    .then(data => { 
      this.setState({
        token:data.token
      })
      if(data.userType === 'admin') {
        this.props.store.dispatch(actions.setUserData(data));
        this.props.store.dispatch(actions.displayPage(SigninSucced));
        this.props.store.dispatch(actions.displayHeader(AdminHeader))
      } else if (data.userType === 'regular') {
        this.props.store.dispatch(actions.setUserData(data));
        this.props.store.dispatch(actions.displayPage(SigninSucced));
        this.props.store.dispatch(actions.displayHeader(UserHeader))
      }
    })
  }
  handleSignin(event) {
    event.preventDefault()
    const newState = this.props.store.getState();
    if(newState.userData) {
      if(this.state.username === newState.userData.username) {
        if(newState.userData.userType === 'admin') {
          this.props.store.dispatch(actions.displayPage(SigninSucced));
          this.props.store.dispatch(actions.displayHeader(AdminHeader))
        } else if(newState.userData.userType === 'regular') {
          this.props.store.dispatch(actions.displayPage(SigninSucced));
          this.props.store.dispatch(actions.displayHeader(UserHeader))
        }
      } else {
        this.props.store.dispatch(actions.clearStore())
        const userdata = {
          password:this.state.password,
          username:this.state.username,
        }
      this.signin(userdata)
      }
    } else { 
      const userdata = {
        password:this.state.password,
        username:this.state.username,
      }
    this.signin(userdata)
    }
  }

  form() {
   return <Form formId = 'signin-form' method = 'post' action = '/users/signin' formControls = {this.content()} />
  }
  content() {
    return (
      <div>
      <h1> Signin to your Accunt </h1>
      <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.usernameChange.bind(this)} value = {this.state.username} name = 'username' placeholder = 'username/ Email' />
      <FormInput type = 'text' id ='password' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.passwordChange.bind(this)} value = {this.state.password} name = 'password' placeholder = 'password' />
      <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.handleSignin.bind(this)} value = 'Signin' />
    </div>
    )
  }
  
  render () {
    return (
      <div> 
      <Div divClass = 'card' divContent = {this.form()} /> 
        <br />
          <Link hrefLink = '#' hrefId = 'signupBtn' hrefContent = 'Signup' hrefClass = 'btn btn-primary' /> <br />
          <Link hrefLink = '#' hrefId = 'changePasswordBtn' hrefContent  = 'ChangePassword' hrefClass = 'btn btn-secondary' />
          <Link hrefLink = '#' hrefId = 'forgetPasswordBtn' hrefContent = 'Forget Password' hrefClass = 'btn btn-secondary' />
      </div>
    )
  } 
}

export default SigninForm;