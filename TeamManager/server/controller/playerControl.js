var mongoose = require("mongoose");
var Player = mongoose.model("Player");

class PlayerController {
    create(req, res){
        Player.create(req.body, (err, player) => {
            if(err){
                return res.json(err)
            }
            return res.json(player);
        })
    }
    update(req,res){
        Player.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}, (err, player) => {
            console.log("ATTEMPTING TO UPDATE")
                if(err){
                    return res.json(err);
                }
            console.log("UPDATING " + req.params.id)
            return res.json(player);
        })
    }
    show(req, res){
        Player.find({}, (err, players) => {
            if(err){
                return res.json(err)
            }
            return res.json(players)
        })
    }

    destroy(req, res){
        Player.findByIdAndRemove(req.params.id, (err, player) => {
            if(err){
                return res.json(err);
            }
            return res.json({"success" : player.name + " has been removed."})
        })
    }
}

module.exports = new PlayerController();