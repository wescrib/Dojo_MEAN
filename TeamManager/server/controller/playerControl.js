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
        Player.findById(req.body.id, (err, player) => {
            player.status = req.body.status;
                if(err){
                    return res.json(err);
                }
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
}

module.exports = new PlayerController();