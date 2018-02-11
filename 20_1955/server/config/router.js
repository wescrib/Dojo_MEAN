var person = require("../controllers/person.js")

module.exports = function(app){
    app.get('/', function(req, res) {
        // This is where we will retrieve the users from the database and include them in the view page we will be rendering.
        person.show(req,res);
    })

    app.get("/new/:name", function(req, res){
        person.create(req,res)
    })

    app.get("/remove/:name", function(req, res){
        person.deleteByName(req,res)
    })
    app.get("/:name", function(req,res){
        person.showByName(req,res)
    })
}
