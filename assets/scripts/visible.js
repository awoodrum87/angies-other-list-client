'use strict'
const store = require('./store')
// const showMyReviews = require('./templates/reviews_current_user.handlebars')
// const ui = require('../reviews/ui.js')

// when a user logs out, hide elements of the page

const crReviewHide = function () {
  if (store.user.reviewer === null) {
    $('#cr-profile-handle').show()
  } else {
    $('#cr-profile-handle').hide()
  }
}
const logoutView = function () {
  $('.reviewActions').hide()
  $('.profileActions').hide()
  $('.create-review').hide()
  $('.content').hide()
  $('.accountActions').show()
  $('.welcome-page').show()
}

// when a user logs in, show the following elements
const loginView = function () {
  $('.accountActions').hide()
  $('.welcome-page').hide()
  $('.reviewActions').show()
  $('.profileActions').show()
  $('.create-review').show()
}

const dynamUpHandlebars = function (data) {
  // // store.store.reviews = data.reviews
  // const showMyReviewsHTML = showMyReviews({reviews: data.reviews})
  // $('.content').html(showMyReviewsHTML)
}
module.exports = {
  logoutView,
  loginView,
  crReviewHide
}
