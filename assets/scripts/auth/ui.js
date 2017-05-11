'use strict'

const store = require('../store.js')
const visible = require('../visible.js')

const createAccountSuccess = (data) => {
  $('#getStartedModal').modal('toggle')
  $('#gen-success-modal').modal('show')
}

const createAccountFailure = (error) => {
  console.error(error)
  $('#cr-acc-err-modal').modal('show')
}

const loginSuccess = (data) => {
  store.user = data.user
  $('#initiateLogin').modal('toggle')
  visible.loginView()
  visible.crReviewHide()
}

const loginFailure = (error) => {
  console.error(error)
  $('#login-err-modal').modal('show')
}

const logoutSuccess = (data) => {
  store.user = null
  visible.logoutView()
}

const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('#chPassword').modal('toggle')
  $('#gen-success-modal').modal('show')
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
