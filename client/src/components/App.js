import React from 'react';
import Home from './Home'
import SignupForm from './signup';
import SigninForm from './signin';
import Header from './Header';
import Footer from './Footer';
import { connect } from 'react-redux';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      views:Home,
      token: ''
    }
  }
 
 render() {

  let unsubscribe = this.props.store.subscribe(() => {
   this.setState({
    token:this.props.store.getState().token,
    views: this.props.store.getState().views 
  })
  });
   return (
     <div>
    <Header store = {this.props.store } />
    <this.state.views store = {this.props.store} />
    <Footer store = {this.props.store} />
    </div>
 ); 
 }
}

export default connect()(App);
