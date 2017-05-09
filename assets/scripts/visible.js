'use strict'

// when a user logs out, hide elements of the page
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
  loginView
}
