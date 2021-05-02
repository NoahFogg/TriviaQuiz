const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/StudentDB', {
    useNewUrlParser: true
},

err => {
    if(!err) {
        console.log('Connection is Good!')
    }
    else {
        console.log('Connection is Bad!' + err)
    }
})

require("./studentmodel")