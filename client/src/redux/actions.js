import React from 'react'
const actions = {
  displaySignup: (signupForm) => {
    return {
      type:'DISPLAY_SIGNUP',
      value:signupForm
        }
  }
}

export default actions