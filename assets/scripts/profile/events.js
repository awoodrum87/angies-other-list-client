'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateReviewer = function (event) {
  console.log('create reviewer 1')
  event.preventDefault()
  console.log('data is ', data)
  console.log('create reviewer 2')
  const data = getFormFields(this)
  api.createReviewer(data)
    .then(ui.createProfileSuccess)
    .catch(ui.createProfileFailure)
}

const onUpdateReviewer = function (event) {
  event.preventDefault()
  console.log('update reviewer click is heard')

  const data = getFormFields(event.target)
  api.updateReviewer(data)
    .then(ui.updateProfileSuccess)
    .catch(ui.updateProfileFailure)
}

const clickHandlers = () => {
  $('#create-profile').on('submit', onCreateReviewer)
  $('#update-profile').on('submit', onUpdateReviewer)
}

module.exports = {
  clickHandlers
}
