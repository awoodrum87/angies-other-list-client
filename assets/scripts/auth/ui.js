'use strict'

const store = require('../store.js')
const visible = require('../visible.js')

const createAccountSuccess = (data) => {
  $('#getStartedModal').modal('toggle')
  $('#cr-acc-success-modal').modal('show')
  visible.clearModals()
}

const createAccountFailure = (error) => {
  console.error(error)
  if (error.responseJSON.password === undefined) {
    $('#cr-acc-err-taken-modal').modal('show')
  } else {
    $('#cr-acc-err-blank-modal').modal('show')
  }
  visible.clearModals()
}

const loginSuccess = (data) => {
  store.user = data.user
  console.log(data)
  $('#initiateLogin').modal('toggle')
  visible.loginView()
  visible.crReviewerHide()
  visible.createReviewHide()
  visible.clearModals()
}

const loginFailure = (error) => {
  console.error(error)
  $('#login-err-modal').modal('show')
  visible.clearModals()
}

const logoutSuccess = (data) => {
  store.user = null
  visible.logoutView()
  visible.clearModals()
}

const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  $('#chPassword').modal('toggle')
  $('#gen-success-modal').modal('show')
  visible.clearModals()
}

const changePasswordFailure = (error) => {
  console.error(error)
  $('#pass-err-modal').modal('show')
  visible.clearModals()
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
