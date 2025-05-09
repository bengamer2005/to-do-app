const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
    taskTitle: {
        type: String,
        require: true
    },
    taskDescription: {
        type: String,
        require: true
    },
    status: {
        type: String,
        enum: ["Pending", "Completed"],
        default: "Pending"
    }
})

module.exports = mongoose.model("Task", TaskSchema)