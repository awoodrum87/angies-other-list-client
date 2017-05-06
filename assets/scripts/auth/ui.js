'use strict'

const store = require('../store.js')
const visible = require('../visible.js')

const createAccountSuccess = (data) => {

}

const createAccountFailure = (error) => {
  console.error(error)
  $('#cr-acc-err-modal').modal('show')
}

const loginSuccess = (data) => {
  store.user = data.user
  $('#initiateLogin').modal('toggle')
  visible.loginView()
  // $('.welcome-page').hide()
  // $('#initiate-login').hide()
  // $('#get-started').hide()
  // $('#legal-statement').hide()
  // $('#logout').show()
  // $('#ch-password').show()
  // $('#cr-profile').show()
  // $('#delete-review').show()
  // $('#update-profile').show()
  // $('#create-review').show()
  // $('#update-review').show()
  // $('#show-my-reviews').show()
  // $('#show-all-reviews').show()
  // $('#up-profile').show()
  // $('.create-review').show()
  // $('#retail-image').show()
}

const loginFailure = (error) => {
  console.error(error)
  $('#login-err-modal').modal('show')
}

const logoutSuccess = (data) => {
  store.user = null
  console.log('logout out sucess')
  visible.logoutView()
  // $('#update-profile').hide()
  // $('.welcome-page').show()
  // $('#logout').hide()
  // $('#ch-password').hide()
  // $('#cr-profile').hide()
  // $('#initiate-login').show()
  // $('#get-started').show()
  // $('#legal-statement').show()
  // $('#update-review').hide()
  // $('#ch-password').hide()
  // $('#cr-profile').hide()
  // $('#delete-review').hide()
  // $('#create-review').hide()
  // $('#show-my-reviews').hide()
  // $('#show-all-reviews').hide()
  // $('.create-review').hide()
  // $('.content').hide()
  // $('#update-profile').hide()
}

const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('#pass-err-modal').modal('show')
}

module.exports = {
  createAccountSuccess,
  createAccountFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
