var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var User = mongoose.model("User");

class UsersController {
    create(req, res){
        console.log(req.body)
        User.find({ email: req.body.email },(err, users) => {
            if (users.length > 0){
                return res.json({error: "user is already in the database"});
            }else{
                console.log(req.body);
                User.create(req.body, (err, newUser) => {
                    if(err){
                        return res.json(err);
                    }
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                })
            }
        })
    }
    authenticate(req,res){
        if(req.body.email == "" || req.body.password == ""){                            //if field for email or pass is blank,
            return res.json({"status":"one or both fields has not been filled out"})     //return message saying one or both is blank
        }
        User.findOne({ email: req.body.email }, (err, user) => {                        //if email is input, look up email
            if(user == null){                                                           //if email is not in db,
                return res.json({"status" : "invalid email"});                           //return an error message
            }else{
                if (User.schema.methods.authenticate(req.body.password, user.password)){                      //if email checks out, compare passwords
                    req.session.user_id = user._id;                                     //log user into session,
                    return res.json(user);                     //and return success message
                }else{                                                                  //if password does not match,
                    return res.json({"status" : "invalid password"});                   //return error message
                }
            }

        })
    }
    isLoggedIn(req,res){
        if(req.session.user_id){
            User.findById(req.session.user_id, (err, user) => {
                return res.json(user);
            })
        }else{
            return res.json({
                "status" : false
            })
        }
    }
    logout(req,res){
        req.session.user_id = null
        return res.json({
            "status" : "user logged out"
        });
    }
    all(req,res,next){
        User.find({}, (err, users)=>{
            return res.json(users);
        })
    }
}

module.exports = new UsersController();