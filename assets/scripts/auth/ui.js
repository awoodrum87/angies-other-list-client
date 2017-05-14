'use strict'

const store = require('../store.js')
const visible = require('../visible.js')

const createAccountSuccess = (data) => {
  $('#getStartedModal').modal('toggle')
  $('#cr-acc-success-modal').modal('show')
}

const createAccountFailure = (error) => {
  console.error(error)
  if (error.responseJSON.password === undefined) {
    $('#cr-acc-err-taken-modal').modal('show')
  } else {
    $('#cr-acc-err-blank-modal').modal('show')
  }
}

const loginSuccess = (data) => {
  store.user = data.user
  console.log(data)
  $('#initiateLogin').modal('toggle')
  visible.loginView()
  visible.crReviewerHide()
  visible.createReviewHide()
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
