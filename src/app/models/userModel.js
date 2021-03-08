const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    games: [String],
    rating: Number,
}, {collation: {locale:'pt', strength: 1}})

module.exports = mongoose.model('User', userSchema)