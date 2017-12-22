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

  console.log(this.props.store.getState)
  console.log('i am here')
   return (
     <div>
       <Header store = {this.props.store } />
       <div id = 'showCase'>
         <h1 id = 'welcomeMsg'> welcome to eventmanager app </h1>
         <p id = 'welcomeNote'> At Authentic Events Center the satisfication of
          your guest is our priority. You know!
         </p>
       </div>
       { this.state.views }
     </div> 
 ); 
 }
}

export default connect()(App);
