import React from 'react';
import { FormInput }  from './formComponents/formInputs';
import Link from './elementComponents/Link';
import SigninForm from './signin';
import actions from './../redux/actions';

class ChangePasswordForm extends React.Component {
  handleSignin() {
    event.preventDefault();
    this.props.store.dispatch(actions.displayPage(SigninForm))
  }
  render () {
    return ( 
      <div> 
        <form>
          <h1> Change Password </h1>
          <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
          <FormInput type = 'password' id ='password' labelValue = 'Old password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'password' placeholder = 'Old password' /><br />
          <FormInput type = 'password' id ='passwd1' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd1' placeholder = 'password' /><br />
          <FormInput type = 'password' id ='passwd2' labelValue = 'Retype password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd2' placeholder = 'confirmPassword' /><br />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'submit' />
        </form>
        <br />
        <div>
          <Link hrefLink = '#' hrefId = 'signinBtn' hrefContent = 'Signin' clicked = { this.handleSignin.bind(this)} hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default ChangePasswordForm;