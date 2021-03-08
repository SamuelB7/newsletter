const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    token: String,
}, {collation: {locale:'pt', strength: 1}})

module.exports = mongoose.model('User', adminSchema)