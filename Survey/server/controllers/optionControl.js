var mongoose = require("mongoose");
var Option = mongoose.model("Option");
class OptionsController {
    update(req,res) {                                               //update changes the vote count of each option
        Option.findById(req.params.id, (err, option) => {           //find one option by ID(from the URL), and call it option
            if(err){
                return res.json(err);
            }
            option.vote++;                                          //.vote is a property of an option and will be incrimented everytime the upvote button is hit
            option.save((err, option) => {                          //saves the upvote
                if(err){
                    return res.json(err);
                }
                return res.json(option);
            })
        })
    }
    show(req, res){                                                 //shows ALL the options
        Option.findById(req.params.id, (err, option) => {
            if(err){
                return res.json(err);
            }
            return res.json(option);
        })
    }
}

module.exports = new OptionsController();