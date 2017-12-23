
const actions = {
  displayPage: (page) => {
    return {
      type:'DISPLAY_PAGES',
      value:page
        }
  },
  setToken: (token) => {
    return {
      type : 'SET_TOKEN',
      value: token
    }
  }
}

export default actions