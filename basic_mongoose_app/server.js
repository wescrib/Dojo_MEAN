// import { mongo } from 'mongoose';

// Require the Express Module
var express = require('express');

//Require Mongoose Module
var mongoose = require("mongoose");
//Connect database server to web server
mongoose.connect("mongodb://localhost/basic_mongoose");
//not too sure what this is doing actually
mongoose.Promise = global.Promise;
//Creating new schema for users
var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
})
mongoose.model("User", UserSchema);
var User = mongoose.model("User");
// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJS
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    User.find({}, function(err,users){
        console.log(users);
        res.render("index", {users: users})
    })
})
// Add User Request 
app.post('/users', function(req, res) {
    console.log("POST DATA", req.body);
    // This is where we would add the user from req.body to the database.
    var user = new User({name: req.body.name, age: req.body.age});
    //this is the part where the code tries to write the new user into the database
    user.save(function(err){
        //if there is an error, it will not redirect, but log a message
        if(err){
            console.log("This did not work")
            //this is the part where it does work, and redirects back to the index page
        } else {
            console.log("This definitely worked");
            res.redirect("/");
        }
    })

})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
})

