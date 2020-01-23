const express = require('express')
const {
  getWorkers,
  createWorker,
  updateWorker
} = require('../controllers/workers')
const router = express.Router()

router
  .route('/')
  .get(getWorkers)
  .post(createWorker)

router
  .route('/:id')
  .put(updateWorker)

module.exports = router
