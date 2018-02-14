
var Users = require("../controllers/users")
var Polls = require("../controllers/pollControl")
var Options = require("../controllers/optionControl")

module.exports = function(app){
    /******************************************USER OPS****************************************************/
    //create user or log them in
    app.post("/users", Users.create);

    //logs user out
    app.delete("/users", Users.logout);

    //check if user is even logged int
    app.get("/session", Users.session);

    /*********************************************POLL OPS**************************************************/

    //create poll/question
    app.post("/polls", Polls.create);

    //show ALL polls/questions
    app.get("/polls", Polls.index);

    //display metadata for one question
    app.get("/polls/:id", Polls.show);

    //delete question
    app.delete("/polls/:id", Polls.destroy);
    
    /************************************************OPTION OPS ********************************/

    //show metadata for one option
    app.get("/option/:id", Options.show);
    
    //vote
    app.put("/option/:id", Options.update);

}
