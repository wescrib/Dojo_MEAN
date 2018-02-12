var mongoose = require("mongoose");
var path = require('path');
var fs = require("fs");


mongoose.connect("mongodb://localhost/RestfulAPI_db", {useMongoClient: true});
mongoose.Promise = global.Promise;

var modelPath = path.join(__dirname, "./../models");
fs.readdirSync(modelPath).forEach(function(file){
    if(file.includes(".js")){
        console.log("loading" + file + "....")
        require(modelPath + "/" + file);
    }
})