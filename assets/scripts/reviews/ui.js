'use strict'

const store = require('../store.js')
const showAllReviews = require('../templates/reviews_all_listing.handlebars')
const showMyReviews = require('../templates/reviews_current_user_listing.handlebars')
// const api = require('./api.js')
// const ui = require('./ui.js')

const createReviewSuccess = (data) => {
  store.review = data.review
  $('#create-review').trigger('reset')
  $('#gen-success-modal').modal('show')
}

const createReviewFailure = (error) => {
  console.error(error)
  $('#cr-err-modal').modal('show')
}

const deleteReviewSuccess = (data) => {
  store.review = null
  // $('.delModal').modal('toggle')
  $('#del-rev-success').modal('show')
}

const deleteReviewFailure = (error) => {
  console.error(error)
  $('#gen-error-modal').modal('show')
}

const updateReviewSuccess = (data) => {
  // $('.upModal').modal('toggle')
  $('body').removeClass('modal-open')
  $('.modal-backdrop').remove()
  $('#up-rev-success-modal').modal('show')
}

const updateReviewFailure = (error) => {
  console.error(error)
  $('#up-rev-err-modal').modal('show')
}

const getReviewsSuccess = (data) => {
  console.log('get all reviews ui')
  const showReviewsHTML = showAllReviews({reviews: data.reviews})
  $('.content').html(showReviewsHTML)
}

const getMyReviewsSuccess = (data) => {
  console.log('get my reviews ui')
  const showMyReviewsHTML = showMyReviews({reviews: data.reviews})
  $('.content').html(showMyReviewsHTML)
}

const getReviewsFailure = (error) => {
  console.error(error)
  $('#gen-error-modal').modal('show')
}

module.exports = {
  createReviewSuccess,
  createReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure,
  updateReviewSuccess,
  updateReviewFailure,
  getReviewsSuccess,
  getReviewsFailure,
  getMyReviewsSuccess
}
