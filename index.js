require('./models/db')

const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const exphbs = require('express-handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const bodyparser = require('body-parser')

const studentRoute = require('./Routes/studentRoute')

var app = express();

app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req, res) => {
    /*res.send(
        `<h2>Welcome to Student Database</h2>
        <h3>Click here to get started <b>
        <a href = "/student/list">Database</a></b></h3>`
    )*/


    res.send(
        `<h2> Welcome to Monty Python Quiz Login </h2>
        <br>
        <h3>Sign in to Get Started</h3>
        <div class ="form-group">
        <label>User Name</label>
        <input type = "text" class = "form-control" name = "Username" placeHolder = "Username" id = "{{student.fullName}}" 
        </div>
        <br>

        <div class ="form-group">
        <label>Password</label>
        <input type = "text" class = "form-control" name = "Password" placeHolder = "Password" id = "{{student.fullName}}" 
        </div>
        <br>
        <input type = "radio" name = "NewUser?" id = ""{NewUser}>
        <Label>  New User?</Label>
        <br>

        <a href = "./WebViewConRef/Quiz">  <button>Submit</button> </ahref>
        `

    )
});

app.set('views', path.join(__dirname, "/views/"))

app.engine(
    'hbs', 
    exphbs ({
    handlebars: allowInsecurePrototypeAccess(handlebars),
    extname: 'hbs',
    defaultLayout: 'mainLayout',
    layoutsDir: __dirname + '/views/layouts/'
}))

app.set("view engine", "hbs");

app.listen(3000, () => {
console.log("Server started at port 3000");
});

app.use("/student", studentRoute);