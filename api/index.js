const express = require('express')
const router = express.Router()

// API routes
router.use('/services', require('./services'))

// Catch 404 and forward to error handler.
router.use((req, res, next) => {
  next('error not found')
})

router.use((err, req, res, next) => {
  log.error(err)
  res.status(500).json({})
})

module.exports = router