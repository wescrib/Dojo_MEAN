var mongoose = require("mongoose");
var path = require('path');
var fs = require("fs");


mongoose.connect("mongodb://localhost/55yoDudes_db");
mongoose.Promise = global.Promise;

var modelPath = path.join(__dirname, "./../models");
fs.readdirSync(modelPath).forEach(function(file){
    if(file.includes(".js")){
        require(modelPath + "/" + file);
    }
})