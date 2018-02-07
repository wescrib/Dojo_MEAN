var express = require("express");
var session = require("express-session");
var bodyParser = require("body-parser");

var app = express();

app.use(session({secret: "kittykatlicklick"}));

app.set('views', __dirname + "/views");
app.set("view engine","ejs");

app.get("/", function(req, res){
    if(req.session.count == null){
        req.session.count = 1;
    }else{
        req.session.count += 1;
    }
    res.render("index",{count: req.session.count});

})

app.get("/double", function(req,res){
    req.session.count += 1;
    res.redirect("/")
})

app.listen(8000, function(){
    console.log("PORT 8000 is on");
})