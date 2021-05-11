const { model, Schema } = require('mongoose')

const Contact = new Schema({
  name: String,
  email: String,
  message: String
})

module.exports = model('Contact', Contact)