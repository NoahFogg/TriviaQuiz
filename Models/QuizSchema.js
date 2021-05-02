let mongoose = require('mongoose');
let dbManager = require ('./dbManager');

var quizSchema = new mongoose.Schema({
    Username: {
        type: String,
        required: 'Field is required'
    },
    Password: {
        type: String,
        required: 'This is required too.'
    },
    Points: {
        type: Number
    }

})

mongoose.model('User', userSchema);
