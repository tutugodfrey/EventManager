
export default function reducer(state, action) {
  switch(action.type) {
    case 'DISPLAY_PAGES':
     return Object.assign({}, state, {
        views:action.value
      })
    case 'SET_TOKEN':
      return Object.assign({}, state, {
        token:action.value
      })
    default:
      return state;
  }
}