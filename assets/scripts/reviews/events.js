'use strict'

const getFormFields = require('../../../lib/get-form-fields')

const api = require('./api')
const ui = require('./ui')

const onCreateReview = function (event) {
  event.preventDefault()
  console.log('click is heard')
  const data = getFormFields(this)
  console.log('create review data is ', data)
  api.createReview(data)
    .then(ui.createReviewSuccess)
    .catch(ui.createReviewFailure)
}

const onDeleteReview = function (event) {
  event.preventDefault()
  console.log('delete review is heard')
  api.deleteReview()
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

const onUpdateReview = function (event) {
  event.preventDefault()
  console.log('update review is heard')
  api.updateReview()
    .then(ui.updateReviewSuccess)
    .catch(ui.updateReviewFailure)
}

const onGetReviews = function (event) {
  event.preventDefault()
  console.log('get reviews is heard')
  api.getReviews()
    .then(ui.getReviewsSuccess)
    .catch(ui.getReviewsFailure)
}

const onInitiateLogin = function (event) {
  event.preventDefault()
  console.log('intiate-login click is heard')
}

const onGetStarted = function (event) {
  event.preventDefault()
  console.log('get started button clicks')
}

const onLegalDisclosure = function (event) {
  event.preventDefault()
  console.log('legal disclosure clicks')
}

const clickHandlers = () => {
  $('#create-review').on('submit', onCreateReview)
  // $('#delete-review').on('submit', onDeleteReview)
  $('#ind-up-review').on('submit', onUpdateReview)
  // $('#update-review').on('submit', onUpdateReview)
  $('#show-reviews').on('click', onGetReviews)
  $('#initiate-login').on('click', onInitiateLogin)
  $('#get-started').on('click', onGetStarted)
  $('#legal-statement').on('click', onLegalDisclosure)
  // $('.content').on('click', '#up-rev-submit', onUpdateReview)
  // $('document').on('submit', '.delete-review', onDeleteReview)
  $('document').on('submit', '.update-review', onUpdateReview)
}

module.exports = {
  clickHandlers
}
