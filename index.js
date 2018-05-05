const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = express()

const db = mongoose.connect(process.env.DB_URL, (err) => {
  if(err) throw err 
  console.log('Connection successful')
}) 

app.listen(port, (err) => {
  if (err) throw err
  console.log('Ready on port '+port)
})