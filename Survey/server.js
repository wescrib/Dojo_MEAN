var express = require("express");
var session = require("express-session");
var morgan = require("morgan");
var app = express();
var port = 8000;
var bodyParser = require("body-parser");
// app.use(express.static(__dirname + "/client/dist"));
app.use(bodyParser.json());
app.use(session({               //dont know
    secret: "funtime",          //what this
    resave: false,              //does
    saveUnintialized: true      //at all
}))

//dont know what this line does either
app.use(morgan("tiny"));


require("./server/config/mongoose");

require("./server/config/routes")(app);

app.listen(port,() => 
console.log("open at " + port));