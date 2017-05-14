'use strict'

const visible = require('../visible.js')

const createProfileSuccess = (data) => {
  $('#crProfile').modal('toggle')
  $('#gen-success-modal').modal('show')
  visible.createReviewHide()
  visible.crReviewerHide()
}

const createProfileFailure = (error) => {
  console.error(error)
  console.log('create reviewer 3')
}

const updateProfileSuccess = (data) => {
  $('#upProfile').modal('toggle')
  $('#gen-success-modal').modal('show')
  // $('.create-review').show()
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
