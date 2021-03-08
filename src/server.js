const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
require('dotenv/config')

const server = express()

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

server.use(express.json())
server.use(routes)

server.listen(8000, () => {
    console.log('server ok!')
})