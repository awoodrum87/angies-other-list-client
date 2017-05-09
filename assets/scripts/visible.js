'use strict'
const store = require('./store')
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
module.exports = {
  logoutView,
  loginView,
  crReviewHide
}
