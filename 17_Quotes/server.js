// Require the Express Module
var express = require('express');
// Create an Express App
var app = express();

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/quotes_db");
mongoose.Promise = global.Promise;
var QuoteSchema = new mongoose.Schema({
    quote: {type: String, required: true, minlength: 2},
    source: {type: String, required: true, minlength: 2},
}, {timestamps: true});
mongoose.model("Quote", QuoteSchema);
var Quote = mongoose.model("Quote");
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.urlencoded({ extended: true }));
// Require path
var path = require('path');
// Setting our Static Folder Directory
app.use(express.static(path.join(__dirname, './static')));
// Setting our Views Folder Directory
app.set('views', path.join(__dirname, './views'));
// Setting our View Engine set to EJScopy
app.set('view engine', 'ejs');
// Routes
// Root Request
app.get('/', function(req, res) {
    // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
    res.render('index');
})
// Add User Request 
app.post('/addQuote', function(req, res) {
    console.log("POST DATA", req.body.quote);
    // This is where we would add the user from req.body to the database.
    var quote = new Quote({quote: req.body.quote, source: req.body.source});
    quote.save(function(err){
        if(err){
            console.log("This didnt work");
            res.render("index", {errors: quote.errors})
        }else{
            console.log("new quote saved!!");
            res.redirect("/quotes")
        }
    });
})

app.get("/quotes", function(req, res){
    Quote.find({}, function(err,quotes){
        res.render("quotes", {quotes:quotes})
    })
})
// Setting our Server to Listen on Port: 8000
app.listen(8000, function() {
    console.log("listening on port 8000");
});