import React from 'react';
import FormInput  from './formComponents/formComponents.js';
import Links from './links';

class SigninForm extends React.Component {
  render () {
    return ( 
      <div> 
        <form method = 'post' action = '/users/signin'>
          <h1> Signin to your Accunt </h1>
          <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
          <FormInput type = 'text' id ='password' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'password' placeholder = 'password' />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Signin' />
        </form>
        <br />
        <div>
          <Links hrefLink = '#' hrefId = 'signupBtn' hrefText = 'Signup' hrefClass = 'btn btn-primary' /> <br />
          <Links hrefLink = '#' hrefId = 'changePasswordBtn' hrefText = 'ChangePassword' hrefClass = 'btn btn-secondary' />
          <Links hrefLink = '#' hrefId = 'forgetPasswordBtn' hrefText = 'Forget Password' hrefClass = 'btn btn-secondary' />
        </div>
      </div>
    )
  } 
}

export default SigninForm;