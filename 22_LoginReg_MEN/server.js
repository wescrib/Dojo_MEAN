var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var port = 8000;
var app = express();

//middleware
app.set("view engine", "ejs");
app.set("views", __dirname + "/client/views");
app.use(express.static(__dirname + "/client/static"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(session({
    secret: "funtime",
    resave: false,
    saveUninitialized: true
}))

//mongoose
require("./server/config/mongoose.js");

//routes
require("./server/config/router")(app);

app.listen(port, () => console.log("the party is at " + port))