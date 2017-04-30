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
}

const loginFailure = (error) => {
  console.error(error)
  console.log('logout fail. Error is ', error)
}

const logoutSuccess = (data) => {
  store.user = null
  console.log('sign out sucess')
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

// const createProfileSuccess = (data) => {
//   console.log('create profile success. Data is ', data)
// }
//
// const createProfileFailure = (error) => {
//   // console.error(error)
//   console.log('create profile failure. Error is ', error)
// }

module.exports = {
  createAccountSuccess,
  createAccountFailure,
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure,
  changePasswordSuccess,
  changePasswordFailure
  // createProfileSuccess,
  // createProfileFailure
}
