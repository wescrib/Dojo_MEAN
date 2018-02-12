var Users = require("../controllers/user");

module.exports = function(app){
    app.post("/users", Users.create);
    app.post("/users/authenticate", Users.authenticate);
    app.get("/session", Users.isLoggedIn);
    app.delete("/logout", Users.logout);
}