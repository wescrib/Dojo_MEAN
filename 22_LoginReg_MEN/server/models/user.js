var mongoose = require("mongoose");
var bcrypt = require("bcryptjs");

var UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    }, password: {
        type: String
    }
}, { timestamps: true });

UserSchema.methods.authenticate = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model("User", UserSchema);