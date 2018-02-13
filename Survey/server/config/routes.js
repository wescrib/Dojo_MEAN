
var Users = require("../controllers/users")
var Polls = require("../controllers/pollControl")
var Options = require("../controllers/optionControl")

module.exports = function(app){
    app.post("/users", Users.create);
    app.delete("/users", Users.logout);
    app.get("/session", Users.session);

    app.post("/polls", Polls.create);
    app.get("/polls", Polls.index);
    app.get("/polls/:id", Polls.show);
    app.delete("/polls/:id", Polls.destroy);
    
    app.get("/option/:id", Options.show);
    app.put("/option/:id", Options.update);

}
