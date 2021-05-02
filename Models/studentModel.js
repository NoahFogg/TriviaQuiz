const mongoose = require ('mongoose')

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'Field is required'
    },
    email: {
        type: String,
        required: 'This is required too.'
    },
    mobile: {
        type: Number,
        required: 'This is also required'
    }

})

mongoose.model('Student', studentSchema);
