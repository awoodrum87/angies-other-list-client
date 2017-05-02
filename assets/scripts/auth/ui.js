'use strict'

const store = require('../store.js')

const createAccountSuccess = (data) => {
  console.log('create account success. Data is ', data)
}

const createAccountFailure = (error) => {
  console.error(error)
  console.log('create account failure. Error is ', error)
}

const loginSuccess = (data) => {
  store.user = data.user
  console.log('login success. Data is ', data)
  $('.welcome-page').hide()
  $('#initiate-login').hide()
  $('#get-started').hide()
  $('#legal-statement').hide()
  $('#logout').show()
  $('#ch-password').show()
  $('#cr-profile').show()
  $('#delete-review').show()
  $('#update-profile').show()
  $('#create-review').show()
  $('#update-review').show()
  $('#show-reviews').show()
}

const loginFailure = (error) => {
  console.error(error)
  console.log('login fail. Error is ', error)
}

const logoutSuccess = (data) => {
  store.user = null
  console.log('logout out sucess')
  $('.welcome-page').show()
  $('#logout').hide()
  $('#ch-password').hide()
  $('#cr-profile').hide()
  $('#initiate-login').show()
  $('#get-started').show()
  $('#legal-statement').show()
  $('#update-review').hide()
  $('#ch-password').hide()
  $('#cr-profile').hide()
  $('#delete-review').hide()
  $('#update-profile').hide()
  $('#create-review').hide()
  $('#show-reviews').hide()
}
const logoutFailure = (error) => {
  console.error(error)
}

const changePasswordSuccess = (data) => {
  console.log('change password success')
}

const changePasswordFailure = (error) => {
  console.error(error)
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
