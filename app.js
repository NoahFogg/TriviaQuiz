const express = require('express')
const path = require('path')
const fs = require('fs')
//const userCol = require("./models/UserSchema")
//const router = require('./Routes/userRouter')
const mongoose = require('mongoose')
const mongodb = require('mongodb')
const pug = require('pug')
const Users = require('./.vs/Users.json')


var app = express()
app.set('views', './views');
app.set('view engine', 'pug');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const userData = require('./models/userSchema')

app.listen(3001, () => {    

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


app.get('/', function (req, res) {
    res.redirect('login');
  })

app.get('/login', function(req, res) {
    res.render('login')
})



  app.post('/login', function(req, res) {
    var user = {
        Username: req.body.userName,
        Password: req.body.password
    }
    res.redirect('quiz');
})


app.get('/quiz', function (req, res) {
    res.render('quiz')
})

app.post('/quiz', function(req, res) {

    res.redirect('leaderboard')
} )

//var usersProcessed = JSON.stringify(JSON.parse('Users.json'))

app.get('/leaderboard', function (req, res) {
    res.render('leaderboard')
    //let users = usersProcessed;

})