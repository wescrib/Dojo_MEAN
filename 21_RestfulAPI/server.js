
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(bodyParser.urlencoded())

//mongoose.js path
require("./server/config/mongoose.js")

//routes path
var route_setter = require("./server/config/router.js")
route_setter(app);


app.listen(8000, function() {
    console.log("listening on port 8000");
});