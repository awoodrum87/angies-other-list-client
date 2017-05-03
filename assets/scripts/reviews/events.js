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
  const id = $(this).attr('data-id')
  console.log('delete review is heard')
  api.deleteReview(id)
    .then(ui.deleteReviewSuccess)
    .catch(ui.deleteReviewFailure)
}

const onUpdateReview = function (event) {
  event.preventDefault()
  console.log('update review is heard')
  const data = getFormFields(this)
  const id = $(this).attr('data-id')
  api.updateReview(id, data)
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

const onGetMyReviews = function (event) {
  event.preventDefault()
  console.log('get reviews is heard')
  api.getReviews()
    .then(ui.getMyReviewsSuccess)
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
  $('#ind-up-review').on('submit', onUpdateReview)
  $('#show-all-reviews').on('click', onGetMyReviews)
  $('#show-my-reviews').on('click', onGetReviews)
  $('#initiate-login').on('click', onInitiateLogin)
  $('#get-started').on('click', onGetStarted)
  $('#legal-statement').on('click', onLegalDisclosure)
  $('.content').on('submit', '#update-review', onUpdateReview)
  $('.content').on('submit', '#delete-review-form', onDeleteReview)
}

module.exports = {
  clickHandlers
}
