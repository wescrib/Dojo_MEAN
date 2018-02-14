var mongoose = require("mongoose");
var PollSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question must be at least 10 characters"],
        minlength: [10, "Question must be at least 10 characters"]
    },
    //foreign key for options
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option"
    }],

    //foreign key for users that create poll
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
    //created at
}, {timestamps: true})

mongoose.model("Poll", PollSchema)