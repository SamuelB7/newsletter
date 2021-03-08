const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String
}, {collation: {locale:'pt', strength: 1}})

module.exports = mongoose.model('User', userSchema)