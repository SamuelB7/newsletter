const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    games: [String],
    rating: Number,
})

module.exports = mongoose.model('User', userSchema)