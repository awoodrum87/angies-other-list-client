'use strict'
const store = require('./store')

const clearModals = function () {
  $('#login').trigger('reset')
  $('#create-account').trigger('reset')
  $('#update-profile').trigger('reset')
  $('#change-password').trigger('reset')
}

const createReviewHide = function () {
  if (store.user.reviewer === null) {
    $('.create-review').hide()
  } else {
    $('.create-review').show()
    $('#prompt-banner').hide()
  }
}
const crReviewerHide = function () {
  if (store.user.reviewer === null) {
    $('#cr-profile-handle').show()
    $('.reviewActions').hide()
    $('#up-pro').hide()
  } else {
    $('#cr-profile-handle').hide()
    $('.reviewActions').show()
    $('#up-pro').show()
  }
}

// when a user logs out, hide elements of the page

const logoutView = function () {
  $('.reviewActions').hide()
  $('.profileActions').hide()
  $('.create-review').hide()
  $('.content').hide()
  $('.accountActions').show()
  $('.welcome-page').show()
  $('#prompt-banner').hide()
}

// when a user logs in, show the following elements
const loginView = function () {
  $('.accountActions').hide()
  $('.welcome-page').hide()
  $('.reviewActions').show()
  $('.profileActions').show()
  $('#prompt-banner').show()
}

module.exports = {
  logoutView,
  loginView,
  crReviewerHide,
  createReviewHide,
  clearModals
}
