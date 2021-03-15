const express = require('express')
const routes = express.Router()

const admin = require('./app/controllers/adminController')
const user = require('./app/controllers/userController')
const session = require('./app/controllers/sessionController')

//Admin routes
routes.get('/admin', admin.home)

routes.post('/admin', admin.post)
routes.put('/admin', admin.put)
routes.delete('/admin', admin.delete)

//Login-logout
routes.post('/admin/login', session.login)

//Newsletter routes
routes.get('/admin/newsletter-form', admin.newsletterForm)

routes.post('/admin/send-newsletter', admin.sendNewsletter)

//User routes
routes.get('/user', user.subscribePage)
routes.get('/user/unsub', user.unsubPage)

routes.post('/user', user.post)
routes.put('/user', user.put)
routes.delete('/user', user.delete)

module.exports = routes