const express = require('express')
const routes = express.Router()

const admin = require('./app/controllers/adminController')
const user = require('./app/controllers/userController')

routes.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})

//Admin routes
routes.post('/admin', admin.post)

//User routes
routes.get('/user/index', user.index)
routes.post('/user', user.post)

module.exports = routes