const session = require('express-session')
const MongoDBStore= require('connect-mongodb-session')(session)

require('dotenv/config')

const store = new MongoDBStore({
    uri: process.env.MONGO_DB_CONNECTION_STRING,
    collection: "sessions"
})

module.exports = session({
    secret: 'secrettoken',
    resave: false,
    saveUninitialized: true,
    unset: 'destroy',
    store: store,
    name: 'sessionCookie',
    genid: (req) => {
        
    }
})