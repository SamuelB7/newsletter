const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
}, {collation: {locale:'pt', strength: 1}})

module.exports = mongoose.model('Admin', adminSchema)