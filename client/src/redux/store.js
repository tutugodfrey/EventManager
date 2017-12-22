import reducer from './reducer'
import { createStore } from 'redux';
/*
export default function configureStore(initialState = 'void') {
  return createStore(reducer, initialState)
}
*/

const store = createStore(reducer);

export default store;
