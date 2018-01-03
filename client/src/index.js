 import React from 'react';
 import ReactDom from 'react-dom';
import store from './redux/store';
 import { Provider } from 'react-redux';
 import App from './components/App';

const initialState = 'welcome to eventmanager';
ReactDom.render(
  <Provider store = {store } >
  <App store = {store } />
  </Provider>,
   document.getElementById('eventmn-app')
); 




