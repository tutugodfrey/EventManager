
const actions = {
  displayHeader: (header) => {
    return {
      type : 'SET_TOKEN',
      value: header
    }
  },
  displayPage: (page) => {
    return {
      type:'DISPLAY_PAGES',
      value:page
        }
  },
  displayFooter: (footer) => {
    return {
      type : 'SET_TOKEN',
      value: footer
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