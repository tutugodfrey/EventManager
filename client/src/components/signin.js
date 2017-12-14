import React from 'react';
import ReactDom from 'react-dom';

class SigninForm extends React.Component {
  render () {
    return ( 
      <div> 
        <form>
          <input type = 'text' name = 'username' placeholder = 'username' />
          <input type = 'text' name = 'password' placeholder = 'password' />
          <input type = 'submit' class = 'btn btn-primary' />
        </form>
      </div>
    )
  } 
}

export default SigninForm;