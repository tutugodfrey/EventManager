import React from 'react';
import FormInput  from './formComponents/formComponents.js';
import Links from './links';

class ContinueForgetPassword extends React.Component {
  render () {
    return ( 
      <div> 
        <form>
          <h1> Continue </h1>
          <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
          <FormInput type = 'password' id ='passwd1' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd1' placeholder = 'password' /><br />
          <FormInput type = 'password' id ='passwd2' labelValue = 'Retype password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd2' placeholder = 'confirmPassword' /><br />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'submit' />
        </form>
        <br />
        <div>
          <Links hrefLink = '#' hrefId = 'signinBtn' hrefText = 'Signin' hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default ContinueForgetPassword;