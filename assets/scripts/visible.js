'use strict'

// when a user logs out, hide elements of the page
const logoutView = function () {
  $('#update-profile').hide()
  $('.welcome-page').show()
  $('#logout').hide()
  $('#ch-password').hide()
  $('#cr-profile').hide()
  $('#initiate-login').show()
  $('#get-started').show()
  $('#legal-statement').show()
  $('#update-review').hide()
  $('#ch-password').hide()
  $('#cr-profile').hide()
  $('#delete-review').hide()
  $('#create-review').hide()
  $('#show-my-reviews').hide()
  $('#show-all-reviews').hide()
  $('.create-review').hide()
  $('.content').hide()
}

// when a user logs in, show the following elements
const loginView = function () {
  $('.welcome-page').hide()
  $('#initiate-login').hide()
  $('#get-started').hide()
  $('#legal-statement').hide()
  $('#logout').show()
  $('#ch-password').show()
  $('#cr-profile').show()
  $('#delete-review').show()
  $('#update-profile').show()
  $('#create-review').show()
  $('#update-review').show()
  $('#show-my-reviews').show()
  $('#show-all-reviews').show()
  $('#up-profile').show()
  $('.create-review').show()
  $('#retail-image').show()
}
module.exports = {
  logoutView,
  loginView
}
