var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");
var User = mongoose.model("User");

class UsersController {
    create(req,res) {
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
        console.log(req.body);
        User.create(req.body, (err, user) => {
            if(err){
                console.log(err);
            }
            //saves logged in user to a session variable
            req.session.user_id = user._id
            return res.json(user)
        })
    }
    authenticate(req,res){
        User.findOne({ email: req.body.email }, (err, user) => {
            if(err){
                //when using ANGULAR
                return res.json(err);

                //when using EJS
                // return res.redirect("/")
            }
            //user.authenticate is a function from the UserSchema model file
            if (user && user.authenticate(req.body.password)){
                req.session.user_id = user._id;
                return res.json(user);
            }
            return res.json({
                "errors" : "invalid credentials"
            });
        })
    }
    isLoggedIn(req,res){
        if(req.session.user_id){
            //using ANGULAR
            return res.json({
                "status" : true
            })
            //using EJS:
            //return true);
        }else{
            return res.json({
                "status" : false
            })
            //using EJS:
            //return res.redirect("/");
        }
    }
    logout(req,res){
        delete req.session.user_id
        return res.json({
            "status" : true
        });
        //using EJS:
        //redirect to root route
    }
}

module.exports = new UsersController();