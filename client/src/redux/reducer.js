
export default function reducer(state, action) {
  switch(action.type) {
    case 'DISPLAY_SIGNUP':
    // console.log(action.value)
     return Object.assign({}, state, {
        views:action.value
      })
    default:
      return state;
  }
}