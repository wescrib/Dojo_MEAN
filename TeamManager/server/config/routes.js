var path = require("path");
var Players = require("../controller/playerControl.js")

module.exports = function(app){

    app.post("/create", Players.create);

    app.put("/update/:id", Players.update);

    app.get("/display", Players.show);
}