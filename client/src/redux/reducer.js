import Home from './../components/Home'
import Header from './../components/Header';
import Footer from './../components/Footer';

const initialState = {
  header:Header,
  mainView:Home,
  footer:Footer
}
export default function reducer(state= initialState, action) {
  switch(action.type) {
    case 'SET_HEADER':
    return Object.assign({}, state, {
      header:action.value
    })
    case 'DISPLAY_PAGES':
     return Object.assign({}, state, {
      mainView:action.value
      })
    case 'SET_USER_DATA':
      return Object.assign({}, state, {
        userData:action.value
      })
    case 'SET_FOOTER':
    return Object.assign({}, state, {
      footer:action.value
    })
    default:
      return state;
  }
}