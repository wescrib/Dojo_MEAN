var mongoose = require("mongoose");
var User = mongoose.model("User");
var Option = mongoose.model("Option");
var Poll = mongoose.model("Poll");

class PollsController {
    index(req,res){
        //for path ,model refers to the name of mongoDB collection name
        Poll.find({}).populate({ path: "user", model:"User" }).exec((err,polls) => {
            if(err){
                return res.json(err)
            }
            return res.json(polls)
        })
    }

    show(req, res) {
        Poll.findById(req.params.id).populate({ path: "options", model:"Option"}).exec((err,poll) => {
            if(err) {
                return res.json(err);
            }
            return res.json(poll);
        })
    }

    destroy(req, res) {
        Poll.findById(req.params.id,(err,poll)=>{
            if(err){
                return res.json(err);
            }
            if(!poll){
                return res.json({ status: "Poll not found!"})
            }
            else if(poll.user == req.session.user_id){
                poll.remove();
                return res.json({ status: true })
            }else{
                return res.json({ status: false })
            }
        })
    }

    create(req, res) {

        //create is making a poll and defining all the options at the same time, despite options being in a separate collection

        Poll.create({ question: req.body.question, user: req.session.user_id }, (err, poll) => {
            if(err){
                return res.json(err);
            }
            console.log("POLL LOG")
            req.body.option1.poll = poll._id;
            Option.create( req.body.option1, (err, option1) => {
                if(err){
                    return res.json(err);
                }
                req.body.option2.poll = poll._id;
                Option.create( req.body.option2, (err, option2) => {
                    if(err){
                        return res.json(err);
                    }
                    req.body.option3.poll = poll._id;
                    Option.create( req.body.option3, (err, option3) => {
                        if(err){
                            return res.json(err)
                        }
                        req.body.option4.poll = poll._id;
                        Option.create( req.body.option4, (err, option4) => {
                            if(err){
                                return res.json(err);
                            }
                            //options from poll model column
                            poll.options.push(option1._id);
                            poll.options.push(option2._id);
                            poll.options.push(option3._id);
                            poll.options.push(option4._id);
                            poll.save((err,poll) => {
                                if(err) {
                                    return res.json(err);
                                }
                                return res.json(poll);
                            })
                        })
                    })
                }) 
            })
        })
    }
}

module.exports = new PollsController();