const express = require('express')
const path = require('path')
const fs = require('fs')
const userCol = require("./models/userSchema.js")
const mongoose = require('mongoose')
const mongodb = require('mongodb')
var app = express()

app.listen(3000, () => {    

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
});