
var express = require('express');

var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/animal_db");
mongoose.Promise = global.Promise;
var AnimalSchema = new mongoose.Schema({
    type: {type: String, required: true, minlength: 2},
    diet: {type: String, required: true, minlength: 2},
    mammal: {type: Boolean, required: true}
}, {timestamps: true});
mongoose.model("Animal", AnimalSchema);
var Animal = mongoose.model("Animal");

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var path = require('path');
app.use(express.static(path.join(__dirname, './static')));
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs');

/********************ROUTING****************/

app.get('/', function(req, res) {
    res.render('index');
})


app.post('/mongooses/new', function(req, res) {
    console.log("POST DATA", req.body);
    var animal = new Animal(req.body);
    animal.save(function(err){
        if(err){
            console.log("This didnt work");
            res.render("index", {errors: animal.errors})
        }else{
            console.log("new quote saved!!");
            res.redirect("/mongoose")
        }
    });
})

app.get("/mongoose", function(req, res){
    Animal.find({}, function(err,animal){
        res.render("mongoose", {animal:animal})
    })
})

app.get("/mongoose/:id", function(req,res){
    Animal.findById(req.params.id, function(err,animal){
        res.render("loneMongoose",{animal:animal})
    })
})

app.get("/mongoose/destroy/:id", function(req,res){
    Animal.findByIdAndRemove(req.params.id, function(err){
        res.redirect("/mongoose");
    })
})

app.get("/mongoose/edit/:id", function(req,res){
    Animal.findById(req.params.id, function(err,animal){
        res.render("edit",{animal:animal});
    })
})

app.post("/mongoose/:id", function(req,res){
    Animal.findByIdAndUpdate({_id: req.params.id},req.body,{upsert:false}, function(err, animal){
        if(err){
            handleError(err);
        }else{
            res.redirect("/mongoose/"+req.params.id);
        }
    })
})


app.listen(8000, function() {
    console.log("listening on port 8000");
});