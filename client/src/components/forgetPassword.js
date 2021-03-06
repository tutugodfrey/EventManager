import React from 'react';
import { FormInput } from './formComponents/formInputs.js';
import Link from './elementComponents/Link';
import SigninForm from './signin';
import actions from './../redux/actions';

class ForgetPasswordForm extends React.Component {
  constructor() {
    super()
    this.state = {
      securityQtn:'What is the brand name of your first car?'
    }
  }
  componentWillMount() {

  }

  handleSignin() {
    event.preventDefault();
    this.props.store.dispatch(actions.displayPage(SigninForm))
  }

  render () {
    return ( 
      <div> 
        <form>
          <h1> Enter security information </h1>
          <FormInput type = 'text' id ='username' labelValue = 'username/ Email' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'username' placeholder = 'username/ Email' />
          <p>{this.state.securityQtn}</p>
          <FormInput type = 'text' id ='securityAns' labelValue = 'Answer' divClass = 'form-group' inputClass = 'requiredFields form-control' name = 'securityAns' placeholder = 'Answer' />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' value = 'submit' />
        </form>
        <br />
        <div>
          <Link hrefLink = '#' hrefId = 'signinBtn' hrefContent = 'Signin' clicked = { this.handleSignin.bind(this) } hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default ForgetPasswordForm;