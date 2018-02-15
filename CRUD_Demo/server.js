//Express
let express = require("express");
let app = express();

//MongoDB
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/funtime_db");
let UserSchema = new mongoose.Schema({
    first_name: {type: String, require: true},
    last_name: {type: String, require: true},
    email: {type: String, require: true},
    editable: {type: String, require: true},
})
mongoose.model("User", UserSchema);
let User = mongoose.model("User")

//PATH
const path = require("path");

//Morgan
let morgan = require("morgan");
app.use(morgan("dev"));

//bodyparser
let bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//static folder
app.use(express.static(__dirname + "/client/dist"));

//Routes
app.get("/users", (req,res,next) => {
    console.log("Server > GET '/users'")
    User.find({}, (err, users) => {
        return res.json(users);
    })
})

app.post("/users", (req,res,next) => {
    delete req.body._id;
    console.log("Server > POST '/users' > user ", req.body)
    User.create(req.body, (err, user) => {
        if(err) res.json(err)
        else return res.json(user)
    })
    // res.json([])
})

app.delete("/users/:id", (req,res,next) => {
    console.log("Server > DELETE >" + req.params.id)
    User.deleteOne({_id: req.params.id}, (err, data) => {
        if(err) res.json(err)
        else return res.json(true)
    })
})

app.put("/users/:id", (req,res,next) => {
    console.log("Server > PUT '/users/")
    User.update({_id: req.params.id}, req.body,(err, rawData) => {
        if(err) res.json(err)
        else return res.json(true)
    })
})


app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./client/dist/index.html"));
})

//SERVER
app.listen(8080, () => console.log("THE SERVER IS INDEED RUNNING ON 8080"))