'use strict'

const store = require('../store.js')
const showAllReviews = require('../templates/reviews_all_listing.handlebars')
const showMyReviews = require('../templates/reviews_current_user_listing.handlebars')

const createReviewSuccess = (data) => {
  store.review = data.review
}

const createReviewFailure = (error) => {
  console.error(error)
  $('#cr-err-modal').modal('show')
}

const deleteReviewSuccess = (data) => {
  store.review = null
}

const deleteReviewFailure = (error) => {
  console.error(error)
}

const updateReviewSuccess = (data) => {

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
