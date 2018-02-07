var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var path = require("path");

var app = express();
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");
app.use(session({secret: "funtime"}));


app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){

    res.render("index");
});

app.post("/process", function(req,res){
    req.session.name = req.body.name;
    req.session.location = req.body.location;
    req.session.language = req.body.language;
    req.session.comment = req.body.comment;
    req.session.allInfo = req.body
    console.log(req.body);
    res.redirect("/success");
});

app.get("/success", function(req,res){
    res.render("submitted",{post: req.session.allInfo});
});

app.listen(8000,function(){
    console.log("MAGIC IS HAPPENING AT 8000")
});