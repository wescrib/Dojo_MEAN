var mongoose = require("mongoose");
var PollSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Question must be at least 10 characters"],
        minlength: [10, "Question must be at least 10 characters"]
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

}, {timestamps: true})

mongoose.model("Poll", PollSchema)