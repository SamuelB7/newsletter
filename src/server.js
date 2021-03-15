const express = require('express')
const routes = require('./routes')
const mongoose = require('mongoose')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const session = require('./config/session')

require('dotenv/config')

const server = express()

mongoose.connect(process.env.MONGO_DB_CONNECTION_STRING, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true
})

server.use(session)

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(express.static('public'))
server.use(methodOverride('_method'))
server.use(routes)

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(8000, () => {
    console.log('server ok!')
})