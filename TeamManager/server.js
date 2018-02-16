//EXPRESS
var express = require("express")
var app = express();
var session = require("express-session");

// app.use(express.static(__dirname + "/client/dist"))

//BODY-PARSER
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//MONGOOSE -- MUST GO ABOVE ROUTER IN THE FUTURE
require("./server/config/mongoose.js")

//ROUTER
var route_setter = require("./server/config/routes.js")(app)

var path = require("path");


//LOCALHOST SET UP
app.listen(8000, function() {
    console.log("running on localhost 8000")
});
