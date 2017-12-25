
const actions = {
  displayHeader: (header) => {
    return {
      type : 'SET_HEADER',
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
      type : 'SET_FOOTER',
      value: footer
    }
  },
  setUserData: (data) => {
    return {
      type : 'SET_USER_DATA',
      value: data
    }
  },
  setCenters: (data) => {
    return {
      type : 'SET_CENTERS',
      value: data
    }
  }
}

export default actions