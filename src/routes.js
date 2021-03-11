const express = require('express')
const routes = express.Router()

const admin = require('./app/controllers/adminController')
const user = require('./app/controllers/userController')

//Admin routes
routes.post('/admin', admin.post)
routes.put('/admin', admin.put)
routes.delete('/admin', admin.delete)

//User routes
routes.get('/user', user.registerPage)

routes.post('/user', user.post)
routes.put('/user', user.put)
routes.delete('/user', user.delete)

module.exports = routes