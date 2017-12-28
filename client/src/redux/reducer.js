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
    case 'SET_CENTERS':
    return Object.assign({}, state, {
      centers:action.value
    })
    case 'SET_CENTER_ID':
    return Object.assign({}, state, {
      centerId:action.value
    })
    case 'SET_USER_EVENTS':
    return Object.assign({}, state, {
      userEvents:action.value
    })
    case 'SET_CENTER_EVENTS':
    return Object.assign({}, state, {
      centerEvents:action.value
    })
    case 'SET_ALL_EVENTS':
    return Object.assign({}, state, {
      allEvents:action.value
    })
    case 'SET_EVENT_ID':
    return Object.assign({}, state, {
      eventId:action.value
    })
    case 'SET_WHICH_EVENTS':
    return Object.assign({}, state, {
      // expect user || center || all
      whichEvents:action.value
    })
    default:
      return state;
  }
}