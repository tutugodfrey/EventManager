import React from 'react';

class Home extends React.Component {
  constructor (props){
    super(props);
    this.state = {
     
    }
  }
  
 render() {
   return (
     <div>
       <div id = 'showCase'>
         <h1 id = 'welcomeMsg'> welcome to eventmanager app </h1>
         <p id = 'welcomeNote'> At Authentic Events Center the satisfication of
          your guest is our priority. You know!
         </p>
       </div>
     </div> 
 ); 
 }
}

export default Home;
