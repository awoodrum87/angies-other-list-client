'use strict'

const store = require('../store.js')

const createReviewSuccess = (data) => {
  console.log('create review success. Data is ', data)
  store.review = data.review
  console.log('store.review object is:', store.review)
}

const createReviewFailure = (error) => {
  console.error(error)
  console.log('create review failure. Error is ', error)
  $('#cr-err-modal').modal('show')
}

const deleteReviewSuccess = (data) => {
  store.review = null
  console.log('store.review object is:', store.review)
}

const deleteReviewFailure = (error) => {
  console.error(error)
  console.log('delete fail. Error is ', error)
}

const updateReviewSuccess = (data) => {
  console.log('update review success')
}
const updateReviewFailure = (error) => {
  console.error(error)
  console.log('update review error')
}

const getReviewsSuccess = (data) => {
  console.log('get reviews success')
  console.log('get reviews data is', data)
}

const getReviewsFailure = (error) => {
  console.error(error)
}

module.exports = {
  createReviewSuccess,
  createReviewFailure,
  deleteReviewSuccess,
  deleteReviewFailure,
  updateReviewSuccess,
  updateReviewFailure,
  getReviewsSuccess,
  getReviewsFailure
}