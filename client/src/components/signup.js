
import React from 'react';
import ReactDom from 'react-dom';
import FormInput, {FormSelect}  from './formComponents/formComponents.js';
import Links from './links';

class SignupForm extends React.Component {
  constructor () {
    super();
    this.state = {
      options:['What is the brand name of your first car?', 'What is the name of best teacher', 
      'How old are you when you got married?', 'What is the name of your favorite pet?', 'What is the name of your first school?']
    }
  }
  render () {
    return ( 
      <div> 
        <form>
          <h1> Signup </h1>
          <FormInput type = 'text' id ='fullname' labelValue = 'Fullname' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'fullname' placeholder = 'fullname' /><br />
          <FormInput type = 'text' id ='email' labelValue = 'Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'email' placeholder = 'Email' /><br />
          <FormInput type = 'text' id ='username' labelValue = 'Username' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'Username' /><br />
          <FormInput type = 'text' id ='gender' labelValue = 'Gender' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'gender' placeholder = 'gender' /><br />
          <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'uers-pix' /><br />
          <FormInput type = 'password' id ='passwd1' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd1' placeholder = 'password' /><br />
          <FormInput type = 'password' id ='passwd2' labelValue = 'Retype password' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'passwd2' placeholder = 'confirmPassword' /><br />
          <FormSelect inputClass = 'requiredFields form-control' options = {this.state.options} />
          <FormInput type = 'text' id ='securityAns' labelValue = 'Answer' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'securityAns' placeholder = 'Answer' /><br />
          <FormInput type = 'checkbox' id ='userType' labelValue = 'Are you an admin? Click the checkbox!' divClass = 'form-group' inputClass = 'form-control' name = 'userType' value = 'admin' /><br />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'Signup' />
        </form>
        <div>
          <Links hrefLink = '#' hrefId = 'signBtn' hrefText = 'Signin' hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default SignupForm;

