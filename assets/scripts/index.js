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
  $('.create-review').hide()
  $('.reviewActions').hide()
  $('.profileActions').hide()
  $('#prompt-banner').hide()
  authEvents.clickHandlers()
  profileEvents.clickHandlers()
  reviewEvents.clickHandlers()
  $(function () {
    const dtToday = new Date()
    let month = dtToday.getMonth() + 1
    let day = dtToday.getDate()
    const year = dtToday.getFullYear()
    if (month < 10) {
      month = '0' + month.toString()
    }
    if (day < 10) {
      day = '0' + day.toString()
    }
    const maxDate = year + '-' + month + '-' + day
    $('#txtDate').attr('max', maxDate)
  })
})
