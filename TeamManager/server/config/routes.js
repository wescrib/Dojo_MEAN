var path = require("path");
var Players = require("../controller/playerControl.js")

module.exports = function(app){

    app.post("/create", Players.create);

    app.put("/update/:id", Players.update);

    app.get("/display", Players.show);

    app.delete("/remove/:id", Players.destroy);
    app.get("/findOne/:id", Players.findOne)
}