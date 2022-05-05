const express = require('express')
const path = require('path')

const userRoutes = require('./routes/user')
const businessRoutes = require('./routes/business')
const customerRoutes = require('./routes/customer')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/user', userRoutes)
server.use('/api/v1/customer', customerRoutes)
server.use('/api/v1/business', businessRoutes)

server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

module.exports = server
