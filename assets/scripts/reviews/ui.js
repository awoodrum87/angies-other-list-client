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
  const errorCode = error.status
  if (errorCode === 500) {
    $('#cr-err-modal').modal('show')
  } else if (errorCode === 422) {
    $('#bl-flds-modal').modal('show')
  }
}

const deleteReviewSuccess = (data) => {
  store.review = null
  $('#del-rev-success').modal('show')
  $('.delModal').modal('toggle')
}

const deleteReviewFailure = (error) => {
  console.error(error)
  $('#gen-error-modal').modal('show')
}

const updateReviewSuccess = (data) => {
  // $('.content').hide()
  $('.upModal').modal('toggle')
  $('#up-rev-success-modal').modal('show')
  $('#ind-up-review').trigger('reset')
}

const updateReviewFailure = (error) => {
  console.error(error)
  $('#up-rev-err-modal').modal('show')
}

const getReviewsSuccess = (data) => {
  const showReviewsHTML = showAllReviews({reviews: data.reviews})
  $('.content').html(showReviewsHTML)
}

const getMyReviewsSuccess = (data) => {
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
