'use strict'

const config = require('../config')
const store = require('../store')

const createReview = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/reviews/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteReview = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + store.review.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateReview = (data) => {
  console.log('update review data is : ', data)
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + store.review.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const getReviews = () => {
  return $.ajax({
    url: config.apiOrigin + '/reviews/',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  getReviews,
  updateReview,
  deleteReview,
  createReview
}
