'use strict'

// const store = require('../store.js')

const createProfileSuccess = (data) => {
  $('#crProfile').modal('toggle')
}

const createProfileFailure = (error) => {
  console.error(error)
  $('#bl-flds-modal').modal('show')
}

const updateProfileSuccess = (data) => {
  $('#upProfile').modal('toggle')
  $('#gen-success-modal').modal('show')
}

const updateProfileFailure = (error) => {
  console.error(error)
  const errorCode = error.status
  if (errorCode === 500) {
    $('#up-pro-fail').modal('show')
  } else if (errorCode === 422) {
    $('#bl-flds-modal').modal('show')
  }
}

module.exports = {
  createProfileSuccess,
  createProfileFailure,
  updateProfileSuccess,
  updateProfileFailure
}
