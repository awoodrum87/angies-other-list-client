'use strict'

const config = require('../config')
const store = require('../store')

const createReviewer = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/reviewers/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const updateReviewer = (data) => {
  console.log('data is : ', data)
  return $.ajax({
    url: config.apiOrigin + '/reviewers/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  createReviewer,
  updateReviewer
}
