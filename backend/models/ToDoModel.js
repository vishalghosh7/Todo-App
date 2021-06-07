const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
    title:String,
    complete:Boolean
});

const todoModel = mongoose.model("todolist", todoSchema);

module.exports = todoModel