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

const deleteReview = (id) => {
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const updateReview = (id, data) => {
  console.log('update review data is : ', id)
  return $.ajax({
    url: config.apiOrigin + '/reviews/' + id,
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

const getMyReviews = () => {
  return $.ajax({
    url: config.apiOrigin + '/your-reviews',
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
  createReview,
  getMyReviews
}
