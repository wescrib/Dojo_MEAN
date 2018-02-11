var mongoose = require("mongoose");

var Person = mongoose.model("Person");

module.exports = {
    show: function(req,res){
        Person.find({}, function(err, people){
            console.log(people)
            res.json(people);
        })
    },
    create: function(req,res){
        console.log(req.params);
        var newPerson = new Person(req.params);
        newPerson.save(function(err){
            if(err){
                console.log("this is an error");
                res.redirect("/");
            }else{
                console.log(newPerson);
                res.redirect("/");
            }
        });
    },
    showByName: function(req,res){
        Person.find({name:req.params.name}, function(err,person){
            if(err){
                console.log("this is an error");
                res.redirect("/");
            }else{
                console.log("youre on your way, dawg");
                res.json(person);
            }
        })
    },
    deleteByName: function(req,res){
        Person.remove({name:req.params.name}, function(err,person){
            if(err){
                console.log("this is an error");
                res.redirect("/");
            }else{
                console.log("youre on your way, dawg");
                res.redirect("/");
            }
        })
    }

}