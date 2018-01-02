
import React from 'react';
import ReactDom from 'react-dom';
import { FormInput, FormSelect }  from './formComponents/formInputs.js';
import Link from './elementComponents/Link';
import SigninForm from './signin';
import actions from './../redux/actions';

class SignupForm extends React.Component {
  constructor () {
    super();
    this.state = {
      fullname:'',
      username:'', 
      email:'',
      gender:'',
      passwd1:'',
      passwd2:'',
      securityQtn: '',
      securityAns:'',
      usersPix: '',
      userType: null,
      file:'',
      imagePreviewUrl: '',
      options:['select a question', 'What is the brand name of your first car?', 'What is the name of best teacher', 
      'How old are you when you got married?', 'What is the name of your favorite pet?', 'What is the name of your first school?']
    }
  }
  fullnameChange(event) {
    event.preventDefault()
    this.setState({
      fullname:event.target.value
    })
  //  console.log(this.refs.fullname.value)
  }
  usernameChange(event) {
    event.preventDefault()
    this.setState({
      username:event.target.value
    })
  }
  emailChange(event) {
    event.preventDefault()
    this.setState({
      email:event.target.value
    })
  }
  genderChange(event) {
    event.preventDefault()
    this.setState({
      gender:event.target.value
    })
  }
  passwd1Change(event) {
    event.preventDefault()
    this.setState({
      passwd1:event.target.value
    })
  }
  passwd2Change(event) {
    event.preventDefault()
    this.setState({
      passwd2:event.target.value
    })
  }
  securityQtnChange(event) {
    event.preventDefault()
    this.setState({
      securityQtn:event.target.value
    })
  }
  securityAnsChange(event) {
    event.preventDefault()
    this.setState({
      securityAns:event.target.value
    })
  }
  userTypeChange(event) {
    event.preventDefault()
    if(event.target.checked) {
      this.setState({
        userType:'admin'
      })
    } else {
      this.setState({
        userType:''
      })
    }
  }
  photoChange(event) {
    event.preventDefault()
    console.log(event.target.value)
    this.setState({
     usersPix:event.target.value
    })

    let reader = new FileReader();
    let file = event.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  signup(data) {
    const headers =  new Headers();
    headers.append('Content-Type', 'application/json');
    const options = {
      method:'POST',
      body:data
    }
    //  headers,
    // body:JSON.stringify(data)
    console.log('data', data)
    fetch('http://localhost:8080/users/signup', options)
    .then(res => res.json())
    .then(data => {
      if(data.username) {
        this.props.store.dispatch(actions.displayPage(SigninForm))
      } else {
        console.log('error', data)
      }
    })
    .catch(error => console.log(error))
  }

  handleSignup(event) {
    event.preventDefault()
    if(this.state.securityQtn === '' || this.state.securityQtn === 'select a question') {
      console.log('Please select a security question')
    }
   const userdata = {
    fullname:this.state.fullname,
    username:this.state.username,
    email:this.state.email,
    gender: this.state.gender,
    usersPix:this.state.usersPix,
    passwd1: this.state.passwd1,
    passwd2: this.state.passwd2,
    securityQtn: this.state.securityQtn,
    securityAns: this.state.securityAns,
    userType: this.state.userType
  }
  const signupFormData = new FormData();
  signupFormData.append('fullname', this.state.fullname);
  signupFormData.append('username', this.state.username);
  signupFormData.append('email', this.state.email);
  signupFormData.append('passwd1', this.state.passwd1);
  signupFormData.append('passwd2', this.state.passwd2);
  signupFormData.append('gender', this.state.gender);
  signupFormData.append('securityQtn', this.state.securityQtn);
  signupFormData.append('securityAns', this.state.securityAns);
  signupFormData.append('userType', this.state.userType);
  signupFormData.append('userPix', this.state.file)
  console.log(this.state.file)
//  this.signup(userdata)
this.signup(signupFormData)

  }

  render () {
    return ( 
      <div> 
        <form>
          <h1> Signup </h1>
          <FormInput type = 'text' id ='fullname' labelValue = 'Fullname' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.fullnameChange.bind(this)} referred = 'fullname' name = 'fullname' placeholder = 'fullname' value = {this.state.fullname} /><br />
          <FormInput type = 'text' id ='email' labelValue = 'Email' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.emailChange.bind(this)} ref = 'email'name = 'email' placeholder = 'Email' value = {this.state.email} /><br />
          <FormInput type = 'text' id ='username' labelValue = 'Username' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.usernameChange.bind(this)} name = 'username' placeholder = 'Username' value = {this.state.username} /><br />
          <FormInput type = 'text' id ='gender' labelValue = 'Gender' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.genderChange.bind(this)} ref = 'gender' name = 'gender' placeholder = 'gender' /><br />
          <FormInput type = 'file' id ='photo' labelValue = 'Photo' inputClass = 'form-group' name = 'users-pix'  onChange = {this.photoChange.bind(this)}/><br />
          <FormInput type = 'password' id ='passwd1' labelValue = 'password' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.passwd1Change.bind(this)} ref = 'passwd1' name = 'passwd1' placeholder = 'password' value = {this.state.passwd1} /><br />
          <FormInput type = 'password' id ='passwd2' labelValue = 'Retype password' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.passwd2Change.bind(this)} ref = 'passwd2' name = 'passwd2' placeholder = 'confirmPassword' value = {this.state.passwd2} /><br />
          <FormSelect inputClass = 'requiredFields form-control' options = {this.state.options} onChange = {this.securityQtnChange.bind(this)} />
          <FormInput type = 'text' id ='securityAns' labelValue = 'Answer' divClass = 'form-group' inputClass = 'requiredFields form-control' onChange = {this.securityAnsChange.bind(this)} ref = 'securityAns' name = 'securityAns' placeholder = 'Answer' value = {this.state.securityAns} /><br />
          <FormInput type = 'checkbox' id ='userType' labelValue = 'Are you an admin? Click the checkbox!' divClass = 'form-group' inputClass = 'form-control' onChange = {this.userTypeChange.bind(this)} ref = 'userType' name = 'userType'  value = 'admin' /><br />
          <FormInput type = 'submit' inputClass = 'btn btn-primary' click = {this.handleSignup.bind(this)} value = 'Signup' />
        </form>
        <div>
          <Link hrefLink = '#' hrefId = 'signBtn' hrefContent = 'Signin' hrefClass = 'btn btn-primary' /> <br />
        </div>
      </div>
    )
  } 
}

export default SignupForm;

