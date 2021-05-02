const mongoose = require('mongoose');
const database = require('./Routes');

mongoose.connect(
    "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false",
    {useUnifiedTopology: "true"},

    (err) => {
        if (!err) {
            console.log("Connection's good");
        }
        else {
            console.log("Connection's bad!");
        }
    }
);

module.exports = databaseStatus;