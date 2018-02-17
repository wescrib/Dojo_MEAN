var mongoose = require("mongoose");
var path = require("path");
var fs = require("fs");

mongoose.connect("mongodb://localhost/teamManager_db");
mongoose.Promise = global.Promise;

var model_path = __dirname + "/../models";
fs.readdirSync(model_path).forEach((file) => {
    if(file.includes(".js")){
        console.log("LOADING >>>>> " + file)
        require(model_path + "/" +file);
    }
})
