const express = require('express')
const routes = express.Router()

const user = require('./app/controllers/userController')
const search = require('./app/controllers/searchController')

routes.get('/', (req, res) => {
    res.json({message: 'Hello World!'})
})
routes.get('/search', search.searchByGames)

routes.get('/user/index', user.index)
routes.post('/user', user.post)

module.exports = routes