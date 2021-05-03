let mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    Username: String,
    Password: String,
    Points: Number
})

const userData = mongoose.model('userData', userSchema)
module.exports = userData