const router = require('express').Router()
const { Contact } = require('../models')

router.get('/contact', (req, res) => {
  Contact.find({})
    .then(posts => res.json(posts))
    .catch(err => console.log(err))
})

router.post('/contact', (req, res) => {
  Contact.create({
    name: req.body.name,
    email: req.body.email,
    message: req.body.message
  })
    .then(post => {
      res.json(post)
    })
    .catch(err => console.log(err))
})

module.exports = router
