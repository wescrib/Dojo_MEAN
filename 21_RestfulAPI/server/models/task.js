var mongoose = require("mongoose");

var TaskSchema = new mongoose.Schema({
    title: { type : String, required: true },
    desc: {type: String, required: true, default:""},
    complete: {type: Boolean, default: false},

},{timestamps: true});
var Task = mongoose.model("Task", TaskSchema)

