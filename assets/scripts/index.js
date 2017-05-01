'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
const authEvents = require('./auth/events.js')
const profileEvents = require('./profile/events.js')
const reviewEvents = require('./reviews/events.js')
// on document ready
$(() => {
  $('#logout').hide()
  $('#ch-password').hide()
  $('#show-reviews').hide()
  $('#cr-profile').hide()
  $('#delete-review').hide()
  $('#update-profile').hide()
  $('#create-review').hide()
  $('#update-review').hide()
  authEvents.clickHandlers()
  profileEvents.clickHandlers()
  reviewEvents.clickHandlers()
})
