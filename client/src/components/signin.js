import React from 'react';
import ReactDom from 'react-dom';
import FormInput  from './formComponents/formComponents.js';

class SigninForm extends React.Component {
  render () {
    return ( 
      <div> 
        <form>
          <h1> Signin to your Accunt </h1>
          <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
          <FormInput type = 'text' id ='password' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'password' placeholder = 'password' />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Signin' />
        </form>
      </div>
    )
  } 
}

export default SigninForm;