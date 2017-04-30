'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateAccount = function (event) {
  const data = getFormFields(this)
  console.log('data is ', data)
  event.preventDefault()
  console.log('click is heard')
  api.createAccount(data)
    .then(ui.createAccountSuccess)
    .catch(ui.createAccountFailure)
}

const onLogin = function (event) {
  console.log('I can hear your login')
  event.preventDefault()

  const data = getFormFields(this)
  api.login(data)
    .then(ui.loginSuccess)
    .catch(ui.loginFailure)
}

const onLogout = function (event) {
  console.log('logged out button works')
  event.preventDefault()

  api.logout()
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password button works')

  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

// const onCreateReviewer = function (event) {
//   event.preventDefault()
//   console.log('data is ', data)
//   console.log('create reviewer click is heard')
//   const data = getFormFields(this)
//   api.createReviewer(data)
//     .then(ui.createProfileSuccess)
//     .catch(ui.createProfileFailure)
// }

const clickHandlers = () => {
  $('#create-account').on('submit', onCreateAccount)
  $('#login').on('submit', onLogin)
  $('#logout').on('submit', onLogout)
  $('#change-password').on('submit', onChangePassword)
  // $('#create-profile').on('submit', onCreateReviewer)
}

module.exports = {
  clickHandlers
}
