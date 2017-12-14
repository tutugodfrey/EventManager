import React from 'react';
import ReactDom from 'react-dom';

class SignupForm extends React.Component {
  render () {
    return ( 
      <div> 
        <form>
          <input type = 'text' name = 'fullname' placeholder = 'fullname' />
          <input type = 'submit' class = 'btn btn-primary' value = 'Signup' />
        </form>
      </div>
    )
  } 
}

export default SignupForm;

