var Users = require("../controllers/user");
var path = require("path")

module.exports = function(app){
    app.post("/users/create", Users.create);
    app.post("/users/login", Users.authenticate);
    app.get("/session", Users.isLoggedIn);
    app.delete("/logout", Users.logout);
    app.get("/users/all", Users.all)

    app.all("*",(req,res,next) => {
        res.sendFile(path.resolve("./public/dist/index.html"))
    })
}