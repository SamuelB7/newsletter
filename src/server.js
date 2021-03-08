const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')

const server = express()

mongoose.connect('mongodb+srv://SamuelBelo:7520@cluster0.scip8.mongodb.net/teamUp?retryWrites=true&w=majority', { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

server.use(express.json())
server.use(routes)

server.listen(8000, () => {
    console.log('server ok!')
})