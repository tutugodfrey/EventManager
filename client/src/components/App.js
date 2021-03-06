import React from 'react';
import Home from './Home'
import Header from './Header';
import Footer from './Footer';
import SignupForm from './signup';
import SigninForm from './signin';

import { connect } from 'react-redux';
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      mainView:Home,
      userData: {},
      header:'',
      footer:''
    }
  }
 
 componentWillMount() {
  this.setState({
    header: this.props.store.getState().header,
    userData:this.props.store.getState().userData,
    mainView: this.props.store.getState().mainView,
    footer: this.props.store.getState().footer
  })
 }
 
 render() {
  let unsubscribe = this.props.store.subscribe(() => {
   // console.log(this.props.store.getState());
   this.setState({
    header: this.props.store.getState().header,
    token:this.props.store.getState().token,
    mainView: this.props.store.getState().mainView,
    footer: this.props.store.getState().footer
  }) 
  });
  
   return (
     <div>
      <this.state.header store = {this.props.store } />
      <div id = 'content-area' className = 'py-3'>
        <this.state.mainView store = {this.props.store} />
      </div>
      <this.state.footer store = {this.props.store} />
    </div>
 ); 
 }
}

export default connect()(App);
