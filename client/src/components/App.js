import React from 'react';
import SignupForm from './signup';
import SigninForm from './signin';
import Header from './Header';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
     
    }
  }
 
 render() {
  console.log(this.props.store)
   return (
       <Header store = {this.props.store } />
 ); 
 }
}

export default connect()(App);
