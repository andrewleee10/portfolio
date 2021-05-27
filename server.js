require('dotenv').config()
const express = require('express')
const { join } = require('path')

const app = express()
const port = process.env.PORT || 3001

app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'client', 'build', 'index.html'))
})

require('./db')
  .then(() => app.listen(port))
  .catch(err => console.log(err))
