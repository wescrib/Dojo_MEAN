var express = require("express");

var session = require("express-session");

var app = express();

//bodyParser allows express to handle post data
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));


app.use(session({secret: 'codingdojorocks'}));

//this sets the location where express will look for the ejs views
app.set('views', __dirname + "/views");

//now lets set view engine itself so that express knows that we are using ejs as opposed to another templating engine
app.set('view engine', "ejs");



app.get("/", function(req, res){


    res.render("index", {title: "my express project"});
})

app.post("/users", function (req, res){
    // hard-coded user data
    // var users_array = [
    //     {name: "Michael", email: "michael@codingdojo.com"}, 
    //     {name: "Jay", email: "jay@codingdojo.com"}, 
    //     {name: "Brendan", email: "brendan@codingdojo.com"}, 
    //     {name: "Andrew", email: "andrew@codingdojo.com"}
    // ];

    console.log("POST DATE \n\n", req.body)
    req.session.kitty = req.body;
    console.log(req.session.kitty);
    res.redirect("/");
})


app.listen(8000, function(){
    console.log("The magic is at port 8000");
})