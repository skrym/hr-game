const express = require('express')
const {
  getOffices,
  createOffices
} = require('../controllers/offices')
const router = express.Router()

router
  .route('/')
  .get(getOffices)
  .post(createOffices)

module.exports = router
