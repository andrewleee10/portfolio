const router = require('express').Router()

router.use('/api', require('./contactRoutes.js'))

module.exports = router
