import React from 'react';
import { FormInput } from './formComponents/formInputs.js';
import Link from './elementComponents/Link';
import Form from './elementComponents/Form';
import Div from './elementComponents/Div';

class SigninForm extends React.Component {
  form() {
   return <Form formId = 'signin-form' method = 'post' action = '/users/signin' formControls = {this.content()} />
  }
  content() {
    return (
      <div>
      <h1> Signin to your Accunt </h1>
      <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
      <FormInput type = 'text' id ='password' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'password' placeholder = 'password' />
      <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Signin' />
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